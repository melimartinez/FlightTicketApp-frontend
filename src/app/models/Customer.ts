export class Customer {

    id: number;
    firstname: string;
    lastname: string;
    dob: string;
    email: string;
    cPassword: string;
    cUsername: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    zipcode: number;

    constructor(firstname: string = "", lastname: string = "", dob: string = "", email: string = "", usernameRegistration: string = "", passwordRegistration: string = "", address: string = "", address2: string = "", city: string = "", state: string = "", zipcode: number, id?: number) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.email = email;
        this.cUsername = usernameRegistration;
        this.cPassword = passwordRegistration;
        this.address = address;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }
}