export class Status {
  public static status:any = {
    'NULO'        : 's-null',
    'PENDIENTE'   : 's-pending',
    'EN_CONSULTA' : 's-consulting',
    'CONFIRMADO'  : 's-confirmed',
    'CUMPLIDO'    : 's-completed',
    'RECHAZADO'   : 's-rejected',
    'CANCELADO'   : 's-canceled',
  }
  public static getStatusClass(status:string):string {
    return this.status[status];
  }
}