
 export function registrarEntrada(vehiculo) {
    vehiculo.horaEntrada = new Date(); 
    console.log(`Vehículo con matrícula ${vehiculo.matricula} ha entrado a las ${vehiculo.horaEntrada}`);

}
  

export  function registrarSalida(vehiculo) {
    vehiculo.horaSalida = new Date();
    console.log(`Vehículo con matrícula ${vehiculo.matricula} ha salido a las ${vehiculo.horaSalida}`);
}   
