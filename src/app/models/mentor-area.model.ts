export class MentorArea {
  areaId?: number;
  mentorId?: number;
  areaName?: string;
  yearsOfExperience?: number;
  priority: string = 'TOP';

  constructor(areaId?: number, mentorId?: number, areaName?: string, yearsOfExperience?: number, priority?: string) {}
}