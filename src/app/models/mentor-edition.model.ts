// import { MentorAvailab } from './mentor-availab.model';
import { MentorArea } from "./mentor-area.model";

export class MentorEd {
  // id?: number;
  // areas?: string[];
  // tiempos?: {inicio:Date, fin:Date}[]; //2020-03-09 23:37:22
  // tiempoini?: string;
  // tiempofin?: string;
  mentorId?:number;
  editionId?:number;                //NoEnSimple
  nombres?:string;
  apellidos?:string;
  urlPhoto?:string;
  status?:string;                   //NoEnSimple
  areas?:MentorArea[];
  availabilities?:MentorAvailab[];  //NoEnSimple
}

export class MentorAvailab {
  id?:number;
  dateStart?:Date;
  dateEnd?:Date;
}

export class MentorTime {
  m?: MentorEd; //= new MentorEd();
  t?: MentorAvailab; //= new MentorAvailab();
}