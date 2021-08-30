# Project Overview

## Project Name

JWS

## Project Description

JWS is an app that allows users to search for Formula 1 race results by year and round.

## API and Data Sample

(http://ergast.com/api/f1/{{year}}/{{round}}/results "Ergast F1 API)

```{
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
                        {
                            "number": "44",
                            "position": "2",
                            "positionText": "2",
                            "points": "19",
                            "Driver": {
                                "driverId": "hamilton",
                                "permanentNumber": "44",
                                "code": "HAM",
                                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                                "givenName": "Lewis",
                                "familyName": "Hamilton",
                                "dateOfBirth": "1985-01-07",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "grid": "2",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4793319",
                                "time": "+11.326"
                            },
                            "FastestLap": {
                                "rank": "1",
                                "lap": "43",
                                "Time": {
                                    "time": "1:28.451"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "239.766"
                                }
                            }
                        },
                        {
                            "number": "77",
                            "position": "3",
                            "positionText": "3",
                            "points": "15",
                            "Driver": {
                                "driverId": "bottas",
                                "permanentNumber": "77",
                                "code": "BOT",
                                "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
                                "givenName": "Valtteri",
                                "familyName": "Bottas",
                                "dateOfBirth": "1989-08-28",
                                "nationality": "Finnish"
                            },
                            "Constructor": {
                                "constructorId": "mercedes",
                                "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                                "name": "Mercedes",
                                "nationality": "German"
                            },
                            "grid": "1",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4801224",
                                "time": "+19.231"
                            },
                            "FastestLap": {
                                "rank": "4",
                                "lap": "44",
                                "Time": {
                                    "time": "1:29.765"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "236.256"
                                }
                            }
                        },
                        {
                            "number": "16",
                            "position": "4",
                            "positionText": "4",
                            "points": "12",
                            "Driver": {
                                "driverId": "leclerc",
                                "permanentNumber": "16",
                                "code": "LEC",
                                "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
                                "givenName": "Charles",
                                "familyName": "Leclerc",
                                "dateOfBirth": "1997-10-16",
                                "nationality": "Monegasque"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "grid": "8",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4811282",
                                "time": "+29.289"
                            },
                            "FastestLap": {
                                "rank": "8",
                                "lap": "39",
                                "Time": {
                                    "time": "1:30.552"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "234.203"
                                }
                            }
                        },
                        {
                            "number": "23",
                            "position": "5",
                            "positionText": "5",
                            "points": "10",
                            "Driver": {
                                "driverId": "albon",
                                "permanentNumber": "23",
                                "code": "ALB",
                                "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
                                "givenName": "Alexander",
                                "familyName": "Albon",
                                "dateOfBirth": "1996-03-23",
                                "nationality": "Thai"
                            },
                            "Constructor": {
                                "constructorId": "red_bull",
                                "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                                "name": "Red Bull",
                                "nationality": "Austrian"
                            },
                            "grid": "9",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4821139",
                                "time": "+39.146"
                            },
                            "FastestLap": {
                                "rank": "3",
                                "lap": "46",
                                "Time": {
                                    "time": "1:29.477"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "237.017"
                                }
                            }
                        },
                        {
                            "number": "18",
                            "position": "6",
                            "positionText": "6",
                            "points": "8",
                            "Driver": {
                                "driverId": "stroll",
                                "permanentNumber": "18",
                                "code": "STR",
                                "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
                                "givenName": "Lance",
                                "familyName": "Stroll",
                                "dateOfBirth": "1998-10-29",
                                "nationality": "Canadian"
                            },
                            "Constructor": {
                                "constructorId": "racing_point",
                                "url": "http://en.wikipedia.org/wiki/Racing_Point_F1_Team",
                                "name": "Racing Point",
                                "nationality": "British"
                            },
                            "grid": "6",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4824531",
                                "time": "+42.538"
                            },
                            "FastestLap": {
                                "rank": "15",
                                "lap": "45",
                                "Time": {
                                    "time": "1:30.877"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "233.365"
                                }
                            }
                        },
                        {
                            "number": "27",
                            "position": "7",
                            "positionText": "7",
                            "points": "6",
                            "Driver": {
                                "driverId": "hulkenberg",
                                "permanentNumber": "27",
                                "code": "HUL",
                                "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
                                "givenName": "Nico",
                                "familyName": "Hülkenberg",
                                "dateOfBirth": "1987-08-19",
                                "nationality": "German"
                            },
                            "Constructor": {
                                "constructorId": "racing_point",
                                "url": "http://en.wikipedia.org/wiki/Racing_Point_F1_Team",
                                "name": "Racing Point",
                                "nationality": "British"
                            },
                            "grid": "3",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4837944",
                                "time": "+55.951"
                            },
                            "FastestLap": {
                                "rank": "6",
                                "lap": "52",
                                "Time": {
                                    "time": "1:30.087"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "235.412"
                                }
                            }
                        },
                        {
                            "number": "31",
                            "position": "8",
                            "positionText": "8",
                            "points": "4",
                            "Driver": {
                                "driverId": "ocon",
                                "permanentNumber": "31",
                                "code": "OCO",
                                "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
                                "givenName": "Esteban",
                                "familyName": "Ocon",
                                "dateOfBirth": "1996-09-17",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "renault",
                                "url": "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                                "name": "Renault",
                                "nationality": "French"
                            },
                            "grid": "14",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4846766",
                                "time": "+1:04.773"
                            },
                            "FastestLap": {
                                "rank": "10",
                                "lap": "50",
                                "Time": {
                                    "time": "1:30.575"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "234.144"
                                }
                            }
                        },
                        {
                            "number": "4",
                            "position": "9",
                            "positionText": "9",
                            "points": "2",
                            "Driver": {
                                "driverId": "norris",
                                "permanentNumber": "4",
                                "code": "NOR",
                                "url": "http://en.wikipedia.org/wiki/Lando_Norris",
                                "givenName": "Lando",
                                "familyName": "Norris",
                                "dateOfBirth": "1999-11-13",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "http://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "grid": "10",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4847537",
                                "time": "+1:05.544"
                            },
                            "FastestLap": {
                                "rank": "11",
                                "lap": "49",
                                "Time": {
                                    "time": "1:30.698"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "233.826"
                                }
                            }
                        },
                        {
                            "number": "26",
                            "position": "10",
                            "positionText": "10",
                            "points": "1",
                            "Driver": {
                                "driverId": "kvyat",
                                "permanentNumber": "26",
                                "code": "KVY",
                                "url": "http://en.wikipedia.org/wiki/Daniil_Kvyat",
                                "givenName": "Daniil",
                                "familyName": "Kvyat",
                                "dateOfBirth": "1994-04-26",
                                "nationality": "Russian"
                            },
                            "Constructor": {
                                "constructorId": "alphatauri",
                                "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                                "name": "AlphaTauri",
                                "nationality": "Italian"
                            },
                            "grid": "16",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4851662",
                                "time": "+1:09.669"
                            },
                            "FastestLap": {
                                "rank": "12",
                                "lap": "52",
                                "Time": {
                                    "time": "1:30.738"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "233.723"
                                }
                            }
                        },
                        {
                            "number": "10",
                            "position": "11",
                            "positionText": "11",
                            "points": "0",
                            "Driver": {
                                "driverId": "gasly",
                                "permanentNumber": "10",
                                "code": "GAS",
                                "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
                                "givenName": "Pierre",
                                "familyName": "Gasly",
                                "dateOfBirth": "1996-02-07",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "alphatauri",
                                "url": "http://en.wikipedia.org/wiki/Scuderia_AlphaTauri",
                                "name": "AlphaTauri",
                                "nationality": "Italian"
                            },
                            "grid": "7",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4852635",
                                "time": "+1:10.642"
                            },
                            "FastestLap": {
                                "rank": "7",
                                "lap": "52",
                                "Time": {
                                    "time": "1:30.092"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "235.399"
                                }
                            }
                        },
                        {
                            "number": "5",
                            "position": "12",
                            "positionText": "12",
                            "points": "0",
                            "Driver": {
                                "driverId": "vettel",
                                "permanentNumber": "5",
                                "code": "VET",
                                "url": "http://en.wikipedia.org/wiki/Sebastian_Vettel",
                                "givenName": "Sebastian",
                                "familyName": "Vettel",
                                "dateOfBirth": "1987-07-03",
                                "nationality": "German"
                            },
                            "Constructor": {
                                "constructorId": "ferrari",
                                "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
                                "name": "Ferrari",
                                "nationality": "Italian"
                            },
                            "grid": "11",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4855363",
                                "time": "+1:13.370"
                            },
                            "FastestLap": {
                                "rank": "13",
                                "lap": "49",
                                "Time": {
                                    "time": "1:30.785"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "233.602"
                                }
                            }
                        },
                        {
                            "number": "55",
                            "position": "13",
                            "positionText": "13",
                            "points": "0",
                            "Driver": {
                                "driverId": "sainz",
                                "permanentNumber": "55",
                                "code": "SAI",
                                "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
                                "givenName": "Carlos",
                                "familyName": "Sainz",
                                "dateOfBirth": "1994-09-01",
                                "nationality": "Spanish"
                            },
                            "Constructor": {
                                "constructorId": "mclaren",
                                "url": "http://en.wikipedia.org/wiki/McLaren",
                                "name": "McLaren",
                                "nationality": "British"
                            },
                            "grid": "12",
                            "laps": "52",
                            "status": "Finished",
                            "Time": {
                                "millis": "4856063",
                                "time": "+1:14.070"
                            },
                            "FastestLap": {
                                "rank": "9",
                                "lap": "49",
                                "Time": {
                                    "time": "1:30.556"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "234.193"
                                }
                            }
                        },
                        {
                            "number": "3",
                            "position": "14",
                            "positionText": "14",
                            "points": "0",
                            "Driver": {
                                "driverId": "ricciardo",
                                "permanentNumber": "3",
                                "code": "RIC",
                                "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
                                "givenName": "Daniel",
                                "familyName": "Ricciardo",
                                "dateOfBirth": "1989-07-01",
                                "nationality": "Australian"
                            },
                            "Constructor": {
                                "constructorId": "renault",
                                "url": "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                                "name": "Renault",
                                "nationality": "French"
                            },
                            "grid": "5",
                            "laps": "51",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "16",
                                "lap": "39",
                                "Time": {
                                    "time": "1:31.168"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "232.621"
                                }
                            }
                        },
                        {
                            "number": "7",
                            "position": "15",
                            "positionText": "15",
                            "points": "0",
                            "Driver": {
                                "driverId": "raikkonen",
                                "permanentNumber": "7",
                                "code": "RAI",
                                "url": "http://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen",
                                "givenName": "Kimi",
                                "familyName": "Räikkönen",
                                "dateOfBirth": "1979-10-17",
                                "nationality": "Finnish"
                            },
                            "Constructor": {
                                "constructorId": "alfa",
                                "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                                "name": "Alfa Romeo",
                                "nationality": "Swiss"
                            },
                            "grid": "20",
                            "laps": "51",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "18",
                                "lap": "30",
                                "Time": {
                                    "time": "1:31.756"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "231.130"
                                }
                            }
                        },
                        {
                            "number": "8",
                            "position": "16",
                            "positionText": "16",
                            "points": "0",
                            "Driver": {
                                "driverId": "grosjean",
                                "permanentNumber": "8",
                                "code": "GRO",
                                "url": "http://en.wikipedia.org/wiki/Romain_Grosjean",
                                "givenName": "Romain",
                                "familyName": "Grosjean",
                                "dateOfBirth": "1986-04-17",
                                "nationality": "French"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "grid": "13",
                            "laps": "51",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "14",
                                "lap": "51",
                                "Time": {
                                    "time": "1:30.793"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "233.581"
                                }
                            }
                        },
                        {
                            "number": "99",
                            "position": "17",
                            "positionText": "17",
                            "points": "0",
                            "Driver": {
                                "driverId": "giovinazzi",
                                "permanentNumber": "99",
                                "code": "GIO",
                                "url": "http://en.wikipedia.org/wiki/Antonio_Giovinazzi",
                                "givenName": "Antonio",
                                "familyName": "Giovinazzi",
                                "dateOfBirth": "1993-12-14",
                                "nationality": "Italian"
                            },
                            "Constructor": {
                                "constructorId": "alfa",
                                "url": "http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One",
                                "name": "Alfa Romeo",
                                "nationality": "Swiss"
                            },
                            "grid": "19",
                            "laps": "51",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "19",
                                "lap": "37",
                                "Time": {
                                    "time": "1:31.826"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "230.954"
                                }
                            }
                        },
                        {
                            "number": "63",
                            "position": "18",
                            "positionText": "18",
                            "points": "0",
                            "Driver": {
                                "driverId": "russell",
                                "permanentNumber": "63",
                                "code": "RUS",
                                "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
                                "givenName": "George",
                                "familyName": "Russell",
                                "dateOfBirth": "1998-02-15",
                                "nationality": "British"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "15",
                            "laps": "51",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "17",
                                "lap": "50",
                                "Time": {
                                    "time": "1:31.408"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "232.010"
                                }
                            }
                        },
                        {
                            "number": "6",
                            "position": "19",
                            "positionText": "19",
                            "points": "0",
                            "Driver": {
                                "driverId": "latifi",
                                "permanentNumber": "6",
                                "code": "LAT",
                                "url": "http://en.wikipedia.org/wiki/Nicholas_Latifi",
                                "givenName": "Nicholas",
                                "familyName": "Latifi",
                                "dateOfBirth": "1995-06-29",
                                "nationality": "Canadian"
                            },
                            "Constructor": {
                                "constructorId": "williams",
                                "url": "http://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering",
                                "name": "Williams",
                                "nationality": "British"
                            },
                            "grid": "18",
                            "laps": "51",
                            "status": "+1 Lap",
                            "FastestLap": {
                                "rank": "5",
                                "lap": "48",
                                "Time": {
                                    "time": "1:29.950"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "235.770"
                                }
                            }
                        },
                        {
                            "number": "20",
                            "position": "20",
                            "positionText": "R",
                            "points": "0",
                            "Driver": {
                                "driverId": "kevin_magnussen",
                                "permanentNumber": "20",
                                "code": "MAG",
                                "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
                                "givenName": "Kevin",
                                "familyName": "Magnussen",
                                "dateOfBirth": "1992-10-05",
                                "nationality": "Danish"
                            },
                            "Constructor": {
                                "constructorId": "haas",
                                "url": "http://en.wikipedia.org/wiki/Haas_F1_Team",
                                "name": "Haas F1 Team",
                                "nationality": "American"
                            },
                            "grid": "17",
                            "laps": "43",
                            "status": "Retired",
                            "FastestLap": {
                                "rank": "20",
                                "lap": "39",
                                "Time": {
                                    "time": "1:31.830"
                                },
                                "AverageSpeed": {
                                    "units": "kph",
                                    "speed": "230.944"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    }
}

## Wireframes

[Imgur](https://i.imgur.com/znXqaWa.jpg "Wireframes for mainpage, results, and details, plus breakpoint styling.")

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

[Imgur](https://i.imgur.com/kQu5W4E.jpg "Priority Matrix")

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

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