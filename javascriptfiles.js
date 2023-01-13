function clcdate(){
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var date1 = new Date(from);
    var date2 = new Date(to);
    var timeDiff = date2.getTime() - date1.getTime();
    var daysDiff = timeDiff / (1000 * 60 * 60 *24)
    if(daysDiff < 0){
        return null;
    } 
    else {
        return daysDiff;
    }
}