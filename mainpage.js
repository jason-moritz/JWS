// Set base url

const baseURL = "http://ergast.com/api/f1/";


// **********DROP DOWN YEAR SELECT BOX**********

const dropDownYearHTML = document.querySelector("#year-selector");

// axios request for drop down year
// Had to change this to simple for loop because there was a query limit of 1000 results, which only pulled up to 2019.
// Array needed for years

let yearsArr = [];


for (let i = 1950; i <= 2021; i++) {
    yearsArr.push(i);
}


function dropDownYear(years) {
    years.forEach((year) => {
        const option = document.createElement("option");
        option.value = year;
        option.innerText = year;
        dropDownYearHTML.append(option);
    })
}


dropDownYear(yearsArr);


// **********DROP DOWN CIRCUIT SELECT BOX**********

const dropDownCircuitsHTML = document.querySelector("#circuit-selector");

// Axios request for drop down circuit depending on year
// Will need to set url "year" to select box value


async function dropDownCircuitsAPI() {
    try {
        const response = await axios.get(`${baseURL}${dropDownYearHTML.value}.json`);


        const racesArr = response.data.MRData.RaceTable.Races;

       
        // The data is returning an array of races w/ objects, so will need to loop through to assign circuit name to each option and round to the value. Function to come below.

        dropDownCircuits(racesArr);
        

    } catch(error) {
        console.log(error);
    }
}


dropDownCircuitsAPI();


// Need function to append circuit name to drop down box

function dropDownCircuits(circuits) {
// First, clear old circuit results
    dropDownCircuitsHTML.innerText = "";


// Loop through array of circuits and create option and append each circuit
    circuits.forEach((circuit) => {
        const option = document.createElement("option");
        option.innerText = circuit.raceName;
        option.value = circuit.round;
        dropDownCircuitsHTML.append(option);
    })
}


// Need event listener for year drop down on change, to re-populate circuit drop down

dropDownYearHTML.addEventListener("change", dropDownCircuitsAPI);


// **********RACE BUTTON**********

const raceButtonHTML = document.querySelector("#button");

// Need axios request based on year and circuit drop-down selection

async function raceButtonAPI(event) {
    try {
        event.preventDefault();


        const response = await axios.get(`${baseURL}${dropDownYearHTML.value}/${dropDownCircuitsHTML.value}/results.json`);


        let resultArr = response.data.MRData.RaceTable.Races[0].Results;


        // This conditional is purely for trolling purposes (if you follow F1 and a Hamilton fan, this makes a lot more sense)

        if (resultArr[0].Driver.givenName == "Lewis") {
            displayResults("h3", "h5", `${resultArr[0].Driver.givenName} THE GOAT ${resultArr[0].Driver.familyName}`, `${resultArr[0].Constructor.name}`, `${resultArr[1].Driver.givenName} ${resultArr[1].Driver.familyName}`, `${resultArr[1].Constructor.name}`, `${resultArr[2].Driver.givenName} ${resultArr[2].Driver.familyName}`, `${resultArr[2].Constructor.name}`);
        
        
        } else if (resultArr[1].Driver.givenName == "Lewis") {
            displayResults("h3", "h5", `${resultArr[0].Driver.givenName} ${resultArr[0].Driver.familyName}`, `${resultArr[0].Constructor.name}`, `${resultArr[1].Driver.givenName} 'Bono, my tires' ${resultArr[1].Driver.familyName}`, `${resultArr[1].Constructor.name}`, `${resultArr[2].Driver.givenName} ${resultArr[2].Driver.familyName}`, `${resultArr[2].Constructor.name}`);
        

        } else {
            displayResults("h3", "h5", `${resultArr[0].Driver.givenName} ${resultArr[0].Driver.familyName}`, `${resultArr[0].Constructor.name}`, `${resultArr[1].Driver.givenName} ${resultArr[1].Driver.familyName}`, `${resultArr[1].Constructor.name}`, `${resultArr[2].Driver.givenName} ${resultArr[2].Driver.familyName}`, `${resultArr[2].Constructor.name}`);
        }


    } catch(error) {
        console.log(error);
    }
}


// Need event listener on race button to pull results using API function above

raceButtonHTML.addEventListener("click", raceButtonAPI);


// **********DISPLAY RESULTS**********

const firstPlaceResultsHTML = document.querySelector("#first-results");
const secondPlaceResultsHTML = document.querySelector("#second-results");
const thirdPlaceResultsHTML = document.querySelector("#third-results");
let allResultsHTML = document.querySelectorAll(".results");

// Need function to create and append results
// Need function to remove old results
// Need to add a forEach loop to remove old results
// Need to create 3 separate h5 to append to first, second, and third place divs respectively

function removeInfo() {
    allResultsHTML.forEach((oldResult) => {
        oldResult.innerHTML = "";
    })
}


function displayResults(size1, size2, name1, team1, name2, team2, name3, team3) {
    removeInfo();    

// Created 3 separate elements instead of forEach loop to assign and append individually. Re-visit to increase efficiency. 
    let firstPlaceName = document.createElement(size1);
    let firstPlaceTeam = document.createElement(size2);


    let secondPlaceName = document.createElement(size1);
    let secondPlaceTeam = document.createElement(size2);


    let thirdPlaceName = document.createElement(size1);
    let thirdPlaceTeam = document.createElement(size2);
    

    firstPlaceName.innerText = name1;
    firstPlaceTeam.innerText = team1;
    
    
    secondPlaceName.innerText = name2;
    secondPlaceTeam.innerText = team2;
    
    
    thirdPlaceName.innerText = name3;
    thirdPlaceTeam.innerText = team3;


    firstPlaceResultsHTML.append(firstPlaceName);
    firstPlaceResultsHTML.append(firstPlaceTeam);


    secondPlaceResultsHTML.append(secondPlaceName);
    secondPlaceResultsHTML.append(secondPlaceTeam);


    thirdPlaceResultsHTML.append(thirdPlaceName);
    thirdPlaceResultsHTML.append(thirdPlaceTeam);


    addButtons();
}

// Made buttons separate function. Not sure if necessary or more efficient than having this in the display results function above.
function addButtons() {
    let firstPlaceButton = document.createElement("button");
    let secondPlaceButton = document.createElement("button");
    let thirdPlaceButton = document.createElement("button");

    
    firstPlaceButton.innerText = "Details";
    secondPlaceButton.innerText = "Details";
    thirdPlaceButton.innerText = "Details";


    firstPlaceResultsHTML.append(firstPlaceButton);
    secondPlaceResultsHTML.append(secondPlaceButton);
    thirdPlaceResultsHTML.append(thirdPlaceButton);

    
    firstPlaceButton.setAttribute("id", 0);
    secondPlaceButton.setAttribute("id", 1);
    thirdPlaceButton.setAttribute("id", 2);


    let allPlaceButton = [firstPlaceButton, secondPlaceButton, thirdPlaceButton];


    allPlaceButton.forEach((button) => {
        button.addEventListener("click", (e) => {
            displayDetailsAPI(e.target.id);
        });
    });
}


// **********DISPLAY DETAILS**********

let resultsDiv = document.querySelectorAll(".results");

// Need async function to make axios request for race data
// Need function to display details
// Need conditional to determine if fastest lap is available

async function displayDetailsAPI(id) {
    try {
        let response = await axios.get(`${baseURL}${dropDownYearHTML.value}/${dropDownCircuitsHTML.value}/results.json`)
        let detailsArr = response.data.MRData.RaceTable.Races[0].Results;
       

// conditional to check for fastest lap

        if (detailsArr[id].FastestLap) {
            displayDetails(`Total Time: ${detailsArr[id].Time.time}`, `Fastest Lap: ${detailsArr[id].FastestLap.Time.time}`, resultsDiv[id], "h5", "h5");    


        } else {
            displayDetails(`Total Time: ${detailsArr[id].Time.time}`, `Total Laps: ${detailsArr[id].laps}`, resultsDiv[id], "h5", "h5");
        }


    } catch(error) {
        console.log(error)
    }
}


// Need function to append details in replace of race results
// Need event listener on new button
// Need to go back to results on click, so will use original API function

function displayDetails(totalTime, fastestLap, location, size1, size2) {
        location.innerText = "";
    

        let newDetail1 = document.createElement(size1);
        let newDetail2 = document.createElement(size2)
        
        
        newDetail1.innerText = totalTime;
        newDetail2.innerText = fastestLap;
        
        
        location.append(newDetail1);
        location.append(newDetail2);


        let newButton = document.createElement("button");
        newButton.innerText = "Results";
        location.append(newButton);


        if (location === resultsDiv[0]) {
            newButton.setAttribute("id", 0);
        } else if (location === resultsDiv[1]) {
            newButton.setAttribute("id", 1);
        } else {
            newButton.setAttribute("id", 2)
        }
        
        newButton.addEventListener("click", (e) => {
            returnResultButtonAPI(e.target.id);
        });
}


// Need new async function for details button event listener to return to race results for single driver

async function returnResultButtonAPI(id) {
    try {


        const response = await axios.get(`${baseURL}${dropDownYearHTML.value}/${dropDownCircuitsHTML.value}/results.json`);


        let returnResultArr = response.data.MRData.RaceTable.Races[0].Results;

        // This conditional is purely for trolling purposes (if you follow F1 and a Hamilton fan, this makes a lot more sense)
        
        if (returnResultArr[id].Driver.givenName == "Lewis" && returnResultArr[id].position == 1) {
            returnToResult("h3", "h5", "button", `${returnResultArr[id].Driver.givenName} THE GOAT ${returnResultArr[id].Driver.familyName}`, `${returnResultArr[id].Constructor.name}`, id);
        
        
        } else if (returnResultArr[id].Driver.givenName == "Lewis" && returnResultArr[id].position == 2) {
            returnToResult("h3", "h5", "button", `${returnResultArr[id].Driver.givenName} 'Bono, my tires' ${returnResultArr[id].Driver.familyName}`, `${returnResultArr[id].Constructor.name}`, id);
        

        } else {
            returnToResult("h3", "h5", "button", `${returnResultArr[id].Driver.givenName} ${returnResultArr[id].Driver.familyName}`, `${returnResultArr[id].Constructor.name}`, id);
        }


    } catch(error) {
        console.log(error);
    }
}


function returnToResult(size1, size2, element, name1, team1, event) {
    removeDetail(event);    


// Created 3 separate elements instead of forEach loop to assign and append individually. Re-visit to increase efficiency. 
    
    let returnName = document.createElement(size1);
    let returnTeam = document.createElement(size2);
    let returnButton = document.createElement(element);


    returnName.innerText = name1;
    returnTeam.innerText = team1;
    returnButton.innerText = "Details";


    if (event == 0) {
        firstPlaceResultsHTML.append(returnName);
        firstPlaceResultsHTML.append(returnTeam);
        firstPlaceResultsHTML.append(returnButton);


    } else if (event == 1) {
        secondPlaceResultsHTML.append(returnName);
        secondPlaceResultsHTML.append(returnTeam);
        secondPlaceResultsHTML.append(returnButton);


    } else {
        thirdPlaceResultsHTML.append(returnName);
        thirdPlaceResultsHTML.append(returnTeam);
        thirdPlaceResultsHTML.append(returnButton);
    }


    if (event == 0) {
        returnButton.setAttribute("id", 0);


    } else if (event == 1) {
        returnButton.setAttribute("id", 1);


    } else {
        returnButton.setAttribute("id", 2)
    }
        

    returnButton.addEventListener("click", (e) => {
        displayDetailsAPI(e.target.id);
    });
}


function removeDetail(event) {
    if (event == 0) {
        firstPlaceResultsHTML.innerHTML = "";
        
        
    } else if (event == 1) {
        secondPlaceResultsHTML.innerHTML = "";
        

    } else {
        thirdPlaceResultsHTML.innerHTML = "";
    }
}