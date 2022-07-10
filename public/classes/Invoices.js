var Invoices = /** @class */ (function () {
    function Invoices(account, amountValue) {
        this.account = account;
        this.amountValue = amountValue;
        var date = new Date();
        var d, m, y;
        d = date.getDay();
        m = date.getMonth();
        y = date.getFullYear();
        this.date = "0".concat(d, "/0").concat(m, "/").concat(y);
    }
    //method to return format
    Invoices.prototype.outPut = function () {
        return "Recebeste ".concat(this.amountValue, " no dia ").concat(this.date, " pelo ").concat(this.account);
    };
    return Invoices;
}());
export { Invoices };
