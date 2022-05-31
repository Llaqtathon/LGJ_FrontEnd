import { MentorArea } from './mentor-area.model';
export class MentorTime {
  id: number = 0;
  responsible: string = ""; // nombres?: string; // apellidos?: string;
  areas?: MentorArea[];
  status?: string;
  time: {inicio:Date, fin:Date} = {inicio: new Date(), fin: new Date()};
  type: string = 'MENTOR';
}