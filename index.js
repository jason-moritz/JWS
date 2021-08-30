// Grab drop-downs and button for API requests
const dropDownYearHTML = document.querySelector("#year-selector");
const dropDownCircuitHTML = document.querySelector("#circuit-selector");
const raceButtonHTML = document.querySelector("#race-button");
const baseURL = "http://ergast.com/api/f1/";



// **********DROP DOWN YEAR SELECT BOX**********

// axios request for drop down year
// Had to change this to simple for loop because there was a query limit of 1000 results, which only pulled up to 2019.
let yearsArr = [];


for (let i = 1950; i <= 2021; i++) {
    yearsArr.push(i);
}
// console.log(yearsArr);


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

// Axios request for drop down circuit depending on year
// Will need to set url "year" to select box value

async function dropDownCircuitAPI() {
    try {
        const response = await axios.get(`${baseURL}${dropDownYearHTML.value}.json`);
        console.log(response.data);
        const racesArr = response.data.MRData.RaceTable.Races;
        // console.log(racesArr)
    
        circuitsArr = [];

        racesArr.forEach((race) => {
            circuitsArr.push(race.raceName);
        })  
        // console.log(circuitsArr);
        
        
        dropDownCircuits(circuitsArr);


    } catch(error) {
        console.log(error);
    }
}

dropDownCircuitAPI();

// Need function to append circuit name to drop down box

function dropDownCircuits(circuits) {
    circuits.forEach((circuit) => {
        const option = document.createElement("option");
        option.value = circuit;
        option.innerText = circuit;
        dropDownCircuitHTML.append(option);
    })
}