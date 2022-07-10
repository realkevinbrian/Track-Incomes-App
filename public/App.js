var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Invoices } from "./classes/Invoices.js";
import { RenderHTML } from "./classes/RenderHTML.js";
//get all inputs
var Account = document.querySelector("input#account");
var AmountValue = document.querySelector("input#amountValue");
var form = document.querySelector("form");
var ul = document.querySelector("ul#outPutLogs");
//get invoice class
var newInvoice = new Invoices("34534343", 300);
//Declare handleSubmit function
// const handleSubmit () : void;
var handleSubmit = function (event) {
    event.preventDefault();
    var values;
    values = [Account.value, parseInt(AmountValue.value)];
    var doc;
    doc = new (Invoices.bind.apply(Invoices, __spreadArray([void 0], values, false)))();
    var render = new RenderHTML(ul);
    render.outPut(doc);
    Account.value = "";
    AmountValue.value = "";
};
//add event listener to the form
form.addEventListener('submit', handleSubmit);
