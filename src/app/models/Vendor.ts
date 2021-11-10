export class Vendor {

    id: number;
    companyName: string;
    vendorUsername: string;
    vendorPassword: string;
    vendorPhoneNumber: number;

    constructor(companyName: string = "", vendorUsername: string = "", vendorPassword: string = "", vendorPhoneNumber: number, id?: number) {

        this.id = id;
        this.companyName = companyName;
        this.vendorUsername = vendorUsername;
        this.vendorPassword = vendorPassword;
        this.vendorPhoneNumber = vendorPhoneNumber; 

    }

}