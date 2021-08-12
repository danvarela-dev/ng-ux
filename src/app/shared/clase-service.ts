import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { clase } from '../models/clase.model';

@Injectable()
export class ClaseService {
  constructor() {}

  getAllClasses():clase[] {
    return clasesList;
  }
  getClasses():Observable<clase[]> {

    let pipeline = new Subject<clase[]>();

    setTimeout(()=>{
        pipeline.next(clasesList)
        pipeline.complete();
    },2000);

    return pipeline;
}
}

const clasesList: clase[] = [
  {
    id: 1,
    nombre: 'Experiencia de Usuario',
    horario: '8:00 PM',
    seccion: 1254,
    ubicacion: {
      campus: 'SPS',
      aula: '396',
    },
  },
  {
    id: 2,
    nombre: 'Experiencia de Usuario II',
    horario: '4:00 PM',
    seccion: 420,
    ubicacion: {
      campus: 'SPS',
      aula: '302',
    },
  },
];
