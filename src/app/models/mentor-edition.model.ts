import { MentorAvailab } from './mentor-availab.model';
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