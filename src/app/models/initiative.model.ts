export class Initiative {
  constructor(
    public name: string,
    public value: number,
    public selected: string,
    public title: string,
    public description: string,
    public image: string,
    public orgId: string,
    public _id?: string,
    public dateLogged?: any ) {}
}
