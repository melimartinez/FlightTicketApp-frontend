import { Vendor } from "./Vendor";

export class Flight {
    id: number;
    departureDateTime: number;
    arrivalDateTime: number;
    pricePerTicket: number;
    vendorCost: number;
    ticketsAvailable: number;
    status: String;
    departureSpaceport: Object;// number for now but might need to change to type'Spaceport' if possible
    arrivalSpaceport: Object;
    vendor: Vendor;
    spaceship: Object;

    constructor(id: number, departureDateTime: number, arrivalDateTime: number, pricePerTicket: number, vendorCost: number, ticketsAvailable: number, status: String, departureSpaceport: Object, arrivalSpaceport: Object, vendor: Vendor, spaceship: Object) {
        this.id = id;
        this.departureDateTime = departureDateTime;
        this.arrivalDateTime = arrivalDateTime;
        this.pricePerTicket = pricePerTicket;
        this.vendorCost = vendorCost;
        this.ticketsAvailable = ticketsAvailable;
        this.status = status;
        this.departureSpaceport = departureSpaceport;
        this.arrivalSpaceport = arrivalSpaceport;
        this.vendor = vendor;
        this.spaceship = spaceship;        
    }
}
