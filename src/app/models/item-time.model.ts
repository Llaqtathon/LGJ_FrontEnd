let today = new Date();
let later = new Date(today.setHours(today.getHours() + 2));
export class ItemTime {
  status?: string; //statusclass?
  time: {inicio:Date, fin:Date} = {inicio: today, fin: later};
  type: string = 'MENTOR';
  social?: string[];
  ninscip?: number;
  title?: string;
  areas?: string[];
  responsible?: string;
  assigned?: string[];
  pos?:{x:number, y:number} = {x:0, y:0};
  size?:{w:number, h:number} = {w:1, h:1};
}