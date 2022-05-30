export class Areas {
  public static areaIcons:any = {
    'GAME DESIGN'  : 'extension',
    'PROGRAMACION' : 'code',
    'ARTE'         : 'color_lens',
    'MUSICA'       : 'music_note',
    'PRODUCCION'   : 'trending_up',
    'NARRATIVA'    : 'edit_note',
    'OTROS'        : 'alt_route',
  }
  public static getAreaIcon(area:string):string {
    return this.areaIcons[area];
  }
}