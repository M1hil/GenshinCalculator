function checkAddress()
{
    var dailys1             = document.getElementById('mydailySlider').value;
    var codes1              = document.getElementById('codes');
    var compensations1      = document.getElementById('compensations');
    var events1             = document.getElementById('events');
    var trials1             = document.getElementById('trials');
    var abyssfloor9x1       = document.getElementById('myabyssfloor9Slider').value;
    var abyssfloor10x1      = document.getElementById('myabyssfloor9Slider').value;
    var abyssfloor11x1      = document.getElementById('myabyssfloor9Slider').value;
    var abyssfloor12x1      = document.getElementById('myabyssfloor9Slider').value;
    var shopreset1          = document.getElementById('shopreset');
    var battlepassfree1     = document.getElementById('battlepassfree');
    var battlepasspaied1    = document.getElementById('battlepasspaied');
    var welkin1             = document.getElementById('mywelkinSlider').value;
    let primos = 0;
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
    //if (abyss1.checked)
    //{
        //..
    //}
    if (shopreset1.checked)
    {
        //..
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
    document.getElementById("primogems").innerHTML = primos;
}