import { Guid } from "guid-typescript";

export class AppUser {
    constructor(firstName?: string, lastName?: string, phoneNumber?: string, city?: string, userName?:any, token?:any ,groups?:any  ) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.phoneNumber = phoneNumber || '';
        this.city = city || '';

       this.userName=this.userName || '';
        this.token=this.token || '';
        this.groups=this.groups || '';

        

    }
    
    private _userName! : string ;
    public get userName() : string {
        return this._userName;
    }
    public set userName(v : string) {
        this._userName = v;
    }
     
    
    private _id! : Guid;
    public get id() : Guid {
        return this._id;
    }
    public set id(v : Guid) {
        this._id = v;
    }

    
    private _token! : string;
    public get token() : string {
        return this._token;
    }
    public set token(v : string) {
        this._token = v;
    }
    
    
    private _groups! : string;
    public get groups() : string {
        return this._groups;
    }
    public set groups(v : string) {
        this._groups = v;
    }
    
    

    

    

    //#region firstName
    private _firstName!: string;
    public get firstName() {
        return this._firstName
    }
    public set firstName(v: string) {
        this._firstName = v;
    }
    //#endregion

    //#region lastName
    private _lastName!: string;
    public get lastName() {
        return this._lastName
    }
    public set lastName(v: string) {
        this._lastName = v;
    }
    //#endregion

    //#region phoneNumber
    private _phoneNumber!: string;
    public get phoneNumber() {
        return this._phoneNumber
    }
    public set phoneNumber(v: string) {
        this._phoneNumber = v;
    }
    //#endregion

    //#region city
    private _city!: string;
    public get city() {
        return this._city
    }
    public set city(v: string) {
        this._city = v;
    }
    //#endregion  

  
}