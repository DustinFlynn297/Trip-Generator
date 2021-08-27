// Array to store the randomized information
let tripArray = [];

// Variables for each randomized trip item
let destinations = ["Myrtle Beach", "Colorado Springs", "Seattle", "New York City", "Hong Kong", "Punta Cana", "Swiss Alps", "Sweden", "Amsterdam"];
let restaurants = ["Applebees", "Ruth Chris Steak House", "Local Italian restaurant", "Local Bistro", "Local Indian restaurant", "McDonald's"];
let modeOfTransportation = ["Personal Vehicle", "Uber", "Lyft", "Plane", "Train", "Scooter"];
let entertainment = ["Opera", "Concert", "Sporting Event", "Circus", "Carnival", "Movie Theater", "Play", "Swimming with sharks", "Skiing", "Wakeboarding"];


// function to return random 
function randomTripsGenerator(someArray) {
    return someArray[Math.floor(Math.random() * someArray.length)]
}

// function to 

function itineraryGenerator(itineraryArray, index, itemArray) {
    itineraryArray[index] = randomTripsGenerator(itemArray)
}

itineraryGenerator(tripArray, 0, destinations);
itineraryGenerator(tripArray, 1, restaurants);
itineraryGenerator(tripArray, 2, modeOfTransportation);
itineraryGenerator(tripArray, 3, entertainment);


let userInput = '';
let randomTripGenerator = '';

while (userInput != 6) {
    randomTripGenerator = "Your destination will be " + tripArray[0] + ", your restaurant will be " + tripArray[1]
    + ", your mode of transportation will be " + tripArray[2] + ", and your entertainment for the day will be " + tripArray[3] + ".";
    alert(randomTripGenerator);

    userInput = prompt("Please select one of the following options:" +
        "\r\n" +
        "1 for new Location" +
        "\r\n" +
        "2 for new Restaurant" +
        "\r\n" +
        "3 for new Transportation" +
        "\r\n" +
        "4 for new entertainment" +
        "\r\n" +
        "5 for all new" +
        "\r\n" +
        "6 to confirm current selection.");;

    if (userInput == 1) {
        itineraryGenerator(tripArray, 0, destinations);
    } else if (userInput == 2) {
        itineraryGenerator(tripArray, 1, restaurants);
    } else if (userInput == 3) {
        itineraryGenerator(tripArray, 2, modeOfTransportation);
    } else if (userInput == 4) {
        itineraryGenerator(tripArray, 3, entertainment);
    } else if (userInput == 5) {
        itineraryGenerator(tripArray, 0, destinations);
        itineraryGenerator(tripArray, 1, restaurants);
        itineraryGenerator(tripArray, 2, modeOfTransportation);
        itineraryGenerator(tripArray, 3, entertainment);
    } else if (userInput == 6) {
        alert("Trip confirmed! " + randomTripGenerator);
        break;
    } else {
        alert("Please choose a valid number.");
    }
    

}
console.log(randomTripGenerator);
console.log(tripArray);