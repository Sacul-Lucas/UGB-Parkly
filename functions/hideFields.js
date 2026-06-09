const tipoUsuario = document.getElementById('tipoUsuario');
const vehicleSection = document.getElementById('vehicleSection');
const placa = document.getElementById('placa');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const cor = document.getElementById('cor');

tipoUsuario.addEventListener('change', () => {

    if (tipoUsuario.value === 'colaborador') {

        vehicleSection.style.display = 'flex';

        placa.required = true;
        marca.required = true;
        modelo.required = true;
        cor.required = true;

    } else {

        vehicleSection.style.display = 'none';

        placa.required = false;
        marca.required = false;
        modelo.required = false;
        cor.required = false;
    }
});