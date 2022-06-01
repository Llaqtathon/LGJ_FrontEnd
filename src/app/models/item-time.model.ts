// import { Time } from './../common/time';
// import { MicroEvento } from './microevento.model';
import { MentorArea } from './mentor-area.model';
// import { MentorTime } from './mentor-edition.model';
let today = new Date();
let later = new Date(today.setHours(today.getHours() + 2));

export interface ItemTime {
  id?: number;
  status?: string; //statusclass?
  time: {inicio:Date, fin:Date};// = {inicio: today, fin: later};
  type: string;// = 'MENTOR';
  social?: string[];
  ninscip?: number;
  title?: string;
  areas?: MentorArea[];
  responsible?: string;
  assigned?: string[];
  pos?:{x:number, y:number};// = {x:0, y:0};
  size?:{w:number, h:number};// = {w:2, h:2};
  description?: string;
  iminsc?: Boolean;// = false;

  // FROM MENTOR
  // constructor(obj: MentorTime|MicroEvento, dateStart?:Date) { //, dateEnd?:Date
  //   // let range = Time.getDateDiff(dateStart, dateEnd);
  //   this.pos = {x : 0, y : 0};
  //   this.size = {w : 100, h : 1};
  //   dateStart = dateStart || today;

  //   if (obj instanceof MentorTime) {
  //     this.id = obj.t.id;
  //     this.responsible = obj.m.nombres + ' ' + obj.m.apellidos;
  //     this.areas = obj.m.areas;
  //     this.status = obj.m.status ?? 'NULO';
  //     this.time = {inicio:obj.t.dateStart??today, fin:obj.t.dateEnd??later};
  //     this.type = 'MENTOR';
  //     this.pos.x = Time.getDateDiff(dateStart, obj.t.dateStart??today);
  //     this.pos.y = Time.getHHMM(obj.t.dateStart??today);
  //     this.size.h = (Time.getHHMM(obj.t.dateEnd??later) - Time.getHHMM(obj.t.dateStart??today));
  //   }
  //   else if (obj instanceof MicroEvento) {
  //     this.type = obj.tipo ;
  //     this.time = {inicio: obj.inicio, fin: obj.fin};
  //     this.title = obj.name ;
  //     this.responsible = obj.nombrePonente ;
  //     this.description = obj.description ;
  //     this.social = obj.enlaces ;
  //     this.ninscip = obj.cantInscritos ;
  //     this.iminsc = obj.imInscripted ;
  //     this.id = obj.id ?? 0;
  //     this.status = obj.status ?? 'NULO';
  //     this.assigned = obj.asignados?.map(u => u.nombres + ' ' + u.apellido);
  //     this.pos.x = Time.getDateDiff(dateStart, obj.inicio);
  //     this.pos.y = Time.getHHMM(obj.inicio);
  //     this.size.h = (Time.getHHMM(obj.inicio??later) - Time.getHHMM(obj.fin??today));
  //   }

  // }

// public static toItemTime(obj: MentorTime|MicroEvento, dateStart?:Date) { //, dateEnd?:Date
//   // let range = Time.getDateDiff(dateStart, dateEnd);
//   let i = new ItemTime();
//   i.pos = {x : 0, y : 0};
//   i.size = {w : 100, h : 1};
//   dateStart = dateStart || today;

//   if (obj instanceof MentorTime) {
//     i.id = obj.t.id;
//     i.responsible = obj.m.nombres + ' ' + obj.m.apellidos;
//     i.areas = obj.m.areas;
//     i.status = obj.m.status ?? 'NULO';
//     i.time = {inicio:obj.t.dateStart??today, fin:obj.t.dateEnd??later};
//     i.type = 'MENTOR';
//     i.pos.x = Time.getDateDiff(dateStart, obj.t.dateStart??today);
//     i.pos.y = Time.getHHMM(obj.t.dateStart??today);
//     i.size.h = (Time.getHHMM(obj.t.dateEnd??later) - Time.getHHMM(obj.t.dateStart??today));
//   }
//   else if (obj instanceof MicroEvento) {
//     i.type = obj.tipo ;
//     i.time = {inicio: obj.inicio, fin: obj.fin};
//     i.title = obj.name ;
//     i.responsible = obj.nombrePonente ;
//     i.description = obj.description ;
//     i.social = obj.enlaces ;
//     i.ninscip = obj.cantInscritos ;
//     i.iminsc = obj.imInscripted ;
//     i.id = obj.id ?? 0;
//     i.status = obj.status ?? 'NULO';
//     i.assigned = obj.asignados?.map(u => u.nombres + ' ' + u.apellido);
//     i.pos.x = Time.getDateDiff(dateStart, obj.inicio);
//     i.pos.y = Time.getHHMM(obj.inicio);
//     i.size.h = (Time.getHHMM(obj.inicio??later) - Time.getHHMM(obj.fin??today));
//   }
//   return i;
// //       item.pos = {
// //         x: dateDiff(this.drange.start, item.time.inicio) * w,
// //         y: hhmm(item.time.inicio) * 4
// //       };
// //       this.daysTime[pos].push(item);
// //       this.itemsOrd.push(item);
// //       // console.log(this.dateStart, item.time.inicio);
// //       console.log('TL ss', this.itemsOrd, dateDiff(this.drange.start,item.time.inicio), w);
// // this.pos?:{x:number, y:number} = {x:0, y:0};
//   }
}