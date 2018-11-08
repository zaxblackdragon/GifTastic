$(document).ready(function() {
// -> onload button names
    var preExButtons = ["SNL ", "Spaceship", "Horse", "Iguana", "Uggly Cry", "Batman", "Bob Ross"];
// -> func for creating buttons from the array
    function addGifButton() {
        $("#buttons").empty();
        for (var i =0; i < preExButtons.length; i++) {
            // stores the btn tag
            var button = $("<button>");
            // adds a class to the btn
            button.addClass("btn btn-primary");
            // adds data type attr to btn = var[i] so it can be uniquely identified and used later
            button.attr("data-type", preExButtons[i]);
            // put the text on the btn = var[i]
            button.text(preExButtons[i]);
            // adds the btn to the page
            $("#buttons").append(button);
        }

    }
// -> calls the func to add btn at page onload
addGifButton();



// -> onclick event listens for any button clicked
    $("#buttons").on("click", "button", function() {
// ->   adds an attr and stores it in the var
        var giffyReq = $(this).attr("data-type");
//  ->      stores the api req
        //var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + giffyReq;
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giffyReq + "&api_key=2tVahAdSxcg2GVSmaASD7AlTr9d5z8rG&limit=10";
        
 // -> call 2tVahAdSxcg2GVSmaASD7AlTr9d5z8rG &tag
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            // set the response to a var
            
            
            var responseObj = response.data;
           
            for (var i =0; i < responseObj.length; i++) {
                var imageStillUrl = response.data[i].images.original_still.url;
                var imageMoveUrl = response.data[i].images.original.url;
                var rating = response.data[i].rating;
           
                var ratingInfo = $("<p>");
                var gifImage = $("<img>");
                var gifRatingContainer = $("<button>");

                gifRatingContainer.addClass("container");
                gifRatingContainer.attr("id", "box");

                
                gifImage.attr("src", imageStillUrl);
                gifImage.attr("class", "gif-style");
                gifImage.attr("data-still", imageStillUrl);
                gifImage.attr("data-move", imageMoveUrl);

                ratingInfo.attr("id", "ratingLabel");
                ratingInfo.text("Rating: " + rating.toUpperCase());
                
                $("#gifContainer").prepend(gifRatingContainer);
                $("#box").prepend(gifImage);
                $("#box").prepend(ratingInfo);

                
            }
            $(".gif-style").on("click", function (event) {
                if ($(this).attr("src") === $(this).attr("data-still")){
                    $(this).attr("src", $(this).attr("data-move"));
                }
                else {
                    $(this).attr("src", $(this).attr("data-still"));
                }
            });
          }) 
    });
    

  

    // event listener for the submit button
    $("#submit-btn").on("click",  function(event) {
        // stores user input to a var
        event.preventDefault();
        var inputData = $("#button-maker").val().trim();
        preExButtons.push(inputData);
        addGifButton();
    })


}); // -> doc ready close