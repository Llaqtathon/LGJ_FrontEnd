import { MentorArea } from './../models/mentor-area.model';
export class AreaUtils {
  public static areaIcons:any = {
    'GAME DESIGN'  : 'extension',
    'PROGRAMMING' : 'code',
    'ART'         : 'color_lens',
    'MUSIC'       : 'music_note',
    'PRODUCTION'   : 'trending_up',
    'NARRATIVE'    : 'edit_note',
    'OTROS'        : 'alt_route',
  }
  public static getAreaIcon(area:string):string {
    return this.areaIcons[area];
  }
  
  public static aPriority:any = {
    'NONE'      : 0 ,
    'TOP'       : 1 ,
    'SECONDARY' : 2 ,
    'TERTIARY'  : 3 ,
  }
  public static getAreaIcons(ma?: MentorArea[]) {
    if (ma == undefined) return [];
    
    let areaIcons:string[] = [];
    ma.sort(((a:MentorArea, b:MentorArea) =>
      this.aPriority[a.priority] - this.aPriority[b.priority]
    ));
    ma.forEach(_ma => {
      areaIcons.push(AreaUtils.areaIcons[_ma.areaName ? _ma.areaName : ""]);
    });
    return areaIcons;
  }
}