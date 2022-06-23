import { Distrito } from "./distrito.model";

export class UserFetch {
    id?: number;
    username?: string;
    password?: string;
    nombres?: string;
    apellidos?: string;
    email?: string;
    nacimiento?: Date;
    telefono?: string;
    distrito?: Distrito[];
    dni?: string;
    genero?: string;
    rol?: string;
    descripcion?: string;
    foto_perfil_url?: string;
}