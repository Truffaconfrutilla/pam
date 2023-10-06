export interface Usuario {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    direccionSede?: string;
    conductor?: boolean;
    licenciaConductor?: string;
    patenteVehiculo?: string;
    admin?: boolean;
}