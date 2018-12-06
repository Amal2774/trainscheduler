var trainName= "";
var destination= "";
var firstTrainTime= "";
var frequency= "";
var nextArrival= "";

var addTrainDetails= [];

$("#submitBtn").on("click", function(event) {
    event.preventDefault();

    trainName = $("#trainNameInput").val().trim();
    console.log(trainName);

    destination = $("#destinationInput").val().trim();
    console.log(destination);

    firstTrainTime = $("#trainTimeInput").val().trim();
    console.log(firstTrainTime);

    frequency = $("#frequencyMinInput").val().trim();
    console.log(frequency);

});



