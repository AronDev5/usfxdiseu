export interface Estudiante {
  numero: number;
  id: number;
  nombre: string;
  paterno: string;
  materno: string;
  rude: number;
  carnet: number;
  fechaNacimiento: Date;
  idColegio: number;

  email: string;
  
  relcolegio:relcolegio;

}
export interface relcolegio {
  id: number;
  nombre: string;
}
