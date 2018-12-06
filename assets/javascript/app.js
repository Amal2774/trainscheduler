let trainName= "";
let destination= "";
let firstTrainTime= "";
let frequency= "";
let nextArrival= "";

let addTrainDetails= [];

function resetDetails(){
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#trainTimeInput").val("");
    $("#frequencyMinInput").val("");
};

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

    addTrainDetails.push({
        name: trainName,
        destinationLocation: destination,
        trainTime: firstTrainTime,
        minutes: frequency,
    
    });

    console.log(addTrainDetails);

    localStorage.setItem("trainSchedule", JSON.stringify(addTrainDetails));

    resetDetails();

});

function addTrain() {

    var tBody = $("#tBody");
    var tRow = $("<tr>");

    var trainsName = $("<td>").text(trainName);
    var destination = $("<td>").text(destinationLocation);
    var trainFrequency = $("<td>").text(frequency);
    var nextTrain = $("<td>").text(nextArrival);
 
    tBody.append(tRow);
    tRow.append(trainsName, destination, trainFrequency, nextTrain);

    addTrain();
};










