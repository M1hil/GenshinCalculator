function checkAddress()
{
    var dailys1                     = document.getElementById('mydailySlider').value;
    var codes1                      = document.getElementById('codes');
    var compensations1              = document.getElementById('compensations');
    var events1                     = document.getElementById('events');
    var trials1                     = document.getElementById('trials');
    var abyssfloor9x1               = document.getElementById('myabyssfloor9Slider').value;
    var abyssfloor10x1              = document.getElementById('myabyssfloor10Slider').value;
    var abyssfloor11x1              = document.getElementById('myabyssfloor11Slider').value;
    var abyssfloor12x1              = document.getElementById('myabyssfloor12Slider').value;
    var shopreset1                  = document.getElementById('shopreset');
    var battlepassfree1             = document.getElementById('battlepassfree');
    var battlepasspaied1            = document.getElementById('battlepasspaied');
    var battlepassbluefates1        = document.getElementById('battlepassbluefates').value;
    var battlepasspurplefates1      = document.getElementById('battlepasspurplefates').value;
    var welkin1                     = document.getElementById('mywelkinSlider').value;
    var addprimos1                  = document.getElementById('addprimos').value;
    var addpurplefates1             = document.getElementById('addpurplefates').value;
    var addbluefates1               = document.getElementById('addbluefates').value;
    var primos = 0;
    var purpleFates = 0;
    var blueFates = 0;
    var Fates = 0;
    if (dailys1 != 0)
    {    
        primos += 60 * dailys1;
    }
    if (codes1.checked)
    {
        var livestreams = clclivestreamcodes()
        primos += 300 * livestreams;
    }
    if (compensations1.checked)
    {
        var threeweeks = clcupdate()
        primos += 300 * threeweeks;
    }
    if (events1.checked)
    {
        daysDiff = clcdate();
        primos += 30 * daysDiff;
    }
    if (trials1.checked)
    {
        var threeweeks = clcupdate()
        primos += 40 * threeweeks;
    }
    if (abyssfloor9x1 != 0 || abyssfloor10x1 != 0 || abyssfloor11x1 != 0 || abyssfloor12x1 != 0)
    {
        var threestarsfloor9x1  = Math.floor(abyssfloor9x1 / 3);
        var threestarsfloor10x1 = Math.floor(abyssfloor10x1 / 3);
        var threestarsfloor11x1 = Math.floor(abyssfloor11x1 / 3);
        var threestarsfloor12x1 = Math.floor(abyssfloor12x1 / 3);
        var abyssresets = clcabyssreset();
        primos += 50 * threestarsfloor9x1  * abyssresets;
        primos += 50 * threestarsfloor10x1 * abyssresets;
        primos += 50 * threestarsfloor11x1 * abyssresets;
        primos += 50 * threestarsfloor12x1 * abyssresets;
    }
    if (shopreset1.checked)
    {
        var onemonth = clcshopreset()
        purpleFates += 5 * onemonth;
        blueFates += 5 * onemonth;
    }
    if (battlepassfree1.checked)
    {
        var versionupdate = clcversionupdate();
        blueFates += 1 * battlepassbluefates1 * versionupdate;
        console.log(battlepassbluefates1);
        console.log();
    }
    if (battlepasspaied1.checked)
    {
        var versionupdate = clcversionupdate();
        if (battlepasspurplefates1 == 5){
            purpleFates += 1 * (battlepasspurplefates1 - 1) * versionupdate;
            primos += 680;
        }
        else{
        purpleFates += 1 * battlepasspurplefates1 * versionupdate;
        }
    }
    if (welkin1 != 0)
    {
        primos += 90 * welkin1;
    }
    if (addprimos1 != 0)
    {
        primos += 1 * addprimos1;
    }
    if (addpurplefates != 0)
    {
        purpleFates += 1 * addpurplefates1;
    }
    if (addbluefates1 != 0)
    {
        blueFates += 1 * addbluefates1;
    }
    Fates = Math.floor(primos / 160);
    document.getElementById("primogems").innerHTML = primos;
    document.getElementById("intertwinedFates").innerHTML = purpleFates;
    document.getElementById("acquaintFates").innerHTML = blueFates;
    document.getElementById("umgewandelteFates").innerHTML = Fates;
}