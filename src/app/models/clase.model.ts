
export class clase{
    
    id: number | undefined;
    nombre: string | undefined;
    horario: string| undefined;
    seccion?: number| undefined;
    ubicacion: IUbicacion| undefined;

}

export interface IUbicacion {
    aula:string;
    campus:string;
}