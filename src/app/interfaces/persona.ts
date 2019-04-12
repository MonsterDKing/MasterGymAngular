export interface Persona {
    nombreCompleto: string;
    fechaIngreso: string;
    randomAccess: string;
    foto: any;
    id: number;
};

export interface PersonasResponse {
    persona: Persona[];
    error: boolean;
}

export interface PersonaResponse {
    persona: Persona;
    error: boolean;
};