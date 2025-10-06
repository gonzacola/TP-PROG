import { registrarEntrada, registrarSalida } from './vehiculos.js';

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
registrarEntrada(vehiculo);
registrarSalida(vehiculo); 
