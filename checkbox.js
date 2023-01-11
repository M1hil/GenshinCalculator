function checkAddress()
{
    var dailys1 = document.getElementById('dailys');
    var codes1 = document.getElementById('codes');
    var compensations1 = document.getElementById('compensations');
    var events1 = document.getElementById('events');
    var trials1 = document.getElementById('trials');
    var abyss1 = document.getElementById('abyss');
    var shopreset1 = document.getElementById('shopreset');
    var battlepassfree1 = document.getElementById('battlepassfree');
    var battlepasspaied1 = document.getElementById('battlepasspaied');
    var welkin1 = document.getElementById('welkin');
    let primos = 0;
    if (dailys1.checked)
    {
        primos+=60 * diffDays;

        console.log("ja");
    }
    if (codes1.checked)
    {
        //..
    }
    if (compensations1.checked)
    {
        //..
    }
    if (events1.checked)
    {
        //..
    }
    if (trials1.checked)
    {
        //..
    }
    if (abyss1.checked)
    {
        //..
    }
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
    if (welkin1.checked)
    {
        //..
    }
    document.getElementById("primogems").innerHTML = primos;
}