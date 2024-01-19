let allProfiles = []
document.body.addEventListener("submit", function (e) {

  e.preventDefault();

  var Name = document.getElementById('Name').value;
  var Email = document.getElementById('Email').value;
  var number = document.getElementById('number').value;
  var Attachment = document.getElementById('Attachment').value;
  var Description = document.getElementById("subject").value;

  console.log('Name', Name);
  console.log('Email', Email);
  console.log('number', number);
  console.log('Attachment', Attachment);
  console.log('Description', Description);
  console.log("profile", profile);

  var profile = {
    id: Date.now(),
    Name: Name,
    Email: Email,
    number: number,
    Attachment: Attachment,
    Description: Description
  };



  alert('Data saved!');


  allProfiles.push(profile);

  localStorage.setItem('allProfiles', JSON.stringify(allProfiles));

  // Store To Database

  document.getElementById('myForm').reset();

  console.log("allProfiles", allProfiles)
});


