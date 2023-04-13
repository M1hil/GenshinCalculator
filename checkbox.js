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
    var battlepassfree1             = document.getElementById('battlepassfree').value;
    var battlepasspaied1            = document.getElementById('battlepasspaied').value;
    var welkin1                     = document.getElementById('mywelkinSlider').value;
    var addprimos1                  = document.getElementById('addprimos').value;
    var addpurplefates1             = document.getElementById('addpurplefates').value;
    var addbluefates1               = document.getElementById('addbluefates').value;
    var primos = 0;
    var purpleFates = 0;
    var blueFates = 0;
    var Fates = 0;
    var dailys2 = 0;
    var codes2 = 0;
    var compensations2 = 0;
    var events2 = 0;
    var trials2 = 0;
    var abyssfloor2 = 0;
    var shopreset2 = 0;
    var battlepassfree2 = 0;
    var battlepasspaied2 = 0;
    var welkin2 = 0;
    if (dailys1 != 0)
    {    
        primos += 60 * dailys1;
        dailys2 += 60 * dailys1;
    }
    if (codes1.checked)
    {
        var livestreams = clclivestreamcodes()
        primos += 300 * livestreams;
        codes2 += 300 * livestreams;
    }
    if (compensations1.checked)
    {
        var versionupdate = clcversionupdate()
        primos += 600 * versionupdate;
        compensations2 += 600 * versionupdate;
    }
    if (events1.checked)
    {
        daysDiff = clcdate();
        primos += 58 * daysDiff;
        events2 += 58 * daysDiff;
    }
    if (trials1.checked)
    {
        var threeweeks = clcupdate()
        primos += 40 * threeweeks;
        trials2 += 40 * threeweeks;
    }
    if (abyssfloor9x1 != 0 || abyssfloor10x1 != 0 || abyssfloor11x1 != 0 || abyssfloor12x1 != 0)
    {
        var threestarsfloor9x1  = Math.floor(abyssfloor9x1 / 3);
        var threestarsfloor10x1 = Math.floor(abyssfloor10x1 / 3);
        var threestarsfloor11x1 = Math.floor(abyssfloor11x1 / 3);
        var threestarsfloor12x1 = Math.floor(abyssfloor12x1 / 3);
        var abyssresets = clcabyssreset();
        abyssfloor9x12 = 50 * threestarsfloor9x1  * abyssresets;
        abyssfloor10x12 = 50 * threestarsfloor10x1  * abyssresets;
        abyssfloor11x12 = 50 * threestarsfloor11x1  * abyssresets;
        abyssfloor12x12 = 50 * threestarsfloor12x1  * abyssresets;
        primos += abyssfloor9x12 + abyssfloor10x12 + abyssfloor11x12 + abyssfloor12x12;
        abyssfloor2 += abyssfloor9x12 + abyssfloor10x12 + abyssfloor11x12 + abyssfloor12x12;
    }
    if (shopreset1.checked)
    {
        var onemonth = clcshopreset()
        purpleFates += 5 * onemonth;
        blueFates += 5 * onemonth;
        shopreset2 += 5 * onemonth;
    }
    if (battlepassfree1 != 0)
    {
        var versionupdate = clcversionupdate();
        blueFates += 1 * battlepassfree1 * versionupdate;
        battlepassfree2 += 1 * battlepassfree1 * versionupdate;
    }
    if (battlepasspaied1 != 0)
    {
        var versionupdate = clcversionupdate();
        if (battlepassfree1 == 5){
            purpleFates += 1 * (battlepassfree1 - 1) * versionupdate;
            primos += 680;
            battlepasspaied2 += 680;
        }
        else{
        purpleFates += 1 * battlepassfree1 * versionupdate;
        }
    }
    if (welkin1 != 0)
    {
        primos += 90 * welkin1;
        welkin2 += 90 * welkin1;
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
    document.getElementById("dailys3").innerHTML = dailys2;
    document.getElementById("codes3").innerHTML = codes2;
    document.getElementById("compensations3").innerHTML = compensations2;
    document.getElementById("events3").innerHTML = events2;
    document.getElementById("trials3").innerHTML = trials2;
    document.getElementById("abyssfloor3").innerHTML = abyssfloor2;
    document.getElementById("shopreset3").innerHTML = shopreset2;
    document.getElementById("battlepassfree3").innerHTML = battlepassfree2;
    document.getElementById("battlepasspaied3").innerHTML = battlepasspaied2;
    document.getElementById("welkin3").innerHTML = welkin2;

    document.getElementById("primogems").innerHTML = primos;
    document.getElementById("intertwinedFates").innerHTML = purpleFates;
    document.getElementById("acquaintFates").innerHTML = blueFates;
    document.getElementById("umgewandelteFates").innerHTML = Fates;

    document.getElementById("allintertwinedFates").innerHTML = purpleFates + Fates;
}