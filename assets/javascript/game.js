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
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + giffyReq;
 // -> call
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            // set the response to a var
            var imageUrl = response.data.image_original_url;
            // adds an image tag to a var
            var gifImage = $("<img>");
             // adds attr to the img tag
             gifImage.attr("src", imageUrl)
             gifImage.attr("id", "gif-style")
             
             
            // sets the image to the gif container in html
            $("#gifContainer").prepend(gifImage);
          })
    });
    // $(document).on("click", "button", function() {
    //     console.log("test");
    // }
    //      3. user creates button that works the same as pre-existing buttons
    //              event listener tied to the user input ie submit button
    //                         push user input to the button variable from step  1
    //                          call func from step 1
 

    // event listener for the submit button
    $("form").on("click", "button", function() {
        // stores user input to a var
        var inputData = $("#button-maker").val();
        preExButtons.push(inputData);
        addGifButton();
    })
    
}); // -> doc ready close