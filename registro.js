const vehiculo = {
  matricula: "ABC123",
  marca: "Toyota",
  modelo: "Corolla",
  tipo: "auto",
  horaEntrada: new Date(),
  horaSalida: null
};

const cliente = {
  nombre: "Juan Pérez",
  vehiculos: ["ABC123", "XYZ987"]
};


function registrarEntrada(vehiculo) {
    console.log(`Vehículo con matrícula ${vehiculo.matricula} ha entrado a las ${vehiculo.horaEntrada}`);
    console.log(`Vehículo con matrícula ${vehiculo.matricula} ha salido a las ${vehiculo.horaSalida}`)

}
registrarEntrada(vehiculo); 
