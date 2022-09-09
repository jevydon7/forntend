export class user {
    _id: string;
    password: string;
    
    constructor(_id?: string, password?: string) {
        this._id = _id!;
        this.password = password!;
    }
    
    }