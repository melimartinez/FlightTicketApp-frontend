export class Vendor {

    id: number;
    companyName: string;
    vendorUsername: string;
    vendorPassword: string;
    vendorPhoneNumber: number;
    vendorEmail: string;
    vendorSlogan: string;

    constructor(companyName: string = "", vendorUsername: string = "", vendorPassword: string = "", vendorPhoneNumber: number, vendorEmail: string, vendorSlogan: string, id?: number) {

        this.id = id;
        this.companyName = companyName;
        this.vendorUsername = vendorUsername;
        this.vendorPassword = vendorPassword;
        this.vendorPhoneNumber = vendorPhoneNumber;
        this.vendorEmail = vendorEmail;
        this.vendorSlogan = vendorSlogan; 

    }

}