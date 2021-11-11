export class Vendor {

    vendor_id: number;
    companyName: string;
    vendorUsername: string;
    vendorPassword: string;
    vendorPhoneNumber: number;
    vendorEmail: string;
    vendorSlogan: string;

    constructor(vendor_id: number, companyName: string = "", vendorUsername: string = "", vendorPassword: string = "", vendorPhoneNumber: number, vendorEmail: string, vendorSlogan: string) {

        this.vendor_id = vendor_id;
        this.companyName = companyName;
        this.vendorUsername = vendorUsername;
        this.vendorPassword = vendorPassword;
        this.vendorPhoneNumber = vendorPhoneNumber;
        this.vendorEmail = vendorEmail;
        this.vendorSlogan = vendorSlogan; 

    }

}
