class humano {
  constructor(nombre= "Jimy",edad = 24,localidad="Bariloche"){
     this.nombre = nombre,
     this.localidad = localidad,
     this.edad = edad
  }

  getYearBorn(){
    const dateObje = new Date();
    const year = dateObje.getFullYear();

    return year-this.edad;
 }

 saltar(){
   return `Esta saltando ${this.nombre}`;
 }

}
class alumno extends humano {
  constructor (nombre,edad,localidad,carrera){
     super(nombre,edad,localidad),
     this.carrera = carrera
  }
   
  getCarrera(){
    return `La carrera del alumno es ${this.carrera}`;
  }
  
  
}
const student = new alumno("Isaias",24,"bariloche","Desarrollo de Software");
const year = student.getYearBorn();
console.log(year);

const humanR = new humano();
console.log(humanR.saltar());
console.log(student.saltar());
console.log(humanR.getCarrera());

