export interface Colegio {
  numero: number;
  id: number;
  nombre: string;
  idMunicipio: number;
  habilitado: number;
  relMunicipio: Municipio;
  dependencia: string
}
export interface Municipio {
  id: number;
  nombre: string;
  idProvincia: number;
  habilitado: number;
  relProvincia: Provincia;
}

export interface Provincia {
  id: number;
  nombre: string;
}
