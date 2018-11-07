







$(document).ready(function() {
    // -> steps
    //      1. load pre-existing buttons
    //          button variable - DONE
    //              add attr to buttom

    //              var with attr
    //              for loop to add type to buttons

    var preExButtons = ["car ", "spaceship", "cat", "monkey"];

    function addType() {
        $("#buttons").empty();
        for (var i =0; i < preExButtons.length; i++) {
            var button = $("<button>");
            button.addClass("btn btn-primary");
            button.attr("data-type", preExButtons[i]);
            button.text(preExButtons[i]);
            $("#buttons").append(button);
        }

    }
    addType();

    
    //      2. on button click - pop giphy field from giphy api
    //              event listener -> waits for button clicked
    //                      onclick ->  read buttun type
    //                          feed type to the api  and request the respone
    //                          pop gif field with resposne
    $(document).on("click", "button", function() {

        var giffyReq = $(this).attr("data-type");
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + giffyReq;
 
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            // set the image location to a var
            var imageUrl = response.data.image_original_url;
            // adds an image tag to a var
            var gifImage = $("<img>");
             // console.log(response.data.url);
             gifImage.attr("src", imageUrl)
             //gifImage.attr("alt", )
             console.log(response);
            // sets the image to the gif container in html
            $("#gifContainer").prepend(gifImage);
          })
    });

    //      3. user creates button that works the same as pre-existing buttons
    //              event listener tied to the user input ie submit button
    //                         push user input to the button variable from step  1
    //                          call func from step 1
    
}); // -> doc ready close