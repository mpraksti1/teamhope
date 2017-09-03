export class User {
  constructor(
    public userId: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public dateLogged?: any ) {}
}
