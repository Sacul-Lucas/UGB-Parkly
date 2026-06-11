const reportData = [];

const plates = [
    "ABC1D23",
    "DEF4G56",
    "GHI7J89",
    "JKL0M12",
    "NOP3Q45",
    "RST6U78"
];

const models = [
    "Corolla",
    "Civic",
    "Onix",
    "HB20",
    "Compass",
    "Tracker"
];

function randomDate() {

    const start =
    new Date(2025,0,1);

    const end =
    new Date();

    return new Date(
        start.getTime() +
        Math.random() *
        (end.getTime()-start.getTime())
    );
}

for (let i = 0; i < 100; i++) {

    const date = randomDate();

    const hour = Math.floor(Math.random()*24);

    reportData.push({

        date:
        date.toISOString().split("T")[0],

        hour:
        `${hour.toString().padStart(2,"0")}:${
            Math.floor(Math.random()*60)
            .toString()
            .padStart(2,"0")
        }`,

        plate:
        plates[
            Math.floor(Math.random()*plates.length)
        ],

        model:
        models[
            Math.floor(Math.random()*models.length)
        ],

        status:
        Math.random() > .5
        ? "estacionado"
        : "saida",

        stay:
        `${Math.floor(Math.random()*6)+1}h`
    });

}

function renderTable() {

    const tbody =
    document.getElementById(
        "reportTableBody"
    );

    tbody.innerHTML = "";

    const plateSearch =
    document
    .getElementById("plateFilter")
    .value
    .toLowerCase();

    const status =
    document
    .getElementById("statusFilter")
    .value;

    const shift =
    document
    .getElementById("shiftFilter")
    .value;

    let filtered =
    reportData.filter(item => {

        let matchesPlate =
        item.plate
        .toLowerCase()
        .includes(plateSearch);

        let matchesStatus =
        status === "all" ||
        item.status === status;

        let hour =
        Number(item.hour.split(":")[0]);

        let matchesShift = true;

        if(shift === "manha")
            matchesShift =
            hour >= 6 && hour < 12;

        if(shift === "tarde")
            matchesShift =
            hour >= 12 && hour < 18;

        if(shift === "noite")
            matchesShift =
            hour >= 18 || hour < 6;

        return (
            matchesPlate &&
            matchesStatus &&
            matchesShift
        );

    });

    filtered.forEach(item => {

        tbody.innerHTML += `

        <tr>

            <td>${item.date}</td>

            <td>${item.hour}</td>

            <td>${item.plate}</td>

            <td>${item.model}</td>

            <td>

                <span class="
                    statusBadge
                    ${
                        item.status ===
                        "estacionado"
                        ? "active"
                        : "exit"
                    }
                ">
                    ${
                        item.status ===
                        "estacionado"
                        ? "Estacionado"
                        : "Saiu"
                    }
                </span>

            </td>

            <td>${item.stay}</td>

        </tr>

        `;

    });

    updateIndicators(filtered);
}

function updateIndicators(data){

    document.getElementById(
        "totalMovements"
    ).innerText =
    data.length;

    document.getElementById(
        "totalEntries"
    ).innerText =
    data.filter(x =>
        x.status === "estacionado"
    ).length;

    document.getElementById(
        "totalExits"
    ).innerText =
    data.filter(x =>
        x.status === "saida"
    ).length;

    document.getElementById(
        "averageStay"
    ).innerText = "2h 40m";
}

new Chart(
document.getElementById("movementChart"),
{
    type:"bar",

    data:{
        labels:[
            "Entradas",
            "Saídas"
        ],

        datasets:[{
            data:[62,38],
            backgroundColor:[
                "#4F46E5",
                "#EF4444"
            ]
        }]
    }
});

new Chart(
document.getElementById("statusChart"),
{
    type:"doughnut",

    data:{
        labels:[
            "Estacionados",
            "Saíram"
        ],

        datasets:[{
            data:[58,42],

            backgroundColor:[
                "#22C55E",
                "#F97316"
            ]
        }]
    }
});

document
.getElementById("exportCSV")
.addEventListener("click", () => {

    let csv =
    "Data,Hora,Placa,Modelo,Status,Permanencia\n";

    reportData.forEach(item => {

        csv +=
        `${item.date},${item.hour},${item.plate},${item.model},${item.status},${item.stay}\n`;

    });

    const blob =
    new Blob(
        [csv],
        { type: "text/csv" }
    );

    const link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "relatorio-estacionamento.csv";

    link.click();

});

[
 "plateFilter",
 "statusFilter",
 "shiftFilter",
 "startDate",
 "endDate"
].forEach(id => {

    document
    .getElementById(id)
    .addEventListener(
        "input",
        renderTable
    );

});

renderTable();