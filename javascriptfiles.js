function clcdate() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var date1 = new Date(from);
  var date2 = new Date(to);
  var timeDiff = date2.getTime() - date1.getTime();
  var daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  if (daysDiff < 0) {
    return null;
  } else {
    return daysDiff;
  }
}

function dateDiff() {
  var daysDiff = clcdate();
  if (daysDiff) {
    document.getElementById(
      "daysdiff"
    ).innerHTML = `Difference in days: ${daysDiff}`;
    document.getElementById("daysdaily").innerHTML = daysDiff;
    document.getElementById("dayswelkin").innerHTML = daysDiff;
  } else {
    document.getElementById("daysdiff").innerHTML = "Please enter valid date";
  }
}

function setMax() {
  const daysDiff = clcdate();
  slider1 = document.getElementById("mydailySlider");
  slider2 = document.getElementById("mywelkinSlider");
  if ("max" in slider1 || "max" in slider2) {
    // Google Chrome, Safari from version 5 and Opera
    slider1.max = daysDiff;
    slider2.max = daysDiff;
  } else {
    // Safari before version 5
    slider1.setAttribute("max", daysDiff);
    slider2.setAttribute("max", daysDiff);
  }
  dateDiff(slider1);
  dateDiff(slider2);
}

function clcupdate() {
  const datezero = new Date(2022, 11, 6); // 7.11.2022 ist Tag 0
  let milzero = datezero.getTime();
  let dayszero = Math.ceil(milzero / (1000 * 60 * 60 * 24)); // Tag 0 in Tagen von Anfang
  var from = document.getElementById("from").value;
  var dateday1 = new Date(from); // 1. Kalender Tag
  let milday1 = dateday1.getTime();
  let daysday1 = Math.floor(milday1 / (1000 * 60 * 60 * 24)); // 1. Kalender Tag in Tagen von Anfang
  let dateDiff = daysday1 - dayszero; // Tage von Tag 0 bis 1. Kalendertag
  var daysDiff = clcdate();
  daysleft = dateDiff % 21; // Tage seit 3 Wochen Update
  if (daysDiff <= 21) {
    if (daysleft + daysDiff >= 21) {
      let threeweeks = 1;
      return threeweeks;
    } else {
      let threeweeks = 0;
      return threeweeks;
    }
  } else {
    timesover21days = Math.floor(daysDiff / 21);
    restover21days = daysDiff % 21;
    if (daysleft + restover21days >= 21) {
      let threeweeks = 1 + timesover21days;
      return threeweeks;
    } else {
      let threeweeks = 0 + timesover21days;
      return threeweeks;
    }
  }
}

function clcversionupdate() {
  const datezero = new Date(2022, 11, 7); // 7.11.2022 ist Tag 0
  let milzero = datezero.getTime();
  let dayszero = Math.ceil(milzero / (1000 * 60 * 60 * 24)); // Tag 0 in Tagen von Anfang
  var from = document.getElementById("from").value;
  var dateday1 = new Date(from); // 1. Kalender Tag
  let milday1 = dateday1.getTime();
  let daysday1 = Math.floor(milday1 / (1000 * 60 * 60 * 24)); // 1. Kalender Tag in Tagen von Anfang
  let dateDiff = daysday1 - dayszero; // Tage von Tag 0 bis 1. Kalendertag
  var daysDiff = clcdate();
  daysleft = dateDiff % 42; // Tage seit 6 Wochen Update
  if (daysDiff <= 42) {
    if (daysleft + daysDiff >= 42) {
      let versionupdate = 1;
      return versionupdate;
    } else {
      let versionupdate = 0;
      return versionupdate;
    }
  } else {
    timesover42days = Math.floor(daysDiff / 42);
    restover42days = daysDiff % 42;
    if (daysleft + restover42days >= 42) {
      let versionupdate = 1 + timesover42days;
      return versionupdate;
    } else {
      let versionupdate = 0 + timesover42days;
      return versionupdate;
    }
  }
}

function clcabyssreset() {
  var from = document.getElementById("from").value;
  var date1 = new Date(from);
  var mil1 = date1.getTime();
  var days1 = mil1 / (1000 * 60 * 60 * 24);
  //bis hier: days1 = days from 0 (19434 etc.)
  var abyssresets = 0;
  var days = 1;
  var daysDiff = clcdate();
  while (days <= daysDiff) {
    let daysneu = days1 + days;
    var milneu = daysneu * (1000 * 60 * 60 * 24);
    var dateneu = new Date(milneu);
    let monthdays = dateneu.getDate();
    if (monthdays == 1 || monthdays == 16) {
      abyssresets += 1;
    } else {
      abyssresets += 0;
    }
    days = days + 1;
  }
  return abyssresets;
}

function clcshopreset() {
  var from = document.getElementById("from").value;
  var date1 = new Date(from);
  var mil1 = date1.getTime();
  var days1 = mil1 / (1000 * 60 * 60 * 24);
  //bis hier: days1 = days from 0 (19434 etc.)
  var shopresets = 0;
  var days = 1;
  var daysDiff = clcdate();
  while (days <= daysDiff) {
    let daysneu = days1 + days;
    var milneu = daysneu * (1000 * 60 * 60 * 24);
    var dateneu = new Date(milneu);
    let monthdays = dateneu.getDate();
    if (monthdays == 1) {
      shopresets += 1;
    } else {
      shopresets += 0;
    }
    days = days + 1;
  }
  return shopresets;
}

function clclivestreamcodes() {
  const datezero = new Date(2022, 10, 26); // 26.10.2022 ist Tag 0
  let milzero = datezero.getTime();
  let dayszero = Math.ceil(milzero / (1000 * 60 * 60 * 24)); // Tag 0 in Tagen von Anfang
  var from = document.getElementById("from").value;
  var dateday1 = new Date(from); // 1. Kalender Tag
  let milday1 = dateday1.getTime();
  let daysday1 = Math.floor(milday1 / (1000 * 60 * 60 * 24)); // 1. Kalender Tag in Tagen von Anfang
  let dateDiff = daysday1 - dayszero; // Tage von Tag 0 bis 1. Kalendertag
  var daysDiff = clcdate();
  daysleft = dateDiff % 42; // Tage seit 3 Wochen Update
  if (daysDiff <= 42) {
    if (daysleft + daysDiff >= 42) {
      let livestreams = 1;
      return livestreams;
    } else {
      let livestreams = 0;
      return livestreams;
    }
  } else {
    timesover42days = Math.floor(daysDiff / 42);
    restover21days = daysDiff % 42;
    if (daysleft + restover21days >= 42) {
      let livestreams = 1 + timesover42days;
      return livestreams;
    } else {
      let livestreams = 0 + timesover42days;
      return livestreams;
    }
  }
}

function show() {
  var className = infoid.getAttribute("class");
  if (className == "hide") {
    infoid.className = "unhide";
  } else {
    infoid.className = "hide";
  }
}
