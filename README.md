# Project Overview

[Link to deployed site!](https://lukewarmsoup1486.github.io/JWS/ "Link to deployed site")

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
- Add nav bar with driver list
- Add breakpoints for cellphone

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 27-29| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 30| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|August 31| Pseudocode / actual code | Complete
|September 1| Initial Clickable Model / MVP  | Complete
|September 2| Post MVP / Advanced CSS | Complete
|September 3| Presentations | Incomplete

## Priority Matrix

![Priority Matrix](https://i.imgur.com/kQu5W4E.jpg "Priority Matrix")

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML structure | H | 1hr | .5hr | .5hr |
| Basic CSS structure | H | 1hr | 1hr | 1.5hrs |
| JS app logic for API requests | H | 1hr | 1hr | 2.5hrs |
| JS test API endpoints | H | 3hrs| .5hr | 3hrs |
| JS Drop-down menu 1  | H | 3hrs| .5hr | 3.5hrs |
| JS Drop-down menu 2 | H | 6hrs| 1hr | 4.5hrs |
| JS submit button | H | 3hrs | 1.5hrs | 6hrs |
| JS results logic | H | 3hrs | 1hr | 7hrs |
| JS details logic | H | 3hrs | 5hrs | 12hrs |
| CSS style main page  | M | 3hrs | 3hrs | 15hrs |
| CSS style results div | M | 2hrs | 1hr | 16hrs |
| CSS style details div | M | 1hr | 1hr | 17hrs |
| CSS breakpoint styling | H | 3hrs | 2hrs | 19hrs |
| HTML setup for flexbox | H | 1hr | 1hr | 20hrs |
| CSS flexbox styling | H | 3hrs | 7hrs | 27hrs |
| CSS advanced styling | M | 3hrs | 5hr | 32hrs |
| JS Independent button logic | M | 3hr | 5hr | 37hrs |
| HTML Driver page structure | L | 1hrs | .5hrs | 37.5hrs |
| CSS Driver page styling | L | 3hrs | 5hr | 42.5hrs |
| JS Driver page button logic | M | 3hrs | 3hr | 45.5hrs |
| JS Easter egg additions | L | 2hr | 2hr | 47.5hrs |
| Total |  | 40hrs |  | 47.5hrs |


## Code Snippet

## Change Log

#### Post-MVP Removals:
- Removed hamburger bar as it was not needed
- Removed Fastest Lap Comparison because info was not logged until 2004
- Removed Constructor List as Driver Page contains this info
