import { User } from './user.model';
export class MicroEvento {  
  static today = new Date();
  tipo          : 'CHARLA'|'TALLER'   = 'CHARLA';
  inicio        : Date     = MicroEvento.today;
  fin           : Date     = MicroEvento.today;
  name          : string   = '';
  nombrePonente : string   = '';
  description   : string   = '';
  enlaces       : string[] = [];
  cantInscritos : number   = 0;
  imInscripted  : Boolean  = false; //tb en part
  
  id?         : number;
  status?     : string  = 'PENDIENTE';
  asignados?  : User[];
}