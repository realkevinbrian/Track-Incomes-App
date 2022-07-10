import { hasOutput } from "../interfaces/hasOutput.js";

export class Invoices implements hasOutput{
    account : string;
    amountValue : number;
    date : string

    constructor(account : string, amountValue : number){
        this.account = account;
        this.amountValue = amountValue;

        let date = new Date();
        let d,m,y;
        d = date.getDay();
        m = date.getMonth();
        y = date.getFullYear();
        this.date = `0${d}/0${m}/${y}`
    }

    //method to return format
    outPut(){
        return `Recebeste ${this.amountValue} no dia ${this.date} pelo ${this.account}`
    }
}
