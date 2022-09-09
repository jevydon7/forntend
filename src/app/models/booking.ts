export class booking {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    eventSelected: string;
    
    constructor(_id?: string, firstName?: string, lastName?:string, phoneNumber?: string, email?: string, eventSelected?:string) {
        this._id = _id!;
        this.firstName = firstName!;
        this.lastName = lastName!;
        this.phoneNumber = phoneNumber!;
        this.email = email!;
        this.eventSelected = eventSelected!;
    }
    
    }