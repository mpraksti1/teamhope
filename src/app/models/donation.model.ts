export class Donation {
  constructor(
    public userId: string,
    public orgId: string,
    public initiativeId: string,
    public amount: number,
    public dateLogged?: any ) {}
}
