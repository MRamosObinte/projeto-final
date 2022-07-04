export class Usuario {

  clave: string = "";
  email: string = "";
  nombre: string = "";

  constructor(data?: any) {
    data ? this.hydrate(data) : null;
  }

  hydrate(data: any) {
    this.clave = data.clave ? data.clave : this.clave;
    this.email = data.email ? data.email : this.email;
    this.nombre = data.nombre ? data.nombre : this.nombre;
  }


}