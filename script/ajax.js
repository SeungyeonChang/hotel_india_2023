$('#btnLoadData').click(function() {
  console.log("clicked");
  
  let jsonURL = "myinfo.json";
  //assigns jsonURl variable as the info in a local file

  $.ajax({
      url: jsonURL,
      dataType: "json",
      success: function(data) {

          //goes through each element in the demo json file and prints it to the console
          $('input[type=radio]').each(function () {
              if (data.dressType === $(this).val())
              {
                $(this).prop('checked', true)
                  console.log($(this));
             }
          });

      
          $.each(data, function (key, val) {
              //step through results
              console.log(key, val);
              //get each data item
              //put it in the right place
              $(`#${key}`).val(val);
              
          });
      }
  });
});



  $("#submitButton").click(function (){

      // handle it if input is blank

      //Also fetches names and email straight from form

      let firstName = $("#first-name").val();
      let lastName = $("#last-name").val();
      let studentEmail = $("#email").val();
      let greetMessage = greetStudent(firstName, lastName, studentEmail); 


      console.log('submitted form');
      console.log('displayed message', greetStudent(firstName, lastName, studentEmail));
      

      $("#greetOutput").html(greetMessage);
  
    });
  
  

// function to display full name and email
// Includes general message to student
function greetStudent(firstName, lastName, studentEmail) {
  let greetMessage = ''; 
  
  greetMessage = "<br><h4>" + displayStudentName(firstName, lastName) + "</h4>";
  greetMessage += "<h6>" + displayEmail(studentEmail) + "</h6>";
  greetMessage += "<br><h6>Thank you for participating this survey.<br>Have a Good Day:)</h6>";


  console.log("obtained the user greeting " + greetMessage); 

  return greetMessage;
}

// function to store full name
function displayStudentName(firstName, lastName) {
  return "Hello " + firstName + " " + lastName + "!";
}

//funtion to store email
function displayEmail(email) {
  return "Email: "  + email;
}