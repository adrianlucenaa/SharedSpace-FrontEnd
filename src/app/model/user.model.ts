import { Apartment } from "./apartment.model";

export class User {

    id?: number;
    name?: string;
    surname?: string;
    email?: string;
    dni?: string;
    password?: string;
    apartment?: Apartment;   
    
}