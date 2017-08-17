function ChangeColor(cellid) {

    if (document.getElementById(cellid).getAttribute("bgcolor")==="green") {
        
        document.getElementById(cellid).setAttribute("bgcolor","red");
    } else {
        document.getElementById(cellid).setAttribute("bgcolor","green");
    };
    return
}