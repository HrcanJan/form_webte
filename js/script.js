function validateForm() {

  let x = document.forms["myForm"]["fname"].value;
  if (x === "") {
    alert("Name must be filled out");
    return false;
  }

  x = document.forms["myForm"]["lname"].value;
  if (x === "") {
    alert("Last name must be filled out");
    return false;
  }

  x = document.forms["myForm"]["pass"].value;
  if (x === "") {
    alert("Password must be filled out");
    return false;
  }

  x = document.forms["myForm"]["email"].value;
  if (x === "") {
    alert("Email must be filled out");
    return false;
  }

  const format = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.][a-zA-Z]{2,}|[.][a-zA-Z]{2,}[.][a-zA-Z]{2,})$/;
  if(format.test(x) === false){
    alert("email: wrong format");
    return false;
  }

  x = document.forms["myForm"]["bdate"].value;
  if (x === "") {
    alert("Birthdate must be filled out");
    return false;
  }

  let b = "";
  const tmp = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/;
  if(tmp.test(x) === false){
    alert("Birthdate: invalid date");
    return false;
  }

  x = document.forms["myForm"]["age"].value;
  if (x === "") {
    alert("Age name must be filled out");
    return false;
  }

  b = document.forms["myForm"]["bdate"].value;
    
  const date = String(b); // Date
  const year  = date.slice(0,4);
  const month = date.slice(5,7);
  const day = date.slice(8,10);
   
  const today = new Date(); // Today's date
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  let age = currentYear - year;

  if(currentMonth < month || currentMonth.toString() === month.toString() && currentDay < day){
    age--;
  }

  if(age !== x){
    alert("Age and birthdate don't match");
    return false;
  }

  x = document.forms["myForm"]["gender"].value;
  if (x === "") {
    alert("Select Gender");
    return false;
  }

  x = document.forms["myForm"]["Region"].value;
  if (x === -1) {
    alert("Select District");
    return false;
  }

  x = document.forms["myForm"]["Municipality"].value;
  if (x === -1) {
    alert("Select Municipality");
    return false;
  }

  x = document.forms["myForm"]["Town"].value;
  if (x === -1) {
    alert("Select Town");
    return false;
  }

  return true;
}

function optionBox(){
  const male = document.getElementById('dot-1');
  const female = document.getElementById('dot-2');
  const other = document.getElementById('dot-3');
  const boxx = document.getElementById('boxx');

  male.onchange = function() {  
    boxx.style.display = 'block';
    boxx.innerHTML = 'You have chosen Male';
  };

  female.onchange = function() {  
    boxx.style.display = 'block';
    boxx.innerHTML = 'You have chosen Female';
  };  

  other.onchange = function() {  
    boxx.style.display = 'block';
    boxx.innerHTML = 'You have chosen other';
  };
}

function changeCheck(){
  const other = document.getElementById('opt3');

  other.onchange = function() {  
    document.getElementById("otherText").style.display = 'block';
  };
}

let regions = document.getElementById("districtT");
let municipalities = document.getElementById('municipalityT');
let towns = document.getElementById('townT');

function changeDistrict(){
  let length1 = municipalities.options.length;
  for (let i = length1 - 1; i >= 1; i--)
    municipalities.options[i] = null;

  deletePlease();

  switch(regions.value){
    case "0":
      const opt1 = document.createElement("option");
      opt1.value = "6";
      opt1.textContent = "Kovačica";
      municipalities.appendChild(opt1);
      change("6");

      const opt2 = document.createElement("option");
      opt2.value = "7";
      opt2.textContent = "Zrenjanin";
      municipalities.appendChild(opt2);
      change("7");

      const opt3 = document.createElement("option");
      opt3.value = "8";
      opt3.textContent = "Alibunar";
      municipalities.appendChild(opt3);
      change("8");
      break;

    case "1":
      const opt4 = document.createElement("option");
      opt4.value = "0";
      opt4.textContent = "Novi Sad";
      municipalities.appendChild(opt4);
      change("0");

      const opt5 = document.createElement("option");
      opt5.value = "1";
      opt5.textContent = "Bačka Palanka";
      municipalities.appendChild(opt5);
      change("1");

      const opt6 = document.createElement("option");
      opt6.value = "2";
      opt6.textContent = "Bački Petrovac";
      municipalities.appendChild(opt6);
      change("2");
      break;

    case "2":
      const opt7 = document.createElement("option");
      opt7.value = "3";
      opt7.textContent = "Stara Pazova";
      municipalities.appendChild(opt7);
      change("3");

      const opt8 = document.createElement("option");
      opt8.value = "4";
      opt8.textContent = "Bač";
      municipalities.appendChild(opt8);
      change("4");

      const opt9 = document.createElement("option");
      opt9.value = "5";
      opt9.textContent = "Šid";
      municipalities.appendChild(opt9);
      change("5");
      break;
  }
}

function deletePlease(){
  let length2 = towns.options.length;
  for (let i = length2 - 1; i >= 1; i--)
    towns.options[i] = null;
}

function changeMunicipality(){
  deletePlease();
  change(municipalities.value);
}

function change(num){
  switch (num){
    case "0":
      const opt1 = document.createElement("option");
      opt1.value = "0";
      opt1.textContent = "Novi Sad";
      towns.appendChild(opt1);

      const opt2 = document.createElement("option");
      opt2.value = "1";
      opt2.textContent = "Kisač";
      towns.appendChild(opt2);
      break;

    case "1":
      const opt3 = document.createElement("option");
      opt3.value = "5";
      opt3.textContent = "Bačka Palanka";
      towns.appendChild(opt3);

      const opt4 = document.createElement("option");
      opt4.value = "6";
      opt4.textContent = "Pivnice";
      towns.appendChild(opt4);

      const opt5 = document.createElement("option");
      opt5.value = "7";
      opt5.textContent = "Silbaš";
      towns.appendChild(opt5);
      break

    case "2":
      const opt6 = document.createElement("option");
      opt6.value = "2";
      opt6.textContent = "Bački Petrovac";
      towns.appendChild(opt6);

      const opt7 = document.createElement("option");
      opt7.value = "3";
      opt7.textContent = "Gložan";
      towns.appendChild(opt7);

      const opt8 = document.createElement("option");
      opt8.value = "4";
      opt8.textContent = "Kulpin";
      towns.appendChild(opt8);
      break;

    case "3":
      const opt9 = document.createElement("option");
      opt9.value = "9";
      opt9.textContent = "Stara Pazova";
      towns.appendChild(opt9);
      break;

    case "4":
      const opt10 = document.createElement("option");
      opt10.value = "2";
      opt10.textContent = "Selenča";
      towns.appendChild(opt10);
      break;

    case "5":
      const opt12 = document.createElement("option");
      opt12.value = "10";
      opt12.textContent = "Šid";
      towns.appendChild(opt12);

      const opt11 = document.createElement("option");
      opt11.value = "11";
      opt11.textContent = "Erdevik";
      towns.appendChild(opt11);
      break;

    case "6":
      const opt13 = document.createElement("option");
      opt13.value = "12";
      opt13.textContent = "Kovačica";
      towns.appendChild(opt13);

      const opt14 = document.createElement("option");
      opt14.value = "13";
      opt14.textContent = "Padina";
      towns.appendChild(opt14);
      break;

    case "8":
      const opt15 = document.createElement("option");
      opt15.value = "14";
      opt15.textContent = "Janošik";
      towns.appendChild(opt15);

      break;

    case "7":
      const opt16 = document.createElement("option");
      opt16.value = "15";
      opt16.textContent = "Zrenjanin";
      towns.appendChild(opt16);

      const opt17 = document.createElement("option");
      opt17.value = "16";
      opt17.textContent = "Belo Blato";
      towns.appendChild(opt17);

      const opt18 = document.createElement("option");
      opt18.value = "17";
      opt18.textContent = "Aradac";
      towns.appendChild(opt18);
      break;
  }
}