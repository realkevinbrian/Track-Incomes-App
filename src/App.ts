import { Invoices } from "./classes/Invoices.js";
import { RenderHTML } from "./classes/RenderHTML.js";
import { hasOutput } from "./interfaces/hasOutput.js";

//get all inputs
const Account = document.querySelector("input#account") as HTMLInputElement;
const AmountValue = document.querySelector("input#amountValue") as HTMLInputElement;
const form =document.querySelector("form") as HTMLFormElement;
const ul = document.querySelector("ul#outPutLogs") as HTMLUListElement;
//get invoice class
let newInvoice = new Invoices("34534343", 300);


//Declare handleSubmit function
// const handleSubmit () : void;

const handleSubmit = (event : Event) => {
    event.preventDefault();
    let values : [string,number];
    values = [Account.value, parseInt(AmountValue.value)]

    let doc : hasOutput;
    doc = new Invoices(...values)
    let render = new RenderHTML(ul)
    render.outPut(doc)
    Account.value = "";
    AmountValue.value = ""

}

//add event listener to the form
form.addEventListener('submit',handleSubmit)




