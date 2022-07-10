import { hasOutput } from "../interfaces/hasOutput.js";

export class RenderHTML{

    constructor(private container : HTMLUListElement){}

    // outPut!: () => any;
    outPut(item : hasOutput){

        //create li,p,strong,span
        let li = document.createElement("li");
        let p1  = document.createElement("p");
        let p2 = document.createElement("p");
        let str = document.createElement("strong");
        let span = document.createElement("span");

        //create tree
        p1.appendChild(str);
        p1.appendChild(span)
        li.appendChild(p1);
        li.appendChild(p2);

        //add data
        str.innerHTML = "Account Number";
        span.innerHTML = item.account;
        p2.innerHTML = item.outPut();
        this.container.prepend(li)

        
    }

}