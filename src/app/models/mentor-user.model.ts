import { MentorArea } from './mentor-area.model';
export class MentorUser {
  mentorId? : string;
  names? : string;
  lastNames? : string;
  photoUrl : string = 'https://pbs.twimg.com/media/FEwlAJxX0A4KrQa?format=png&name=small';
  phone : string = '';
  email? : string;
  birthDate? : Date;
  areas? : MentorArea[];
}

export class Mentor {
  mentorId? : string;
  nombres? : string;
  apellidos? : string;
  urlPhoto : string = 'https://pbs.twimg.com/media/FEwlAJxX0A4KrQa?format=png&name=small';
  telefono : string = '';
  email? : string;
  nacimiento? : Date;
}