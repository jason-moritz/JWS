// Set base url
// Get div to place driver info

const baseURL = "http://ergast.com/api/f1/";


// Need axios request to get all driver info starting from 1950

async function driverListAPI(offset) {
    try {
        const response = await axios.get(`${baseURL}drivers.json?limit=100&offset=${offset}`);
        // console.log(response.data);
        // console.log(response.data.MRData.DriverTable.Drivers);

        
        let driverArr = response.data.MRData.DriverTable.Drivers;

        // Need to remove  previos driver list OUTSIDE of the forEach loop. 
        driverListHTML.innerHTML = "";


        driverArr.forEach((driver) => {
            displayDrivers(driver.givenName, driver.familyName, driver.nationality, driver.dateOfBirth, driver.url, "div", "button");
        })


    } catch(error) {
        console.log(error);
    }
}


driverListAPI(0);

// Need to pull driver-list div

const driverListHTML = document.querySelector("#driver-list");

// Need display function that creates new divs for each driver, adds info, and appends to main drivers-list div
// Need an event listener for each button to open new page to the wiki link

function displayDrivers(firstName, lastName, nationality, dob, url, element1, element2) {    
    let driverDiv = document.createElement(element1);
    let nameDiv = document.createElement(element1);
    let nationalityDiv = document.createElement(element1);
    let dobDiv = document.createElement(element1);
    let detailsButton = document.createElement(element2);


    nameDiv.innerText = `${firstName} ${lastName}`;
    nationalityDiv.innerText = nationality;
    dobDiv.innerText = dob;
    detailsButton.innerText = "Details";
    detailsButton.value = url;   
    

    driverDiv.classList.add("driver-info");

    
    driverDiv.append(nameDiv);
    driverDiv.append(nationalityDiv);
    driverDiv.append(dobDiv);
    driverDiv.append(detailsButton);
    driverListHTML.append(driverDiv);


    detailsButton.addEventListener("click", (e) => {
        document.location.href = e.target.value;
    })
}


// Need to pull previos and next buttons for event listener

let previousPageButtonHTML = document.querySelector("#previous-page");
let nextPageButtonHTML = document.querySelector("#next-page");

// Need to add event listener for previous and next buttons

previousPageButtonHTML.addEventListener("click", pagesButton);
nextPageButtonHTML.addEventListener("click", pagesButton);


function pagesButton() {
if (driverListAPI(0)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(100);
    });
    

    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(0);
    });
    

} else if (driverListAPI(100)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(200);
        console.log(e)
    });


    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(0);
    });


} else if (driverListAPI(200)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(300);
    });


    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(100);
    });


} else if (driverListAPI(300)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(400);
    });


    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(200);
    });


} else if (driverListAPI(400)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(500);
    });


    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(300);
    });


} else if (driverListAPI(500)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(600);
    });


    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(400);
    });


} else if (driverListAPI(600)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(700);
    });


    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(500);
    });


} else if (driverListAPI(700)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(800);
    });


    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(600);
    });


} else if (driverListAPI(800)) {
    nextPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(900);
    });


    previousPageButtonHTML.addEventListener("click", (e) => {
        driverListAPI(700);
    });
}
}

