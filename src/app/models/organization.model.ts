export class User {
  constructor(
    public name: string,
    public description: string,
    public initiatives: number[],
    public orgPhoto?: string,
    public dateLogged?: any ) {}
}
