var first="";
var second="";
var firstCell="";
var ready=1;
var player=1;
var p1scr=0;
var p2scr=0;
var cardboard=['nollas','eka','toka'];


window.setInterval(function () {
    console.log("first: "+first+", second: "+second+", firstCell: "+firstCell+", ready: "+ready);
}, 20)

function ChangeColor(cellid) {
    if (ready===1 && firstCell!==cellid && document.getElementById(cellid).getAttribute("bgcolor")!=="green") {

        ready=0

        console.log(cardboard.cells[cellid]);

        if (first==="") {
            first=document.getElementById(cellid).innerHTML;
            document.getElementById(cellid).setAttribute("bgcolor","red");
            firstCell=cellid;
            ready=1;
        } else {
            second=document.getElementById(cellid).innerHTML;
            document.getElementById(cellid).setAttribute("bgcolor","red");

            if(first===second) {
                document.getElementById(cellid).setAttribute("bgcolor","green");
                document.getElementById(firstCell).setAttribute("bgcolor","green");
                
                if (player===1) {
                    ++p1scr
                } else {
                    ++p2scr
                }

            retry();
            } else {
                window.setTimeout(function () {
                    document.getElementById(cellid).setAttribute("bgcolor","black");
                    document.getElementById(firstCell).setAttribute("bgcolor","black");
                    if (player===1) {
                        player=2
                    } else {
                        player=1
                    }
                    retry();
                }, 800);
            }
        }
    }
}

function retry() {
    first="";
    second="";
    firstCell=""
    ready=1;

    document.getElementById("score").innerHTML="p1 score: "+p1scr+", p2 score: "+p2scr;
}