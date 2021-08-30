# Project Overview

## Project Name

JWS

## Project Description

JWS is an app that allows users to search for Formula 1 race results by year and round.

## API and Data Sample

[Ergast F1 API sample](http://ergast.com/api/f1/2020/5/results "Ergast F1 API")

```
{
    "MRData": {
        "xmlns": "http://ergast.com/mrd/1.4",
        "series": "f1",
        "url": "http://ergast.com/api/f1/2020/5/results.json",
        "limit": "30",
        "offset": "0",
        "total": "20",
        "RaceTable": {
            "season": "2020",
            "round": "5",
            "Races": [
                {
                    "season": "2020",
                    "round": "5",
                    "url": "https://en.wikipedia.org/wiki/70th_Anniversary_Grand_Prix",
                    "raceName": "70th Anniversary Grand Prix",
                    "Circuit": {
                        "circuitId": "silverstone",
                        "url": "http://en.wikipedia.org/wiki/Silverstone_Circuit",
                        "circuitName": "Silverstone Circuit",
                        "Location": {
                            "lat": "52.0786",
                            "long": "-1.01694",
                            "locality": "Silverstone",
                            "country": "UK"
                        }
                    },
                    "date": "2020-08-09",
                    "time": "13:10:00Z",
                    "Results": [
                        {
                            "number": "33",
                            "position": "1",
                            "positionText": "1",
                            "points": "25",
                            "Driver": {
                                "driverId": "max_verstappen",
                                "permanentNumber": "33",
                                "code": "VER",
                                "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                                "givenName": "Max",
                                "familyName": "Verstappen",
                                "dateOfBirth": "1997-09-30",
                                "nationality": "Dutch"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "grid": "4",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4781993",
                                "time": "1:19:41.993"
                            },
                            "FastestLap": {
                                "rank": "2",
                                "lap": "46",
                                "Time": {
                                    "time": "1:29.465"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "237.049"
                                }
                            }
                        },
                                }
                            }
                        },
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
}
```
## Wireframes

![Wireframe for mainpage, results, details, and breakpoint styling](https://i.imgur.com/znXqaWa.jpg "Wireframes for mainpage, results, and details, plus breakpoint styling.")

### MVP/PostMVP

#### MVP 

- Find reliable F1 API that returns results, drivers, times, and circuits
- Render results onto page, determined by user selection of year and circuit 
- Allow users to click on results to receive more details
- Add 1 breakpoint at 600px
- Style using flexbox

#### PostMVP  

- Allow users to click on details to return back to results
- Add nav bar with driver list and constructor teams
- Add breakpoints for cellphone
- Add hamburger nav for cellphone
- Add fastest lap to compare current drivers to past drivers on each circuit

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 27-29| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|August 30| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 31| Pseudocode / actual code | Incomplete
|September 1| Initial Clickable Model / MVP  | Incomplete
|September 2| Post MVP / Advanced CSS | Incomplete
|September 3| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://i.imgur.com/kQu5W4E.jpg "Priority Matrix")

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML structure | H | 1hr |  |  |
| Basic CSS structure | H | 1hr |  |  |
| JS app logic for API requests | H | 1hr |  |  |
| JS test API endpoints | H | 3hrs|  |  |
| JS Drop-down menu 1  | H | 3hrs|  |  |
| JS Drop-down menu 2 | H | 6hrs|  |  |
| JS submit button | H | 3hrs |  |  |
| JS results logic | H | 3hrs |  |  |
| JS details logic | H | 3hrs |  |  |
| CSS style main page  | M | 3hrs |  |  |
| CSS style results div | M | 2hrs |  |  |
| CSS style details div | M | 1hrs |  |  |
| CSS breakpoint styling | H | 3hrs |  |  |
| HTML setup for flexbox | H | 1hr |  |  |
| CSS flexbox styling | H | 3hrs |  |  |
| CSS advanced styling | M | 3hrs |  |  |
| Total | H | 40hrs |  |  |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  