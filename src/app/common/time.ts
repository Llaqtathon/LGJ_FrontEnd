export class Time {
  // Dias
  public static dias:string[] = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ]
  public static diasAbr:string[] = [
    'DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB',
  ]
  public static getNomDia(dia:Date):string {
    return this.dias[dia.getDay()];
  }

  public static getDiasOrd ( dIni:Date, dFin:Date,
    abr:Boolean = true, withDate:Boolean = true
    ) : string[] {
    console.log('getDiasOrd', dIni, dFin);

    let posIni = new Date(dIni).getDay();
    let posFin = new Date(dFin).getDay();
    let dias:string[] = [];
    let cday = new Date(dIni);
    
    let push = (d:number) => { //dia: 25 | pini: 5 | d: 0
      if (withDate) {
        let dateNum = cday.getDate();
        abr? dias.push(this.diasAbr[d] + " " + dateNum) :
              dias.push(this.dias[d]+ " " + dateNum);
        cday.setDate(cday.getDate() + 1);
      }
      else {
        abr? dias.push(this.diasAbr[d]) :
              dias.push(this.dias[d]);
      }
    }

    if (posFin < posIni) {
      for (let i = posIni; i < 7; i++) push(i) ;
      for (let i = 0; i <= posFin; i++) push(i) ;
    }
    else {
      for (let i = posIni; i <= posFin; i++) push(i) ;
    }
    return dias;
  }

  //SEMANA
  public static getSemana(dia?:Date) {
    let today     = dia? dia : new Date();
    let weekStart = today.getDate() - today.getDay() + 1; //+1 to make Monday the first day of the week
    let weekEnd   = weekStart + 6;
    return { start: new Date(today.setDate(weekStart)),
              end : new Date(today.setDate(weekEnd))};
  }
}