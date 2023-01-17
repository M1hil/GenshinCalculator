function checkAddress()
{
    var dailys1             = document.getElementById('mydailySlider').value;
    var codes1              = document.getElementById('codes');
    var compensations1      = document.getElementById('compensations');
    var events1             = document.getElementById('events');
    var trials1             = document.getElementById('trials');
    var abyssfloor9x1       = document.getElementById('myabyssfloor9Slider').value;
    var abyssfloor10x1      = document.getElementById('myabyssfloor10Slider').value;
    var abyssfloor11x1      = document.getElementById('myabyssfloor11Slider').value;
    var abyssfloor12x1      = document.getElementById('myabyssfloor12Slider').value;
    var shopreset1          = document.getElementById('shopreset');
    var battlepassfree1     = document.getElementById('battlepassfree');
    var battlepasspaied1    = document.getElementById('battlepasspaied');
    var welkin1             = document.getElementById('mywelkinSlider').value;
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
        //..
    }
    if (compensations1.checked)
    {
        var threeweeks = clcupdate()
        primos += 300 * threeweeks;
    }
    if (events1.checked)
    {
        //..
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
        //..
    }
    if (battlepasspaied1.checked)
    {
        //..
    }
    if (welkin1 != 0)
    {
        primos += 90 * welkin1;
    }
    Fates = Math.floor(primos / 160);
    document.getElementById("primogems").innerHTML = primos;
    document.getElementById("intertwinedFates").innerHTML = purpleFates;
    document.getElementById("acquaintFates").innerHTML = blueFates;
    document.getElementById("umgewandelteFates").innerHTML = Fates;
}