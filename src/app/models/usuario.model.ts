export interface Usuario {   
    id: Number;
    name: String;
    email: String;
    password: String;
    direccionSede: String;
    conductor: boolean;
    licenciaConductor: String;
    patenteVehiculo: String;
    admin?: boolean;
}