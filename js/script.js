function validateForm() {

  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Last name must be filled out");
    return false;
  }

  x = document.forms["myForm"]["pass"].value;
  if (x == "") {
    alert("Password must be filled out");
    return false;
  }

  x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }

  var format = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/;
  if(format.test(x)==false){
    alert("email: wrong format");
    return false;
  }

  x = document.forms["myForm"]["bdate"].value;
  if (x == "") {
    alert("Birthdate must be filled out");
    return false;
  }

  var b= "";
  var tmp = /^[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])$/;
  if(tmp.test(x)== false){
    alert("Birthdate: invalid date");
    return false;
  }

  x = document.forms["myForm"]["age"].value;
  if (x == "") {
    alert("Age name must be filled out");
    return false;
  }

  b = document.forms["myForm"]["bdate"].value;
    
  var date = String(b); // Date
  var year  = date.slice(0,4);
  var month = date.slice(5,7);
  var day = date.slice(8,10);
   
  var today = new Date(); // Today's date
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth() + 1;
  var currentDay = today.getDate();

  var age = currentYear - year;

  if(currentMonth < month || currentMonth == month && currentDay < day){
    --age;
  }

  if(age != x){
    alert("Age and birthdate don't match");
    return false;
  }

  x = document.forms["myForm"]["gender"].value;
  if (x == "") {
    alert("Select Gender");
    return false;
  }

  x = document.forms["myForm"]["Region"].value;
  if (x == -1) {
    alert("Select District");
    return false;
  }

  x = document.forms["myForm"]["Municipality"].value;
  if (x == -1) {
    alert("Select Municipality");
    return false;
  }

  x = document.forms["myForm"]["Town"].value;
  if (x == -1) {
    alert("Select Town");
    return false;
  }

  return true;
}

function optionBox(){
  var male= document.getElementById('dot-1');
  var female = document.getElementById('dot-2');
  var other = document.getElementById('dot-3');

  male.onchange = function() {  
    document.getElementById("boxx").style.display = 'block';
    document.getElementById('boxx').innerHTML = 'You have chosen Male';
    values.push(document.getElementById('boxx').value);
  };

  female.onchange = function() {  
    document.getElementById("boxx").style.display = 'block';
    document.getElementById('boxx').innerHTML = 'You have chosen Female';
    values.push(document.getElementById('boxx').value);
  };  

  other.onchange = function() {  
    document.getElementById("boxx").style.display = 'block';
    document.getElementById('boxx').innerHTML = 'You have chosen other';
    values.push(document.getElementById('boxx').value);
  };
}

function changeCheck(){
  var dog= document.getElementById('opt1');
  var cat = document.getElementById('opt2');
  var other = document.getElementById('opt3'); 

  other.onchange = function() {  
    document.getElementById("otherText").style.display = 'block';
    values.push(document.getElementById('otherText').value);
  };
}

function changeDistrict(){
  if(districtT.options[districtT.selectedIndex].index == 1){
        
    municipalityT.options[0].text = "Kovačica";
    municipalityT.options[0].value = "0";

    municipalityT.options[1].text = "Alibunar";
    municipalityT.options[1].value = "1";

    municipalityT.options[2].text = "Zrenjanin";
    municipalityT.options[2].value = "2";

    municipalityT.options[3].text = "";
    municipalityT.options[4].text = "";
    municipalityT.options[5].text = "";
    municipalityT.options[6].text = "";
    municipalityT.options[7].text = "";
    municipalityT.options[8].text = "";
    municipalityT.options[9].text = "";

    municipalityT.options[3].value = "-1";
    municipalityT.options[4].value = "-1";
    municipalityT.options[5].value = "-1";
    municipalityT.options[6].value = "-1";
    municipalityT.options[7].value = "-1";
    municipalityT.options[8].value = "-1";
    municipalityT.options[9].value = "-1";

    townT.options[0].text = "Kovačica";
    townT.options[0].value = "0";

    townT.options[1].text = "Padina";
    townT.options[1].value = "1";

    townT.options[2].text = "Janošik";
    townT.options[2].value = "2";

    townT.options[3].text = "Zrenjanin";
    townT.options[3].value = "3";

    townT.options[4].text = "Belo Blato";
    townT.options[4].value = "4";

    townT.options[5].text = "Aradac";
    townT.options[5].value = "5";

    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";

  }

  else if (districtT.options[districtT.selectedIndex].index == 2){
    municipalityT.options[0].text = "Novi Sad";
    municipalityT.options[0].value = "0";

    municipalityT.options[1].text = "Bačka Palanka";
    municipalityT.options[1].value = "1";

    municipalityT.options[2].text = "Bački Petrovac";
    municipalityT.options[2].value = "2";

    municipalityT.options[3].text = "Bač";
    municipalityT.options[3].value = "3";

    municipalityT.options[4].text = "";
    municipalityT.options[5].text = "";
    municipalityT.options[6].text = "";
    municipalityT.options[7].text = "";
    municipalityT.options[8].text = "";
    municipalityT.options[9].text = "";

    municipalityT.options[4].value = "-1";
    municipalityT.options[5].value = "-1";
    municipalityT.options[6].value = "-1";
    municipalityT.options[7].value = "-1";
    municipalityT.options[8].value = "-1";
    municipalityT.options[9].value = "-1";

    townT.options[0].text = "Novi Sad";
    townT.options[0].value = "0";

    townT.options[1].text = "Kisač";
    townT.options[1].value = "1";

    townT.options[2].text = "Bački Petrovac";
    townT.options[2].value = "2";

    townT.options[3].text = "Gložan";
    townT.options[3].value = "3";

    townT.options[4].text = "Kulpin";
    townT.options[4].value = "4";

    townT.options[5].text = "Bačka Palanka";
    townT.options[5].value = "5";

    townT.options[6].text = "Pivnice";
    townT.options[6].value = "6";

    townT.options[7].text = "Silbaš";
    townT.options[7].value = "7";

    townT.options[8].text = "Selenča";
    townT.options[8].value = "8";

    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  else if (districtT.options[districtT.selectedIndex].index == 3){
    municipalityT.options[0].text = "Stara Pazova";
    municipalityT.options[0].value = "0";

    municipalityT.options[1].text = "Šid";
    municipalityT.options[1].value = "1";

    municipalityT.options[2].text = "";
    municipalityT.options[3].text = "";
    municipalityT.options[4].text = "";
    municipalityT.options[5].text = "";
    municipalityT.options[6].text = "";
    municipalityT.options[7].text = "";
    municipalityT.options[8].text = "";
    municipalityT.options[9].text = "";

    municipalityT.options[2].value = "-1";
    municipalityT.options[3].value = "-1";
    municipalityT.options[4].value = "-1";
    municipalityT.options[5].value = "-1";
    municipalityT.options[6].value = "-1";
    municipalityT.options[7].value = "-1";
    municipalityT.options[8].value = "-1";
    municipalityT.options[9].value = "-1";

    townT.options[0].text = "Stara Pazova";
    townT.options[0].value = "0";

    townT.options[1].text = "Šid";
    townT.options[1].value = "1";

    townT.options[2].text = "Erdevik";
    townT.options[2].value = "2";

    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }
}

function changeMunicipality(){
  if(districtT.options[districtT.selectedIndex].index == 1 && municipalityT.options[municipalityT.selectedIndex].index == 0){
    townT.options[0].text = "Kovačica";
    townT.options[0].value = "0";

    townT.options[1].text = "Padina";
    townT.options[1].value = "1";

    townT.options[2].text = "";
    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[2].value = "-1";
    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  if(districtT.options[districtT.selectedIndex].index == 1 && municipalityT.options[municipalityT.selectedIndex].index == 1){
    townT.options[0].text = "Janošik";
    townT.options[0].value = "0";

    townT.options[1].text = "";
    townT.options[2].text = "";
    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[1].value = "-1";
    townT.options[2].value = "-1";
    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  if(districtT.options[districtT.selectedIndex].index == 1 && municipalityT.options[municipalityT.selectedIndex].index == 2){
    townT.options[0].text = "Zrenjanin";
    townT.options[0].value = "0";

    townT.options[1].text = "Belo Blato";
    townT.options[1].value = "1";

    townT.options[2].text = "Aradac";
    townT.options[2].value = "2";

    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  if(districtT.options[districtT.selectedIndex].index == 2 && municipalityT.options[municipalityT.selectedIndex].index == 0){
    townT.options[0].text = "Novi Sad";
    townT.options[0].value = "0";

    townT.options[1].text = "Kisač";
    townT.options[1].value = "1";

    townT.options[2].text = "";
    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[2].value = "-1";
    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  if(districtT.options[districtT.selectedIndex].index == 2 && municipalityT.options[municipalityT.selectedIndex].index == 1){
    townT.options[0].text = "Bački Petrovac";
    townT.options[0].value = "0";

    townT.options[1].text = "Gložan";
    townT.options[1].value = "1";

    townT.options[2].text = "Kulpin";
    townT.options[2].value = "2";

    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  if(districtT.options[districtT.selectedIndex].index == 2 && municipalityT.options[municipalityT.selectedIndex].index == 2){
    townT.options[0].text = "Bačka Palanka";
    townT.options[0].value = "0";

    townT.options[1].text = "Pivnice";
    townT.options[1].value = "1";

    townT.options[2].text = "Silbaš";
    townT.options[2].value = "2";

    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  if(districtT.options[districtT.selectedIndex].index == 2 && municipalityT.options[municipalityT.selectedIndex].index == 3){
    townT.options[0].text = "Selenča";
    townT.options[0].value = "0";

    townT.options[1].text = "";
    townT.options[2].text = "";
    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[1].value = "-1";
    townT.options[2].value = "-1";
    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  if(districtT.options[districtT.selectedIndex].index == 3 && municipalityT.options[municipalityT.selectedIndex].index == 0){
    townT.options[0].text = "Stara Pazova";
    townT.options[0].value = "0";

    townT.options[1].text = "";
    townT.options[2].text = "";
    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[1].value = "-1";
    townT.options[2].value = "-1";
    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }

  if(districtT.options[districtT.selectedIndex].index == 3 && municipalityT.options[municipalityT.selectedIndex].index == 1){
    townT.options[0].text = "Šid";
    townT.options[0].value = "0";

    townT.options[1].text = "Erdevik";
    townT.options[1].value = "1";

    townT.options[2].text = "";
    townT.options[3].text = "";
    townT.options[4].text = "";
    townT.options[5].text = "";
    townT.options[6].text = "";
    townT.options[7].text = "";
    townT.options[8].text = "";
    townT.options[9].text = "";
    townT.options[10].text = "";
    townT.options[11].text = "";
    townT.options[12].text = "";
    townT.options[13].text = "";
    townT.options[14].text = "";
    townT.options[15].text = "";
    townT.options[16].text = "";
    townT.options[17].text = "";
    townT.options[18].text = "";

    townT.options[2].value = "-1";
    townT.options[3].value = "-1";
    townT.options[4].value = "-1";
    townT.options[5].value = "-1";
    townT.options[6].value = "-1";
    townT.options[7].value = "-1";
    townT.options[8].value = "-1";
    townT.options[9].value = "-1";
    townT.options[10].value = "-1";
    townT.options[11].value = "-1";
    townT.options[12].value = "-1";
    townT.options[13].value = "-1";
    townT.options[14].value = "-1";
    townT.options[15].value = "-1";
    townT.options[16].value = "-1";
    townT.options[17].value = "-1";
    townT.options[18].value = "-1";
  }
}