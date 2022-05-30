import { Group } from "./group.model";
import { Game } from "./game.model";
export class Proyecto{
    id?: number;
    name?: string;
    url?: string;
    game?: Game;
    foto?: string;
    grupo?: Group;
    description?: string;
}