import { User } from './user.model';
import { Game } from './game.model';

export class Group {
    id?: number;
    name?: string;
    photoUrl?: string;
    editionId?: number;
    game?: Game;
    users?: User[];
}