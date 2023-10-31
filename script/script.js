$(function(){
  let movies = [
      ["Horror Movie", ["M3GAN", "Sinister", "The Exorcist"]],
      ["Science Fiction Movie", ["Interstellar", "Avatar", "Star Wars"]],
      ["Thriller Movie", ["Parasite", "Mirror Game", "The Dark Night"]],
      ["Romance Movie", ["Titanic", "The Notebook", "The Shape of Water"]],
  ];

  $("#genre").on("change", function(e) {
      //enables the movie dropdown
      $("#movie").prop("disabled", false);

      let inputVal = this.value;

      // console.log(inputVal);

      //loop though array of movie
      $.each(movies, function(key, value) {
          //match movie to genre selected
          if (inputVal === value[0]) {
              $.each(value, function(movieKey, movieValue) {
                  
                //Switch case to choose when to display the size dropdown based on color choice.
                  switch (movieKey) {
                      case 0:
                          $("label[for=movie]").text(movieValue);
                          $("#movie").empty();
                          $("#movie").append(
                              $("<option>").text(`Select ${movieValue} `)
                          );
                          break;
                      case 1:
                          $.each(movieValue, function(nameKey, nameValue) {
                              console.log(nameKey, nameValue);

                              $("#movie").append(
                                  $("<option>").val(nameValue).text(nameValue)
                              );
                          });
                          break;
                  }
              });
          }
      });
  });


});//end of doc