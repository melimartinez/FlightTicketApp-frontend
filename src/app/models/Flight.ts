export class Flight {
    id: number;
    departureDateTime: number;
    arrivalDateTime: number;
    pricePerTicket: number;
    vendorCost: number;
    ticketsAvailable: number;
    departureSpaceportId: number;// number for now but might need to change to type'Spaceport' if possible
    arrivalSpaceportId: number;
    vendorId: number;
    spaceshipId: number;

    constructor(id: number, departureDateTime: number, arrivalDateTime: number, pricePerTicket: number, vendorCost: number, ticketsAvailable: number, departureSpaceportId: number, arrivalSpaceportId: number, vendorId: number, spaceshipId: number) {
        this.id = id;
        this.departureDateTime = departureDateTime;
        this.arrivalDateTime = arrivalDateTime;
        this.pricePerTicket = pricePerTicket;
        this.vendorCost = vendorCost;
        this.ticketsAvailable = ticketsAvailable;
        this.departureSpaceportId = departureSpaceportId;
        this.arrivalSpaceportId = arrivalSpaceportId;
        this.vendorId = vendorId;
        this.spaceshipId = spaceshipId;        
    }
}