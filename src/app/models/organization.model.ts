export class Organization {
  constructor(
    public name: string,
    public descriptionLong: string,
    public descriptionShort: string,
    public founderName: string,
    public founderShortBio: string,
    public founderHeadShot: string,
    public initiatives: any[],
    public orgPhoto: string,
    public dateLogged?: any ) {}
}
