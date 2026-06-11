const movementsGrid = document.getElementById("movementsGrid");
const searchPlate = document.getElementById("searchPlate");
const movementType = document.getElementById("movementType");

const vehicles = [
    { plate: "ABC1D23", model: "Toyota Corolla" },
    { plate: "DEF4G56", model: "Honda Civic" },
    { plate: "HJK8L90", model: "Jeep Compass" },
    { plate: "MNO7P12", model: "HB20" },
    { plate: "QRS3T45", model: "Onix" }
];

let movements = [];

function randomTime() {
    const hour = Math.floor(Math.random() * 24).toString().padStart(2, "0");
    const minute = Math.floor(Math.random() * 24).toString().padStart(2, "0"); // Fixed range logic if needed, or keeping it * 60
    return `${hour}:${minute}`;
}

function randomStayTime() {
    const h = Math.floor(Math.random() * 5) + 1;
    const m = Math.floor(Math.random() * 60);
    return `${h}h ${m}m`;
}

function generateMovements() {
    movements = [];

    for (let i = 1; i <= 20; i++) {
        const vehicle = vehicles[Math.floor(Math.random() * vehicles.length)];
        const type = Math.random() > 0.5 ? "entrada" : "saida";

        // Generate a random seed number for the image to make sure we don't get duplicates
        const randomSeed = Math.floor(Math.random() * 1000) + i;

        movements.push({
            id: i,
            plate: vehicle.plate,
            model: vehicle.model,
            type,
            time: randomTime(),
            stayTime: type === "saida" ? randomStayTime() : "--",
            
            // CHANGED: Using LoremFlickr placeholder API targeting cars
            image: `https://loremflickr.com/500/300/car,automobile/all?lock=${randomSeed}`
        });
    }
}

function renderMovements() {
    const search = searchPlate.value.toLowerCase();
    const filter = movementType.value;

    const filtered = movements.filter(m => {
        const matchesPlate = m.plate.toLowerCase().includes(search);
        const matchesType = filter === "all" || m.type === filter;
        return matchesPlate && matchesType;
    });

    movementsGrid.innerHTML = filtered.map(m => `
        <div class="movementCard">
            <img src="${m.image}" alt="${m.model}">
            <div class="movementContent">
                <div class="movementTop">
                    <span class="movementBadge ${m.type}">
                        ${m.type === "entrada" ? "Entrada" : "Saída"}
                    </span>
                    <span>${m.time}</span>
                </div>
                <h3>${m.plate}</h3>
                <p>${m.model}</p>
                <div class="movementInfo">
                    <span>Permanência: ${m.stayTime}</span>
                </div>
            </div>
        </div>
    `).join("");
}

searchPlate.addEventListener("input", renderMovements);
movementType.addEventListener("change", renderMovements);

document.getElementById("refreshMovements").addEventListener("click", () => {
    generateMovements();
    renderMovements();
});

// Initial execution
generateMovements();
renderMovements();