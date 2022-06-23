export class Time {
  // Dias
  public static dias:string[] = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
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

  public static getDatesOrd ( dIni:Date, dFin:Date) : Date[] {
    console.log('getDatesOrd', dIni, dFin);

    let posIni = new Date(dIni).getDay();
    let posFin = new Date(dFin).getDay();
    let dias: Date[] = [];
    let cday = new Date(dIni);
    
    let push = (d:number) => { //dia: 25 | pini: 5 | d: 0
      dias.push(new Date(cday));
      cday.setDate(cday.getDate() + 1);
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
  public static getSemana(dia?:Date):{start:Date, end:Date} {
    let today     = dia? dia : new Date();
    let weekStart = today.getDate() - today.getDay() + 1; //+1 to make Monday the first day of the week
    let weekEnd   = weekStart + 6;
    return { start: new Date(today.setDate(weekStart)),
              end : new Date(today.setDate(weekEnd))};
  }

  public static getHHMM(d:Date) {
    return (d.getHours()*100 + ((d.getMinutes()*10)/6))/100;
  }
  public static toNumHHMM(hh:number, mm:number) {
    return (hh*100 + ((mm*10)/6))/100;
  }
  
  public static getDateDiff(d1:Date, d2:Date, by:string='DAY') {
    switch (by) {
      case 'DAY':
        return Math.floor((d2.getTime() - d1.getTime())/(1000*60*60*24));
      case 'HOUR':
        return Math.floor((d2.getTime() - d1.getTime())/(1000*60*60));
      case 'MIN':
        return Math.floor((d2.getTime() - d1.getTime())/(1000*60));
      case 'SEC':
        return Math.floor((d2.getTime() - d1.getTime())/(1000));
      case 'MONTH':
        return Math.floor((d2.getTime() - d1.getTime())/(1000*60*60*24*30));
      case 'YEAR':
        return Math.floor((d2.getTime() - d1.getTime())/(1000*60*60*24*365));
      default:
        return 0;
    }
  }
}