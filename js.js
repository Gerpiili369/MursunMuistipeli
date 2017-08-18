var first="";
var second="";
var firstCell="";
var ready=1;

window.setInterval(function () {
    console.log("first: "+first+", second: "+second+", firstCell: "+firstCell+", ready: "+ready);
}, 20)

function ChangeColor(cellid) {
    if (ready===1 && firstCell!==cellid && document.getElementById(cellid).getAttribute("bgcolor")!=="green") {

        ready=0

        if (first==="") {
            first=document.getElementById(cellid).innerHTML;
            document.getElementById(cellid).setAttribute("bgcolor","red");
            firstCell=cellid;
            ready=1;
            return;

        } else {
            second=document.getElementById(cellid).innerHTML;
            document.getElementById(cellid).setAttribute("bgcolor","red");

            if(first===second) {
                document.getElementById(cellid).setAttribute("bgcolor","green");
                document.getElementById(firstCell).setAttribute("bgcolor","green");
                retry();
                return;                      
            } else {
                window.setTimeout(function () {
                    document.getElementById(cellid).setAttribute("bgcolor","black");
                    document.getElementById(firstCell).setAttribute("bgcolor","black");
                    retry();
                    return;
                }, 800);
            }
        }
    } else {
        return
    } 
}

function retry() {
    first="";
    second="";
    firstCell=""
    ready=1;

}