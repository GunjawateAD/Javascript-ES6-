function calculate(choice){
    var n1 = document.getElementById("f_value").value * 1;
    var n2 = document.getElementById("s_value").value * 1;
    var fresult;
    switch(choice){
        case 1:
            fresult=n1+n2;
            break;
        case 2:
            fresult=n1-n2;
            break;
        case 3:
            fresult=n1*n2;
            break;
        case 4:
            fresult=n1/n2;
            break;
    }
    document.getElementById("Result").value =fresult;
}