
export class Spaceport {

    sp_id: number;
    spName: string;
    planet: string;

    constructor(sp_id:number, spName:string = "", planet:string = "") {

        this.sp_id = sp_id;
        this.spName = spName;
        this.planet = planet;

    }

}