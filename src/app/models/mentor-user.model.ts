import { MentorArea } from './mentor-area.model';
export class MentorUser {
  mentorId? : string;
  names? : string;
  lastNames? : string;
  photoUrl? : string;
  phone? : string;
  email? : string;
  birthDate? : Date;
  areas? : MentorArea[];
}