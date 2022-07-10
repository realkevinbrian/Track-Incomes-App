var RenderHTML = /** @class */ (function () {
    function RenderHTML(container) {
        this.container = container;
    }
    // outPut!: () => any;
    RenderHTML.prototype.outPut = function (item) {
        //create li,p,strong,span
        var li = document.createElement("li");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var str = document.createElement("strong");
        var span = document.createElement("span");
        //create tree
        p1.appendChild(str);
        p1.appendChild(span);
        li.appendChild(p1);
        li.appendChild(p2);
        //add data
        str.innerHTML = "Account Number";
        span.innerHTML = item.account;
        p2.innerHTML = item.outPut();
        this.container.prepend(li);
    };
    return RenderHTML;
}());
export { RenderHTML };
