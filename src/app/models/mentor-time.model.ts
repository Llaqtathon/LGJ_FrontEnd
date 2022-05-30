export class MentorAvailab {
  id: number = 0;
  responsible: string = ""; // nombres?: string; // apellidos?: string;
  areas?: string[];
  status?: string;
  time: {inicio:Date, fin:Date} = {inicio: new Date(), fin: new Date()};
  type: string = 'MENTOR';
}