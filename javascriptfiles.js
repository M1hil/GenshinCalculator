const datezero = new Date(2022, 11, 7); // 7.11.2022 ist Tag 0
    document.getElementById("hal1").innerHTML = datezero;
let milzero = datezero.getTime();
let dayszero = Math.ceil(milzero / (1000 * 60 * 60 * 24));  // Tag 0 in Tagen von Anfang
    document.getElementById("hal2").innerHTML = dayszero;
const datetoday = new Date();   // aktueller Tag
    document.getElementById("hal3").innerHTML = datetoday;
let miltoday = datetoday.getTime();
let daystoday = Math.floor(miltoday / (1000 * 60 * 60 * 24));   // aktueller Tag in Tagen von ANfang
    document.getElementById("hal4").innerHTML = daystoday;

function clcupdate() {
    let dateDiff = daystoday - dayszero;    // Tage von Tag 0 bis heute
        document.getElementById("hal5").innerHTML = dateDiff;
    var daysDiff = clcdate()
    daysleft = dateDiff % 21;   // Tage seit 3 Wochen Update
        document.getElementById("hal6").innerHTML = daysleft;
    if (daysDiff <=21){
        if (daysleft + daysDiff >= 21){
            let threeweeks = 1;
            return threeweeks;
        }
        else{
            let threeweeks = 0;
            return threeweeks;
        }
    }
    else {
        timesover21days = Math.floor(daysDiff / 21);
        restover21days =  daysDiff % 21;
        if (daysleft + restover21days >= 21){
            let threeweeks = 1 + timesover21days;
            return threeweeks;
        }
        else{
            let threeweeks = 0 + timesover21days;
            return threeweeks;
        }
    }
}