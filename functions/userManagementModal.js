const modal = document.getElementById("userModal");

const openBtn = document.getElementById("openUserModal");

const closeBtn = document.getElementById("closeModal");

const cancelBtn = document.getElementById("cancelModal");

const form = document.getElementById("userForm");

const userType = document.getElementById("userType");

const vehicleSection =
document.getElementById("vehicleSection");

const vehicleFields = [
    document.getElementById("placa"),
    document.getElementById("marca"),
    document.getElementById("modelo"),
    document.getElementById("cor")
];

function openModal() {
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");

    setTimeout(() => {
        form.reset();
        toggleVehicleFields();
    }, 300);
}

openBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

cancelBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        closeModal();
    }

});

function toggleVehicleFields() {

    if(userType.value === "administrador") {

        vehicleSection.classList.add("hidden");

        vehicleFields.forEach(field => {
            field.required = false;
        });

    } else {

        vehicleSection.classList.remove("hidden");

        vehicleFields.forEach(field => {
            field.required = true;
        });

    }

}

userType.addEventListener(
    "change",
    toggleVehicleFields
);

function editUser(id) {

    document.getElementById(
        "modalTitle"
    ).innerText = "Editar Usuário";

    openModal();

    const mockUser = {
        nome: "Lucas Martins",
        matricula: "2023001",
        email: "lucas@ugb.edu.br",
        tipo: "administrador"
    };

    document.getElementById("nome").value =
        mockUser.nome;

    document.getElementById("matricula").value =
        mockUser.matricula;

    document.getElementById("email").value =
        mockUser.email;

    userType.value =
        mockUser.tipo;

    toggleVehicleFields();
}

toggleVehicleFields();