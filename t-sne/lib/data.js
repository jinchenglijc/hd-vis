const raw = [
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 360,
    "power": 175,
    "weight": 3821,
    "mph": 11,
    "year": 73
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 390,
    "power": 190,
    "weight": 3850,
    "mph": 8.5,
    "year": 70
  },
  {
    "economy": 17,
    "cylinders": 8,
    "displacement": 304,
    "power": 150,
    "weight": 3672,
    "mph": 11.5,
    "year": 72
  },
  {
    "economy": 20.2,
    "cylinders": 6,
    "displacement": 232,
    "power": 90,
    "weight": 3265,
    "mph": 18.2,
    "year": 79
  },
  {
    "economy": 18.1,
    "cylinders": 6,
    "displacement": 258,
    "power": 120,
    "weight": 3410,
    "mph": 15.1,
    "year": 78
  },
  {
    "economy": 19.4,
    "cylinders": 6,
    "displacement": 232,
    "power": 90,
    "weight": 3210,
    "mph": 17.2,
    "year": 78
  },
  {
    "economy": 24.3,
    "cylinders": 4,
    "displacement": 151,
    "power": 90,
    "weight": 3003,
    "mph": 20.1,
    "year": 80
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 232,
    "power": 100,
    "weight": 2789,
    "mph": 15,
    "year": 73
  },
  {
    "economy": 19,
    "cylinders": 6,
    "displacement": 232,
    "power": 100,
    "weight": 2634,
    "mph": 13,
    "year": 71
  },
  {
    "economy": 20,
    "cylinders": 6,
    "displacement": 232,
    "power": 100,
    "weight": 2914,
    "mph": 16,
    "year": 75
  },
  {
    "economy": 21,
    "cylinders": 6,
    "displacement": 199,
    "power": 90,
    "weight": 2648,
    "mph": 15,
    "year": 70
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 258,
    "power": 110,
    "weight": 2962,
    "mph": 13.5,
    "year": 71
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 199,
    "power": 97,
    "weight": 2774,
    "mph": 15.5,
    "year": 70
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 232,
    "power": 100,
    "weight": 2945,
    "mph": 16,
    "year": 73
  },
  {
    "economy": 19,
    "cylinders": 6,
    "displacement": 232,
    "power": 100,
    "weight": 2901,
    "mph": 16,
    "year": 74
  },
  {
    "economy": 22.5,
    "cylinders": 6,
    "displacement": 232,
    "power": 90,
    "weight": 3085,
    "mph": 17.6,
    "year": 76
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 304,
    "power": 150,
    "weight": 4257,
    "mph": 15.5,
    "year": 74
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 304,
    "power": 150,
    "weight": 3892,
    "mph": 12.5,
    "year": 72
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 304,
    "power": 150,
    "weight": 3672,
    "mph": 11.5,
    "year": 73
  },
  {
    "economy": 15,
    "cylinders": 6,
    "displacement": 258,
    "power": 110,
    "weight": 3730,
    "mph": 19,
    "year": 75
  },
  {
    "economy": 15.5,
    "cylinders": 8,
    "displacement": 304,
    "power": 120,
    "weight": 3962,
    "mph": 13.9,
    "year": 76
  },
  {
    "economy": 16,
    "cylinders": 6,
    "displacement": 258,
    "power": 110,
    "weight": 3632,
    "mph": 18,
    "year": 74
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 232,
    "power": 100,
    "weight": 3288,
    "mph": 15.5,
    "year": 71
  },
  {
    "economy": 17.5,
    "cylinders": 6,
    "displacement": 258,
    "power": 95,
    "weight": 3193,
    "mph": 17.8,
    "year": 76
  },
  {
    "economy": 19,
    "cylinders": 6,
    "displacement": 232,
    "power": 90,
    "weight": 3211,
    "mph": 17,
    "year": 75
  },
  {
    "economy": 16,
    "cylinders": 8,
    "displacement": 304,
    "power": 150,
    "weight": 3433,
    "mph": 12,
    "year": 70
  },
  {
    "economy": 27.4,
    "cylinders": 4,
    "displacement": 121,
    "power": 80,
    "weight": 2670,
    "mph": 15,
    "year": 79
  },
  {
    "economy": 20,
    "cylinders": 4,
    "displacement": 114,
    "power": 91,
    "weight": 2582,
    "mph": 14,
    "year": 73
  },
  {
    "economy": 23,
    "cylinders": 4,
    "displacement": 115,
    "power": 95,
    "weight": 2694,
    "mph": 15,
    "year": 75
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 107,
    "power": 90,
    "weight": 2430,
    "mph": 14.5,
    "year": 70
  },
  {
    "economy": 34.3,
    "cylinders": 4,
    "displacement": 97,
    "power": 78,
    "weight": 2188,
    "mph": 15.8,
    "year": 80
  },
  {
    "economy": 20.3,
    "cylinders": 5,
    "displacement": 131,
    "power": 103,
    "weight": 2830,
    "mph": 15.9,
    "year": 78
  },
  {
    "economy": 36.4,
    "cylinders": 5,
    "displacement": 121,
    "power": 67,
    "weight": 2950,
    "mph": 19.9,
    "year": 80
  },
  {
    "economy": 29,
    "cylinders": 4,
    "displacement": 98,
    "power": 83,
    "weight": 2219,
    "mph": 16.5,
    "year": 74
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 121,
    "power": 113,
    "weight": 2234,
    "mph": 12.5,
    "year": 70
  },
  {
    "economy": 21.5,
    "cylinders": 4,
    "displacement": 121,
    "power": 110,
    "weight": 2600,
    "mph": 12.8,
    "year": 77
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 350,
    "power": 175,
    "weight": 4100,
    "mph": 13,
    "year": 73
  },
  {
    "economy": 25,
    "cylinders": 6,
    "displacement": 181,
    "power": 110,
    "weight": 2945,
    "mph": 16.4,
    "year": 82
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 350,
    "power": 150,
    "weight": 4699,
    "mph": 14.5,
    "year": 74
  },
  {
    "economy": 20.6,
    "cylinders": 6,
    "displacement": 231,
    "power": 105,
    "weight": 3380,
    "mph": 15.8,
    "year": 78
  },
  {
    "economy": 17,
    "cylinders": 6,
    "displacement": 231,
    "power": 110,
    "weight": 3907,
    "mph": 21,
    "year": 75
  },
  {
    "economy": 22.4,
    "cylinders": 6,
    "displacement": 231,
    "power": 110,
    "weight": 3415,
    "mph": 15.8,
    "year": 81
  },
  {
    "economy": 12,
    "cylinders": 8,
    "displacement": 455,
    "power": 225,
    "weight": 4951,
    "mph": 11,
    "year": 73
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 455,
    "power": 225,
    "weight": 3086,
    "mph": 10,
    "year": 70
  },
  {
    "economy": 16.9,
    "cylinders": 8,
    "displacement": 350,
    "power": 155,
    "weight": 4360,
    "mph": 14.9,
    "year": 79
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 350,
    "power": 155,
    "weight": 4502,
    "mph": 13.5,
    "year": 72
  },
  {
    "economy": 30,
    "cylinders": 4,
    "displacement": 111,
    "power": 80,
    "weight": 2155,
    "mph": 14.8,
    "year": 77
  },
  {
    "economy": 17.7,
    "cylinders": 6,
    "displacement": 231,
    "power": 165,
    "weight": 3445,
    "mph": 13.4,
    "year": 78
  },
  {
    "economy": 21,
    "cylinders": 6,
    "displacement": 231,
    "power": 110,
    "weight": 3039,
    "mph": 15,
    "year": 75
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 350,
    "power": 165,
    "weight": 3693,
    "mph": 11.5,
    "year": 70
  },
  {
    "economy": 28.4,
    "cylinders": 4,
    "displacement": 151,
    "power": 90,
    "weight": 2670,
    "mph": 16,
    "year": 79
  },
  {
    "economy": 20.5,
    "cylinders": 6,
    "displacement": 231,
    "power": 105,
    "weight": 3425,
    "mph": 16.9,
    "year": 77
  },
  {
    "economy": 26.6,
    "cylinders": 4,
    "displacement": 151,
    "power": 84,
    "weight": 2635,
    "mph": 16.4,
    "year": 81
  },
  {
    "economy": 23,
    "cylinders": 8,
    "displacement": 350,
    "power": 125,
    "weight": 3900,
    "mph": 17.4,
    "year": 79
  },
  {
    "economy": 16.5,
    "cylinders": 8,
    "displacement": 350,
    "power": 180,
    "weight": 4380,
    "mph": 12.1,
    "year": 76
  },
  {
    "economy": 16,
    "cylinders": 6,
    "displacement": 250,
    "power": 105,
    "weight": 3897,
    "mph": 18.5,
    "year": 75
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 350,
    "power": 145,
    "weight": 4440,
    "mph": 14,
    "year": 75
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 151,
    "power": 90,
    "weight": 2950,
    "mph": 17.3,
    "year": 82
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 400,
    "power": 150,
    "weight": 4464,
    "mph": 12,
    "year": 73
  },
  {
    "economy": 17,
    "cylinders": 8,
    "displacement": 305,
    "power": 130,
    "weight": 3840,
    "mph": 15.4,
    "year": 79
  },
  {
    "economy": 17.5,
    "cylinders": 8,
    "displacement": 305,
    "power": 145,
    "weight": 3880,
    "mph": 12.5,
    "year": 77
  },
  {
    "economy": 34,
    "cylinders": 4,
    "displacement": 112,
    "power": 88,
    "weight": 2395,
    "mph": 18,
    "year": 82
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 112,
    "power": 88,
    "weight": 2640,
    "mph": 18.6,
    "year": 82
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 112,
    "power": 88,
    "weight": 2605,
    "mph": 19.6,
    "year": 82
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 307,
    "power": 130,
    "weight": 4098,
    "mph": 14,
    "year": 72
  },
  {
    "economy": 16,
    "cylinders": 6,
    "displacement": 250,
    "power": 100,
    "weight": 3781,
    "mph": 17,
    "year": 74
  },
  {
    "economy": 17.5,
    "cylinders": 8,
    "displacement": 305,
    "power": 140,
    "weight": 4215,
    "mph": 13,
    "year": 76
  },
  {
    "economy": 17,
    "cylinders": 6,
    "displacement": 250,
    "power": 100,
    "weight": 3329,
    "mph": 15.5,
    "year": 71
  },
  {
    "economy": 18,
    "cylinders": 8,
    "displacement": 307,
    "power": 130,
    "weight": 3504,
    "mph": 12,
    "year": 70
  },
  {
    "economy": 29,
    "cylinders": 4,
    "displacement": 85,
    "power": 52,
    "weight": 2035,
    "mph": 22.2,
    "year": 76
  },
  {
    "economy": 30,
    "cylinders": 4,
    "displacement": 98,
    "power": 68,
    "weight": 2155,
    "mph": 16.5,
    "year": 78
  },
  {
    "economy": 30.5,
    "cylinders": 4,
    "displacement": 98,
    "power": 63,
    "weight": 2051,
    "mph": 17,
    "year": 77
  },
  {
    "economy": 32.1,
    "cylinders": 4,
    "displacement": 98,
    "power": 70,
    "weight": 2120,
    "mph": 15.5,
    "year": 80
  },
  {
    "economy": 23.5,
    "cylinders": 6,
    "displacement": 173,
    "power": 110,
    "weight": 2725,
    "mph": 12.6,
    "year": 81
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 151,
    "power": 90,
    "weight": 2678,
    "mph": 16.5,
    "year": 80
  },
  {
    "economy": 28.8,
    "cylinders": 6,
    "displacement": 173,
    "power": 115,
    "weight": 2595,
    "mph": 11.3,
    "year": 79
  },
  {
    "economy": 17.5,
    "cylinders": 6,
    "displacement": 250,
    "power": 110,
    "weight": 3520,
    "mph": 16.4,
    "year": 77
  },
  {
    "economy": 11,
    "cylinders": 8,
    "displacement": 400,
    "power": 150,
    "weight": 4997,
    "mph": 14,
    "year": 73
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 350,
    "power": 165,
    "weight": 4274,
    "mph": 12,
    "year": 72
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 350,
    "power": 165,
    "weight": 4209,
    "mph": 12,
    "year": 71
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 454,
    "power": 220,
    "weight": 4354,
    "mph": 9,
    "year": 70
  },
  {
    "economy": 19.2,
    "cylinders": 8,
    "displacement": 267,
    "power": 125,
    "weight": 3605,
    "mph": 15,
    "year": 79
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 350,
    "power": 145,
    "weight": 3988,
    "mph": 13,
    "year": 73
  },
  {
    "economy": 20.5,
    "cylinders": 6,
    "displacement": 200,
    "power": 95,
    "weight": 3155,
    "mph": 18.2,
    "year": 78
  },
  {
    "economy": 15.5,
    "cylinders": 8,
    "displacement": 350,
    "power": 170,
    "weight": 4165,
    "mph": 11.4,
    "year": 77
  },
  {
    "economy": 19.2,
    "cylinders": 8,
    "displacement": 305,
    "power": 145,
    "weight": 3425,
    "mph": 13.2,
    "year": 78
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 350,
    "power": 145,
    "weight": 4082,
    "mph": 13,
    "year": 73
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 400,
    "power": 150,
    "weight": 3761,
    "mph": 9.5,
    "year": 70
  },
  {
    "economy": 20,
    "cylinders": 8,
    "displacement": 262,
    "power": 110,
    "weight": 3221,
    "mph": 13.5,
    "year": 75
  },
  {
    "economy": 16,
    "cylinders": 6,
    "displacement": 250,
    "power": 100,
    "weight": 3278,
    "mph": 18,
    "year": 73
  },
  {
    "economy": 15,
    "cylinders": 6,
    "displacement": 250,
    "power": 100,
    "weight": 3336,
    "mph": 17,
    "year": 74
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 250,
    "power": 105,
    "weight": 3459,
    "mph": 16,
    "year": 75
  },
  {
    "economy": 22,
    "cylinders": 6,
    "displacement": 250,
    "power": 105,
    "weight": 3353,
    "mph": 14.5,
    "year": 76
  },
  {
    "economy": 22,
    "cylinders": 4,
    "displacement": 140,
    "power": 72,
    "weight": 2408,
    "mph": 19,
    "year": 71
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 140,
    "power": 90,
    "weight": 2264,
    "mph": 15.5,
    "year": 71
  },
  {
    "economy": 20,
    "cylinders": 4,
    "displacement": 140,
    "power": 90,
    "weight": 2408,
    "mph": 19.5,
    "year": 72
  },
  {
    "economy": 21,
    "cylinders": 4,
    "displacement": 140,
    "power": 72,
    "weight": 2401,
    "mph": 19.5,
    "year": 73
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 140,
    "power": 75,
    "weight": 2542,
    "mph": 17,
    "year": 74
  },
  {
    "economy": 24.5,
    "cylinders": 4,
    "displacement": 98,
    "power": 60,
    "weight": 2164,
    "mph": 22.1,
    "year": 76
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 350,
    "power": 145,
    "weight": 4055,
    "mph": 12,
    "year": 76
  },
  {
    "economy": 10,
    "cylinders": 8,
    "displacement": 307,
    "power": 200,
    "weight": 4376,
    "mph": 15,
    "year": 70
  },
  {
    "economy": 31,
    "cylinders": 4,
    "displacement": 119,
    "power": 82,
    "weight": 2720,
    "mph": 19.4,
    "year": 82
  },
  {
    "economy": 15.5,
    "cylinders": 8,
    "displacement": 400,
    "power": 190,
    "weight": 4325,
    "mph": 12.2,
    "year": 77
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 156,
    "power": 92,
    "weight": 2585,
    "mph": 14.5,
    "year": 82
  },
  {
    "economy": 17.6,
    "cylinders": 6,
    "displacement": 225,
    "power": 85,
    "weight": 3465,
    "mph": 16.6,
    "year": 81
  },
  {
    "economy": 18.5,
    "cylinders": 8,
    "displacement": 360,
    "power": 150,
    "weight": 3940,
    "mph": 13,
    "year": 79
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 440,
    "power": 215,
    "weight": 4735,
    "mph": 11,
    "year": 73
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 400,
    "power": 190,
    "weight": 4422,
    "mph": 12.5,
    "year": 72
  },
  {
    "economy": 35,
    "cylinders": 4,
    "displacement": 72,
    "power": 69,
    "weight": 1613,
    "mph": 18,
    "year": 71
  },
  {
    "economy": 23.9,
    "cylinders": 4,
    "displacement": 119,
    "power": 97,
    "weight": 2405,
    "mph": 14.9,
    "year": 78
  },
  {
    "economy": 32.9,
    "cylinders": 4,
    "displacement": 119,
    "power": 100,
    "weight": 2615,
    "mph": 14.8,
    "year": 81
  },
  {
    "economy": 31.8,
    "cylinders": 4,
    "displacement": 85,
    "power": 65,
    "weight": 2020,
    "mph": 19.2,
    "year": 79
  },
  {
    "economy": 37,
    "cylinders": 4,
    "displacement": 85,
    "power": 65,
    "weight": 1975,
    "mph": 19.4,
    "year": 81
  },
  {
    "economy": 40.8,
    "cylinders": 4,
    "displacement": 85,
    "power": 65,
    "weight": 2110,
    "mph": 19.2,
    "year": 80
  },
  {
    "economy": 32.7,
    "cylinders": 6,
    "displacement": 168,
    "power": 132,
    "weight": 2910,
    "mph": 11.4,
    "year": 80
  },
  {
    "economy": 38,
    "cylinders": 4,
    "displacement": 91,
    "power": 67,
    "weight": 1995,
    "mph": 16.2,
    "year": 82
  },
  {
    "economy": 37.2,
    "cylinders": 4,
    "displacement": 86,
    "power": 65,
    "weight": 2019,
    "mph": 16.4,
    "year": 80
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 97,
    "power": 92,
    "weight": 2288,
    "mph": 17,
    "year": 72
  },
  {
    "economy": 37,
    "cylinders": 4,
    "displacement": 119,
    "power": 92,
    "weight": 2434,
    "mph": 15,
    "year": 80
  },
  {
    "economy": 27.2,
    "cylinders": 4,
    "displacement": 119,
    "power": 97,
    "weight": 2300,
    "mph": 14.7,
    "year": 78
  },
  {
    "economy": 22,
    "cylinders": 4,
    "displacement": 108,
    "power": 94,
    "weight": 2379,
    "mph": 16.5,
    "year": 73
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 119,
    "power": 97,
    "weight": 2545,
    "mph": 17,
    "year": 75
  },
  {
    "economy": 32,
    "cylinders": 4,
    "displacement": 83,
    "power": 61,
    "weight": 2003,
    "mph": 19,
    "year": 74
  },
  {
    "economy": 24.2,
    "cylinders": 6,
    "displacement": 146,
    "power": 120,
    "weight": 2930,
    "mph": 13.8,
    "year": 81
  },
  {
    "economy": 22,
    "cylinders": 6,
    "displacement": 146,
    "power": 97,
    "weight": 2815,
    "mph": 14.5,
    "year": 77
  },
  {
    "economy": 32,
    "cylinders": 4,
    "displacement": 85,
    "power": 70,
    "weight": 1990,
    "mph": 17,
    "year": 76
  },
  {
    "economy": 39.4,
    "cylinders": 4,
    "displacement": 85,
    "power": 70,
    "weight": 2070,
    "mph": 18.6,
    "year": 78
  },
  {
    "economy": 31,
    "cylinders": 4,
    "displacement": 79,
    "power": 67,
    "weight": 1950,
    "mph": 19,
    "year": 74
  },
  {
    "economy": 33.5,
    "cylinders": 4,
    "displacement": 85,
    "power": 70,
    "weight": 1945,
    "mph": 16.8,
    "year": 77
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 97,
    "power": 88,
    "weight": 2130,
    "mph": 14.5,
    "year": 70
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 97,
    "power": 88,
    "weight": 2130,
    "mph": 14.5,
    "year": 71
  },
  {
    "economy": 29,
    "cylinders": 4,
    "displacement": 135,
    "power": 84,
    "weight": 2525,
    "mph": 16,
    "year": 82
  },
  {
    "economy": 25.8,
    "cylinders": 4,
    "displacement": 156,
    "power": 92,
    "weight": 2620,
    "mph": 14.4,
    "year": 81
  },
  {
    "economy": 20.6,
    "cylinders": 6,
    "displacement": 225,
    "power": 110,
    "weight": 3360,
    "mph": 16.6,
    "year": 79
  },
  {
    "economy": 20,
    "cylinders": 6,
    "displacement": 225,
    "power": 100,
    "weight": 3651,
    "mph": 17.7,
    "year": 76
  },
  {
    "economy": 18.6,
    "cylinders": 6,
    "displacement": 225,
    "power": 110,
    "weight": 3620,
    "mph": 18.7,
    "year": 78
  },
  {
    "economy": 19.1,
    "cylinders": 6,
    "displacement": 225,
    "power": 90,
    "weight": 3381,
    "mph": 18.7,
    "year": 80
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 383,
    "power": 170,
    "weight": 3563,
    "mph": 10,
    "year": 70
  },
  {
    "economy": 36,
    "cylinders": 4,
    "displacement": 135,
    "power": 84,
    "weight": 2370,
    "mph": 13,
    "year": 82
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 98,
    "power": 80,
    "weight": 2164,
    "mph": 15,
    "year": 72
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 97.5,
    "power": 80,
    "weight": 2126,
    "mph": 17,
    "year": 72
  },
  {
    "economy": 35.7,
    "cylinders": 4,
    "displacement": 98,
    "power": 80,
    "weight": 1915,
    "mph": 14.4,
    "year": 79
  },
  {
    "economy": 33.5,
    "cylinders": 4,
    "displacement": 98,
    "power": 83,
    "weight": 2075,
    "mph": 15.9,
    "year": 77
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 98,
    "power": 79,
    "weight": 2255,
    "mph": 17.7,
    "year": 76
  },
  {
    "economy": 27.9,
    "cylinders": 4,
    "displacement": 156,
    "power": 105,
    "weight": 2800,
    "mph": 14.4,
    "year": 80
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 90,
    "power": 75,
    "weight": 2125,
    "mph": 14.5,
    "year": 74
  },
  {
    "economy": 16,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 4190,
    "mph": 13,
    "year": 76
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 4457,
    "mph": 13.5,
    "year": 74
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 3777,
    "mph": 12.5,
    "year": 73
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 3755,
    "mph": 14,
    "year": 76
  },
  {
    "economy": 11,
    "cylinders": 8,
    "displacement": 318,
    "power": 210,
    "weight": 4382,
    "mph": 13.5,
    "year": 70
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 3399,
    "mph": 11,
    "year": 73
  },
  {
    "economy": 19.4,
    "cylinders": 8,
    "displacement": 318,
    "power": 140,
    "weight": 3735,
    "mph": 13.2,
    "year": 78
  },
  {
    "economy": 17.5,
    "cylinders": 8,
    "displacement": 318,
    "power": 140,
    "weight": 4080,
    "mph": 13.7,
    "year": 78
  },
  {
    "economy": 12,
    "cylinders": 8,
    "displacement": 383,
    "power": 180,
    "weight": 4955,
    "mph": 11.5,
    "year": 71
  },
  {
    "economy": 15.5,
    "cylinders": 8,
    "displacement": 318,
    "power": 145,
    "weight": 4140,
    "mph": 13.7,
    "year": 77
  },
  {
    "economy": 30.9,
    "cylinders": 4,
    "displacement": 105,
    "power": 75,
    "weight": 2230,
    "mph": 14.5,
    "year": 78
  },
  {
    "economy": 32,
    "cylinders": 4,
    "displacement": 135,
    "power": 84,
    "weight": 2295,
    "mph": 11.6,
    "year": 82
  },
  {
    "economy": 18.2,
    "cylinders": 8,
    "displacement": 318,
    "power": 135,
    "weight": 3830,
    "mph": 15.2,
    "year": 79
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 98,
    "power": 90,
    "weight": 2265,
    "mph": 15.5,
    "year": 73
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 116,
    "power": 75,
    "weight": 2246,
    "mph": 14,
    "year": 74
  },
  {
    "economy": 30,
    "cylinders": 4,
    "displacement": 88,
    "power": 76,
    "weight": 2065,
    "mph": 14.5,
    "year": 71
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 90,
    "power": 75,
    "weight": 2108,
    "mph": 15.5,
    "year": 74
  },
  {
    "economy": 29,
    "cylinders": 4,
    "displacement": 68,
    "power": 49,
    "weight": 1867,
    "mph": 19.5,
    "year": 73
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 107,
    "power": 86,
    "weight": 2464,
    "mph": 15.5,
    "year": 76
  },
  {
    "economy": 37.3,
    "cylinders": 4,
    "displacement": 91,
    "power": 69,
    "weight": 2130,
    "mph": 14.7,
    "year": 79
  },
  {
    "economy": 31,
    "cylinders": 4,
    "displacement": 79,
    "power": 67,
    "weight": 2000,
    "mph": 16,
    "year": 74
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 140,
    "power": 92,
    "weight": 2572,
    "mph": 14.9,
    "year": 76
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 400,
    "power": 170,
    "weight": 4746,
    "mph": 12,
    "year": 71
  },
  {
    "economy": 15.5,
    "cylinders": 8,
    "displacement": 351,
    "power": 142,
    "weight": 4054,
    "mph": 14.3,
    "year": 79
  },
  {
    "economy": 12,
    "cylinders": 8,
    "displacement": 400,
    "power": 167,
    "weight": 4906,
    "mph": 12.5,
    "year": 73
  },
  {
    "economy": 29.9,
    "cylinders": 4,
    "displacement": 98,
    "power": 65,
    "weight": 2380,
    "mph": 20.7,
    "year": 81
  },
  {
    "economy": 34.4,
    "cylinders": 4,
    "displacement": 98,
    "power": 65,
    "weight": 2045,
    "mph": 16.2,
    "year": 81
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 302,
    "power": 130,
    "weight": 3870,
    "mph": 15,
    "year": 76
  },
  {
    "economy": 10,
    "cylinders": 8,
    "displacement": 360,
    "power": 215,
    "weight": 4615,
    "mph": 14,
    "year": 70
  },
  {
    "economy": 20.2,
    "cylinders": 6,
    "displacement": 200,
    "power": 85,
    "weight": 2965,
    "mph": 15.8,
    "year": 78
  },
  {
    "economy": 25.1,
    "cylinders": 4,
    "displacement": 140,
    "power": 88,
    "weight": 2720,
    "mph": 15.4,
    "year": 78
  },
  {
    "economy": 22.3,
    "cylinders": 4,
    "displacement": 140,
    "power": 88,
    "weight": 2890,
    "mph": 17.3,
    "year": 79
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 140,
    "power": 92,
    "weight": 2865,
    "mph": 16.4,
    "year": 82
  },
  {
    "economy": 26.4,
    "cylinders": 4,
    "displacement": 140,
    "power": 88,
    "weight": 2870,
    "mph": 18.1,
    "year": 80
  },
  {
    "economy": 36.1,
    "cylinders": 4,
    "displacement": 98,
    "power": 66,
    "weight": 1800,
    "mph": 14.4,
    "year": 78
  },
  {
    "economy": 18.1,
    "cylinders": 8,
    "displacement": 302,
    "power": 139,
    "weight": 3205,
    "mph": 11.2,
    "year": 78
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 351,
    "power": 153,
    "weight": 4129,
    "mph": 13,
    "year": 72
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 351,
    "power": 153,
    "weight": 4154,
    "mph": 13.5,
    "year": 71
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 429,
    "power": 198,
    "weight": 4341,
    "mph": 10,
    "year": 70
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 302,
    "power": 140,
    "weight": 4294,
    "mph": 16,
    "year": 72
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 302,
    "power": 140,
    "weight": 4638,
    "mph": 16,
    "year": 74
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 302,
    "power": 137,
    "weight": 4042,
    "mph": 14.5,
    "year": 73
  },
  {
    "economy": 14.5,
    "cylinders": 8,
    "displacement": 351,
    "power": 152,
    "weight": 4215,
    "mph": 12.8,
    "year": 76
  },
  {
    "economy": 16,
    "cylinders": 8,
    "displacement": 302,
    "power": 140,
    "weight": 4141,
    "mph": 14,
    "year": 74
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 250,
    "power": 78,
    "weight": 3574,
    "mph": 21,
    "year": 76
  },
  {
    "economy": 20.2,
    "cylinders": 6,
    "displacement": 200,
    "power": 88,
    "weight": 3060,
    "mph": 17.1,
    "year": 81
  },
  {
    "economy": 22,
    "cylinders": 6,
    "displacement": 232,
    "power": 112,
    "weight": 2835,
    "mph": 14.7,
    "year": 82
  },
  {
    "economy": 18.5,
    "cylinders": 6,
    "displacement": 250,
    "power": 98,
    "weight": 3525,
    "mph": 19,
    "year": 77
  },
  {
    "economy": 17.6,
    "cylinders": 8,
    "displacement": 302,
    "power": 129,
    "weight": 3725,
    "mph": 13.4,
    "year": 79
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 351,
    "power": 158,
    "weight": 4363,
    "mph": 13,
    "year": 73
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 351,
    "power": 148,
    "weight": 4657,
    "mph": 13.5,
    "year": 75
  },
  {
    "economy": 15,
    "cylinders": 6,
    "displacement": 250,
    "power": 72,
    "weight": 3158,
    "mph": 19.5,
    "year": 75
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 250,
    "power": 88,
    "weight": 3021,
    "mph": 16.5,
    "year": 73
  },
  {
    "economy": 21,
    "cylinders": 6,
    "displacement": 200,
    "power": 85,
    "weight": 2587,
    "mph": 16,
    "year": 70
  },
  {
    "economy": 24,
    "cylinders": 6,
    "displacement": 200,
    "power": 81,
    "weight": 3012,
    "mph": 17.6,
    "year": 76
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 140,
    "power": 86,
    "weight": 2790,
    "mph": 15.6,
    "year": 82
  },
  {
    "economy": 25.5,
    "cylinders": 4,
    "displacement": 140,
    "power": 89,
    "weight": 2755,
    "mph": 15.8,
    "year": 77
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 302,
    "power": 129,
    "weight": 3169,
    "mph": 12,
    "year": 75
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 250,
    "power": 88,
    "weight": 3139,
    "mph": 14.5,
    "year": 71
  },
  {
    "economy": 22,
    "cylinders": 4,
    "displacement": 122,
    "power": 86,
    "weight": 2395,
    "mph": 16,
    "year": 72
  },
  {
    "economy": 21,
    "cylinders": 4,
    "displacement": 122,
    "power": 86,
    "weight": 2226,
    "mph": 16.5,
    "year": 72
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 171,
    "power": 97,
    "weight": 2984,
    "mph": 14.5,
    "year": 75
  },
  {
    "economy": 19,
    "cylinders": 4,
    "displacement": 122,
    "power": 85,
    "weight": 2310,
    "mph": 18.5,
    "year": 73
  },
  {
    "economy": 23,
    "cylinders": 4,
    "displacement": 140,
    "power": 83,
    "weight": 2639,
    "mph": 17,
    "year": 75
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 122,
    "power": 80,
    "weight": 2451,
    "mph": 16.5,
    "year": 74
  },
  {
    "economy": 26.5,
    "cylinders": 4,
    "displacement": 140,
    "power": 72,
    "weight": 2565,
    "mph": 13.6,
    "year": 76
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 120,
    "power": 79,
    "weight": 2625,
    "mph": 18.6,
    "year": 82
  },
  {
    "economy": 16,
    "cylinders": 8,
    "displacement": 351,
    "power": 149,
    "weight": 4335,
    "mph": 14.5,
    "year": 77
  },
  {
    "economy": 19,
    "cylinders": 6,
    "displacement": 250,
    "power": 88,
    "weight": 3302,
    "mph": 15.5,
    "year": 71
  },
  {
    "economy": 17,
    "cylinders": 8,
    "displacement": 302,
    "power": 140,
    "weight": 3449,
    "mph": 10.5,
    "year": 70
  },
  {
    "economy": 9,
    "cylinders": 8,
    "displacement": 304,
    "power": 193,
    "weight": 4732,
    "mph": 18.5,
    "year": 70
  },
  {
    "economy": 31.5,
    "cylinders": 4,
    "displacement": 98,
    "power": 68,
    "weight": 2045,
    "mph": 18.5,
    "year": 77
  },
  {
    "economy": 29.5,
    "cylinders": 4,
    "displacement": 98,
    "power": 68,
    "weight": 2135,
    "mph": 16.6,
    "year": 78
  },
  {
    "economy": 32.4,
    "cylinders": 4,
    "displacement": 107,
    "power": 72,
    "weight": 2290,
    "mph": 17,
    "year": 80
  },
  {
    "economy": 36,
    "cylinders": 4,
    "displacement": 107,
    "power": 75,
    "weight": 2205,
    "mph": 14.5,
    "year": 82
  },
  {
    "economy": 32,
    "cylinders": 4,
    "displacement": 91,
    "power": 67,
    "weight": 1965,
    "mph": 15.7,
    "year": 82
  },
  {
    "economy": 35.1,
    "cylinders": 4,
    "displacement": 81,
    "power": 60,
    "weight": 1760,
    "mph": 16.1,
    "year": 81
  },
  {
    "economy": 44.6,
    "cylinders": 4,
    "displacement": 91,
    "power": 67,
    "weight": 1850,
    "mph": 13.8,
    "year": 80
  },
  {
    "economy": 33,
    "cylinders": 4,
    "displacement": 91,
    "power": 53,
    "weight": 1795,
    "mph": 17.5,
    "year": 75
  },
  {
    "economy": 36.1,
    "cylinders": 4,
    "displacement": 91,
    "power": 60,
    "weight": 1800,
    "mph": 16.4,
    "year": 78
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 120,
    "power": 97,
    "weight": 2489,
    "mph": 15,
    "year": 74
  },
  {
    "economy": 33,
    "cylinders": 4,
    "displacement": 91,
    "power": 53,
    "weight": 1795,
    "mph": 17.4,
    "year": 76
  },
  {
    "economy": 38,
    "cylinders": 4,
    "displacement": 91,
    "power": 67,
    "weight": 1965,
    "mph": 15,
    "year": 82
  },
  {
    "economy": 33.7,
    "cylinders": 4,
    "displacement": 107,
    "power": 75,
    "weight": 2210,
    "mph": 14.4,
    "year": 81
  },
  {
    "economy": 34.1,
    "cylinders": 4,
    "displacement": 86,
    "power": 65,
    "weight": 1975,
    "mph": 15.2,
    "year": 79
  },
  {
    "economy": 18,
    "cylinders": 3,
    "displacement": 70,
    "power": 90,
    "weight": 2124,
    "mph": 13.5,
    "year": 73
  },
  {
    "economy": 31.3,
    "cylinders": 4,
    "displacement": 120,
    "power": 75,
    "weight": 2542,
    "mph": 17.5,
    "year": 80
  },
  {
    "economy": 31.6,
    "cylinders": 4,
    "displacement": 120,
    "power": 74,
    "weight": 2635,
    "mph": 18.3,
    "year": 81
  },
  {
    "economy": 34.1,
    "cylinders": 4,
    "displacement": 91,
    "power": 68,
    "weight": 1985,
    "mph": 16,
    "year": 81
  },
  {
    "economy": 37,
    "cylinders": 4,
    "displacement": 91,
    "power": 68,
    "weight": 2025,
    "mph": 18.2,
    "year": 82
  },
  {
    "economy": 31,
    "cylinders": 4,
    "displacement": 91,
    "power": 68,
    "weight": 1970,
    "mph": 17.6,
    "year": 82
  },
  {
    "economy": 32.8,
    "cylinders": 4,
    "displacement": 78,
    "power": 52,
    "weight": 1985,
    "mph": 19.4,
    "year": 78
  },
  {
    "economy": 46.6,
    "cylinders": 4,
    "displacement": 86,
    "power": 65,
    "weight": 2110,
    "mph": 17.9,
    "year": 80
  },
  {
    "economy": 19,
    "cylinders": 3,
    "displacement": 70,
    "power": 97,
    "weight": 2330,
    "mph": 13.5,
    "year": 72
  },
  {
    "economy": 21.5,
    "cylinders": 3,
    "displacement": 80,
    "power": 110,
    "weight": 2720,
    "mph": 13.5,
    "year": 77
  },
  {
    "economy": 23.7,
    "cylinders": 3,
    "displacement": 70,
    "power": 100,
    "weight": 2420,
    "mph": 12.5,
    "year": 80
  },
  {
    "economy": 30,
    "cylinders": 4,
    "displacement": 146,
    "power": 67,
    "weight": 3250,
    "mph": 21.8,
    "year": 80
  },
  {
    "economy": 16.5,
    "cylinders": 6,
    "displacement": 168,
    "power": 120,
    "weight": 3820,
    "mph": 16.7,
    "year": 76
  },
  {
    "economy": 25.4,
    "cylinders": 5,
    "displacement": 183,
    "power": 77,
    "weight": 3530,
    "mph": 20.1,
    "year": 79
  },
  {
    "economy": 23,
    "cylinders": 4,
    "displacement": 122,
    "power": 86,
    "weight": 2220,
    "mph": 14,
    "year": 71
  },
  {
    "economy": 21,
    "cylinders": 6,
    "displacement": 155,
    "power": 107,
    "weight": 2472,
    "mph": 14,
    "year": 73
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 302,
    "power": 130,
    "weight": 4295,
    "mph": 14.9,
    "year": 77
  },
  {
    "economy": 16.5,
    "cylinders": 8,
    "displacement": 351,
    "power": 138,
    "weight": 3955,
    "mph": 13.2,
    "year": 79
  },
  {
    "economy": 36,
    "cylinders": 4,
    "displacement": 98,
    "power": 70,
    "weight": 2125,
    "mph": 17.3,
    "year": 82
  },
  {
    "economy": 12,
    "cylinders": 8,
    "displacement": 429,
    "power": 198,
    "weight": 4952,
    "mph": 11.5,
    "year": 73
  },
  {
    "economy": 11,
    "cylinders": 8,
    "displacement": 429,
    "power": 208,
    "weight": 4633,
    "mph": 11,
    "year": 72
  },
  {
    "economy": 20.2,
    "cylinders": 8,
    "displacement": 302,
    "power": 139,
    "weight": 3570,
    "mph": 12.8,
    "year": 78
  },
  {
    "economy": 15,
    "cylinders": 6,
    "displacement": 250,
    "power": 72,
    "weight": 3432,
    "mph": 21,
    "year": 75
  },
  {
    "economy": 19.8,
    "cylinders": 6,
    "displacement": 200,
    "power": 85,
    "weight": 2990,
    "mph": 18.2,
    "year": 79
  },
  {
    "economy": 20.8,
    "cylinders": 6,
    "displacement": 200,
    "power": 85,
    "weight": 3070,
    "mph": 16.7,
    "year": 78
  },
  {
    "economy": 36,
    "cylinders": 4,
    "displacement": 120,
    "power": 88,
    "weight": 2160,
    "mph": 14.5,
    "year": 82
  },
  {
    "economy": 38,
    "cylinders": 6,
    "displacement": 262,
    "power": 85,
    "weight": 3015,
    "mph": 17,
    "year": 82
  },
  {
    "economy": 26.6,
    "cylinders": 8,
    "displacement": 350,
    "power": 105,
    "weight": 3725,
    "mph": 19,
    "year": 81
  },
  {
    "economy": 19.9,
    "cylinders": 8,
    "displacement": 260,
    "power": 110,
    "weight": 3365,
    "mph": 15.5,
    "year": 78
  },
  {
    "economy": 23.9,
    "cylinders": 8,
    "displacement": 260,
    "power": 90,
    "weight": 3420,
    "mph": 22.2,
    "year": 79
  },
  {
    "economy": 17,
    "cylinders": 8,
    "displacement": 260,
    "power": 110,
    "weight": 4060,
    "mph": 19,
    "year": 77
  },
  {
    "economy": 12,
    "cylinders": 8,
    "displacement": 350,
    "power": 160,
    "weight": 4456,
    "mph": 13.5,
    "year": 72
  },
  {
    "economy": 26.8,
    "cylinders": 6,
    "displacement": 173,
    "power": 115,
    "weight": 2700,
    "mph": 12.9,
    "year": 79
  },
  {
    "economy": 11,
    "cylinders": 8,
    "displacement": 350,
    "power": 180,
    "weight": 3664,
    "mph": 11,
    "year": 73
  },
  {
    "economy": 23.8,
    "cylinders": 4,
    "displacement": 151,
    "power": 85,
    "weight": 2855,
    "mph": 17.6,
    "year": 78
  },
  {
    "economy": 12,
    "cylinders": 8,
    "displacement": 350,
    "power": 180,
    "weight": 4499,
    "mph": 12.5,
    "year": 73
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 116,
    "power": 81,
    "weight": 2220,
    "mph": 16.9,
    "year": 76
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 116,
    "power": 90,
    "weight": 2123,
    "mph": 14,
    "year": 71
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 116,
    "power": 75,
    "weight": 2158,
    "mph": 15.5,
    "year": 73
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 97,
    "power": 78,
    "weight": 2300,
    "mph": 14.5,
    "year": 74
  },
  {
    "economy": 30,
    "cylinders": 4,
    "displacement": 79,
    "power": 70,
    "weight": 2074,
    "mph": 19.5,
    "year": 71
  },
  {
    "economy": 21,
    "cylinders": 4,
    "displacement": 120,
    "power": 87,
    "weight": 2979,
    "mph": 19.5,
    "year": 72
  },
  {
    "economy": 19,
    "cylinders": 4,
    "displacement": 120,
    "power": 88,
    "weight": 3270,
    "mph": 21.9,
    "year": 76
  },
  {
    "economy": 23,
    "cylinders": 4,
    "displacement": 120,
    "power": 88,
    "weight": 2957,
    "mph": 17,
    "year": 75
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 110,
    "power": 87,
    "weight": 2672,
    "mph": 17.5,
    "year": 70
  },
  {
    "economy": 27.2,
    "cylinders": 4,
    "displacement": 141,
    "power": 71,
    "weight": 3190,
    "mph": 24.8,
    "year": 79
  },
  {
    "economy": 28.1,
    "cylinders": 4,
    "displacement": 141,
    "power": 80,
    "weight": 3230,
    "mph": 20.4,
    "year": 81
  },
  {
    "economy": 16.2,
    "cylinders": 6,
    "displacement": 163,
    "power": 133,
    "weight": 3410,
    "mph": 15.8,
    "year": 78
  },
  {
    "economy": 25.5,
    "cylinders": 4,
    "displacement": 122,
    "power": 96,
    "weight": 2300,
    "mph": 15.5,
    "year": 77
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 340,
    "power": 160,
    "weight": 3609,
    "mph": 8,
    "year": 70
  },
  {
    "economy": 39,
    "cylinders": 4,
    "displacement": 86,
    "power": 64,
    "weight": 1875,
    "mph": 16.4,
    "year": 81
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 91,
    "power": 70,
    "weight": 1955,
    "mph": 20.5,
    "year": 71
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 360,
    "power": 170,
    "weight": 4654,
    "mph": 13,
    "year": 73
  },
  {
    "economy": 20,
    "cylinders": 6,
    "displacement": 198,
    "power": 95,
    "weight": 3102,
    "mph": 16.5,
    "year": 74
  },
  {
    "economy": 22,
    "cylinders": 6,
    "displacement": 198,
    "power": 95,
    "weight": 2833,
    "mph": 15.5,
    "year": 70
  },
  {
    "economy": 23,
    "cylinders": 6,
    "displacement": 198,
    "power": 95,
    "weight": 2904,
    "mph": 16,
    "year": 73
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 4237,
    "mph": 14.5,
    "year": 73
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 4096,
    "mph": 13,
    "year": 71
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 440,
    "power": 215,
    "weight": 4312,
    "mph": 8.5,
    "year": 70
  },
  {
    "economy": 15,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 4135,
    "mph": 13.5,
    "year": 72
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 225,
    "power": 95,
    "weight": 3785,
    "mph": 19,
    "year": 75
  },
  {
    "economy": 16,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 4498,
    "mph": 14.5,
    "year": 75
  },
  {
    "economy": 34.7,
    "cylinders": 4,
    "displacement": 105,
    "power": 63,
    "weight": 2215,
    "mph": 14.9,
    "year": 81
  },
  {
    "economy": 38,
    "cylinders": 4,
    "displacement": 105,
    "power": 63,
    "weight": 2125,
    "mph": 14.7,
    "year": 82
  },
  {
    "economy": 34.5,
    "cylinders": 4,
    "displacement": 105,
    "power": 70,
    "weight": 2150,
    "mph": 14.9,
    "year": 79
  },
  {
    "economy": 34.2,
    "cylinders": 4,
    "displacement": 105,
    "power": 70,
    "weight": 2200,
    "mph": 13.2,
    "year": 79
  },
  {
    "economy": 27.2,
    "cylinders": 4,
    "displacement": 135,
    "power": 84,
    "weight": 2490,
    "mph": 15.7,
    "year": 81
  },
  {
    "economy": 30,
    "cylinders": 4,
    "displacement": 135,
    "power": 84,
    "weight": 2385,
    "mph": 12.9,
    "year": 81
  },
  {
    "economy": 23.2,
    "cylinders": 4,
    "displacement": 156,
    "power": 105,
    "weight": 2745,
    "mph": 16.7,
    "year": 78
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 4077,
    "mph": 14,
    "year": 72
  },
  {
    "economy": 16,
    "cylinders": 6,
    "displacement": 225,
    "power": 105,
    "weight": 3439,
    "mph": 15.5,
    "year": 71
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 225,
    "power": 105,
    "weight": 3613,
    "mph": 16.5,
    "year": 74
  },
  {
    "economy": 18,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 3436,
    "mph": 11,
    "year": 70
  },
  {
    "economy": 19,
    "cylinders": 6,
    "displacement": 225,
    "power": 95,
    "weight": 3264,
    "mph": 16,
    "year": 75
  },
  {
    "economy": 18,
    "cylinders": 6,
    "displacement": 225,
    "power": 105,
    "weight": 3121,
    "mph": 16.5,
    "year": 73
  },
  {
    "economy": 22,
    "cylinders": 6,
    "displacement": 225,
    "power": 100,
    "weight": 3233,
    "mph": 15.4,
    "year": 76
  },
  {
    "economy": 19,
    "cylinders": 6,
    "displacement": 225,
    "power": 100,
    "weight": 3630,
    "mph": 17.7,
    "year": 77
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 318,
    "power": 150,
    "weight": 3940,
    "mph": 13.2,
    "year": 76
  },
  {
    "economy": 20.5,
    "cylinders": 6,
    "displacement": 225,
    "power": 100,
    "weight": 3430,
    "mph": 17.2,
    "year": 78
  },
  {
    "economy": 23,
    "cylinders": 4,
    "displacement": 140,
    "power": 78,
    "weight": 2592,
    "mph": 18.5,
    "year": 75
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 400,
    "power": 175,
    "weight": 4464,
    "mph": 11.5,
    "year": 71
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 400,
    "power": 175,
    "weight": 4385,
    "mph": 12,
    "year": 72
  },
  {
    "economy": 14,
    "cylinders": 8,
    "displacement": 455,
    "power": 225,
    "weight": 4425,
    "mph": 10,
    "year": 70
  },
  {
    "economy": 16,
    "cylinders": 8,
    "displacement": 400,
    "power": 170,
    "weight": 4668,
    "mph": 11.5,
    "year": 75
  },
  {
    "economy": 19,
    "cylinders": 6,
    "displacement": 250,
    "power": 100,
    "weight": 3282,
    "mph": 15,
    "year": 71
  },
  {
    "economy": 16,
    "cylinders": 8,
    "displacement": 400,
    "power": 180,
    "weight": 4220,
    "mph": 11.1,
    "year": 77
  },
  {
    "economy": 16,
    "cylinders": 8,
    "displacement": 400,
    "power": 230,
    "weight": 4278,
    "mph": 9.5,
    "year": 73
  },
  {
    "economy": 31,
    "cylinders": 4,
    "displacement": 112,
    "power": 85,
    "weight": 2575,
    "mph": 16.2,
    "year": 82
  },
  {
    "economy": 21.5,
    "cylinders": 6,
    "displacement": 231,
    "power": 115,
    "weight": 3245,
    "mph": 15.4,
    "year": 79
  },
  {
    "economy": 19.2,
    "cylinders": 6,
    "displacement": 231,
    "power": 105,
    "weight": 3535,
    "mph": 19.2,
    "year": 78
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 151,
    "power": 90,
    "weight": 2735,
    "mph": 18,
    "year": 82
  },
  {
    "economy": 33.5,
    "cylinders": 4,
    "displacement": 151,
    "power": 90,
    "weight": 2556,
    "mph": 13.2,
    "year": 79
  },
  {
    "economy": 13,
    "cylinders": 8,
    "displacement": 400,
    "power": 175,
    "weight": 5140,
    "mph": 12,
    "year": 71
  },
  {
    "economy": 24.5,
    "cylinders": 4,
    "displacement": 151,
    "power": 88,
    "weight": 2740,
    "mph": 16,
    "year": 77
  },
  {
    "economy": 18.5,
    "cylinders": 6,
    "displacement": 250,
    "power": 110,
    "weight": 3645,
    "mph": 16.2,
    "year": 76
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 96,
    "power": 69,
    "weight": 2189,
    "mph": 18,
    "year": 72
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 101,
    "power": 83,
    "weight": 2202,
    "mph": 15.3,
    "year": 76
  },
  {
    "economy": 36,
    "cylinders": 4,
    "displacement": 79,
    "power": 58,
    "weight": 1825,
    "mph": 18.6,
    "year": 77
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 104,
    "power": 95,
    "weight": 2375,
    "mph": 17.5,
    "year": 70
  },
  {
    "economy": 21.6,
    "cylinders": 4,
    "displacement": 121,
    "power": 115,
    "weight": 2795,
    "mph": 15.7,
    "year": 78
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 121,
    "power": 110,
    "weight": 2660,
    "mph": 14,
    "year": 73
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 121,
    "power": 115,
    "weight": 2671,
    "mph": 13.5,
    "year": 75
  },
  {
    "economy": 30,
    "cylinders": 4,
    "displacement": 97,
    "power": 67,
    "weight": 1985,
    "mph": 16.4,
    "year": 77
  },
  {
    "economy": 33.8,
    "cylinders": 4,
    "displacement": 97,
    "power": 67,
    "weight": 2145,
    "mph": 18,
    "year": 80
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 108,
    "power": 93,
    "weight": 2391,
    "mph": 15.5,
    "year": 74
  },
  {
    "economy": 32.3,
    "cylinders": 4,
    "displacement": 97,
    "power": 67,
    "weight": 2065,
    "mph": 17.8,
    "year": 81
  },
  {
    "economy": 20,
    "cylinders": 4,
    "displacement": 97,
    "power": 88,
    "weight": 2279,
    "mph": 19,
    "year": 73
  },
  {
    "economy": 21.1,
    "cylinders": 4,
    "displacement": 134,
    "power": 95,
    "weight": 2515,
    "mph": 14.8,
    "year": 78
  },
  {
    "economy": 32,
    "cylinders": 4,
    "displacement": 144,
    "power": 96,
    "weight": 2665,
    "mph": 13.9,
    "year": 82
  },
  {
    "economy": 31,
    "cylinders": 4,
    "displacement": 71,
    "power": 65,
    "weight": 1773,
    "mph": 19,
    "year": 71
  },
  {
    "economy": 32,
    "cylinders": 4,
    "displacement": 71,
    "power": 65,
    "weight": 1836,
    "mph": 21,
    "year": 74
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 97,
    "power": 88,
    "weight": 2100,
    "mph": 16.5,
    "year": 72
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 97,
    "power": 75,
    "weight": 2265,
    "mph": 18.2,
    "year": 77
  },
  {
    "economy": 38.1,
    "cylinders": 4,
    "displacement": 89,
    "power": 60,
    "weight": 1968,
    "mph": 18.8,
    "year": 80
  },
  {
    "economy": 28,
    "cylinders": 4,
    "displacement": 97,
    "power": 75,
    "weight": 2155,
    "mph": 16.4,
    "year": 76
  },
  {
    "economy": 29,
    "cylinders": 4,
    "displacement": 97,
    "power": 75,
    "weight": 2171,
    "mph": 16,
    "year": 75
  },
  {
    "economy": 32.2,
    "cylinders": 4,
    "displacement": 108,
    "power": 75,
    "weight": 2265,
    "mph": 15.2,
    "year": 80
  },
  {
    "economy": 32.4,
    "cylinders": 4,
    "displacement": 108,
    "power": 75,
    "weight": 2350,
    "mph": 16.8,
    "year": 81
  },
  {
    "economy": 34,
    "cylinders": 4,
    "displacement": 108,
    "power": 70,
    "weight": 2245,
    "mph": 16.9,
    "year": 82
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 113,
    "power": 95,
    "weight": 2278,
    "mph": 15.5,
    "year": 72
  },
  {
    "economy": 29.8,
    "cylinders": 4,
    "displacement": 134,
    "power": 90,
    "weight": 2711,
    "mph": 15.5,
    "year": 80
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 113,
    "power": 95,
    "weight": 2372,
    "mph": 15,
    "year": 70
  },
  {
    "economy": 24,
    "cylinders": 4,
    "displacement": 134,
    "power": 96,
    "weight": 2702,
    "mph": 13.5,
    "year": 75
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 113,
    "power": 95,
    "weight": 2228,
    "mph": 14,
    "year": 71
  },
  {
    "economy": 27.5,
    "cylinders": 4,
    "displacement": 134,
    "power": 95,
    "weight": 2560,
    "mph": 14.2,
    "year": 78
  },
  {
    "economy": 31,
    "cylinders": 4,
    "displacement": 76,
    "power": 52,
    "weight": 1649,
    "mph": 16.5,
    "year": 74
  },
  {
    "economy": 25.4,
    "cylinders": 6,
    "displacement": 168,
    "power": 116,
    "weight": 2900,
    "mph": 12.6,
    "year": 81
  },
  {
    "economy": 19,
    "cylinders": 6,
    "displacement": 156,
    "power": 108,
    "weight": 2930,
    "mph": 15.5,
    "year": 76
  },
  {
    "economy": 20,
    "cylinders": 6,
    "displacement": 156,
    "power": 122,
    "weight": 2807,
    "mph": 13.5,
    "year": 73
  },
  {
    "economy": 39.1,
    "cylinders": 4,
    "displacement": 79,
    "power": 58,
    "weight": 1755,
    "mph": 16.9,
    "year": 81
  },
  {
    "economy": 37.7,
    "cylinders": 4,
    "displacement": 89,
    "power": 62,
    "weight": 2050,
    "mph": 17.3,
    "year": 81
  },
  {
    "economy": 23,
    "cylinders": 4,
    "displacement": 120,
    "power": 97,
    "weight": 2506,
    "mph": 14.5,
    "year": 72
  },
  {
    "economy": 35,
    "cylinders": 4,
    "displacement": 122,
    "power": 88,
    "weight": 2500,
    "mph": 15.1,
    "year": 80
  },
  {
    "economy": 29.8,
    "cylinders": 4,
    "displacement": 89,
    "power": 62,
    "weight": 1845,
    "mph": 15.3,
    "year": 80
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 97,
    "power": 46,
    "weight": 1835,
    "mph": 20.5,
    "year": 70
  },
  {
    "economy": 22,
    "cylinders": 4,
    "displacement": 121,
    "power": 76,
    "weight": 2511,
    "mph": 18,
    "year": 72
  },
  {
    "economy": 43.4,
    "cylinders": 4,
    "displacement": 90,
    "power": 48,
    "weight": 2335,
    "mph": 23.7,
    "year": 80
  },
  {
    "economy": 25,
    "cylinders": 4,
    "displacement": 90,
    "power": 71,
    "weight": 2223,
    "mph": 16.5,
    "year": 75
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 79,
    "power": 67,
    "weight": 1963,
    "mph": 15.5,
    "year": 74
  },
  {
    "economy": 30.5,
    "cylinders": 4,
    "displacement": 97,
    "power": 78,
    "weight": 2190,
    "mph": 14.1,
    "year": 77
  },
  {
    "economy": 33,
    "cylinders": 4,
    "displacement": 105,
    "power": 74,
    "weight": 2190,
    "mph": 14.2,
    "year": 81
  },
  {
    "economy": 27,
    "cylinders": 4,
    "displacement": 97,
    "power": 60,
    "weight": 1834,
    "mph": 19,
    "year": 71
  },
  {
    "economy": 44,
    "cylinders": 4,
    "displacement": 97,
    "power": 52,
    "weight": 2130,
    "mph": 24.6,
    "year": 82
  },
  {
    "economy": 44.3,
    "cylinders": 4,
    "displacement": 90,
    "power": 48,
    "weight": 2085,
    "mph": 21.7,
    "year": 80
  },
  {
    "economy": 43.1,
    "cylinders": 4,
    "displacement": 90,
    "power": 48,
    "weight": 1985,
    "mph": 21.5,
    "year": 78
  },
  {
    "economy": 29,
    "cylinders": 4,
    "displacement": 97,
    "power": 78,
    "weight": 1940,
    "mph": 14.5,
    "year": 77
  },
  {
    "economy": 31.9,
    "cylinders": 4,
    "displacement": 89,
    "power": 71,
    "weight": 1925,
    "mph": 14,
    "year": 79
  },
  {
    "economy": 36,
    "cylinders": 4,
    "displacement": 105,
    "power": 74,
    "weight": 1980,
    "mph": 15.3,
    "year": 82
  },
  {
    "economy": 29,
    "cylinders": 4,
    "displacement": 90,
    "power": 70,
    "weight": 1937,
    "mph": 14,
    "year": 75
  },
  {
    "economy": 29,
    "cylinders": 4,
    "displacement": 90,
    "power": 70,
    "weight": 1937,
    "mph": 14.2,
    "year": 76
  },
  {
    "economy": 29.5,
    "cylinders": 4,
    "displacement": 97,
    "power": 71,
    "weight": 1825,
    "mph": 12.2,
    "year": 76
  },
  {
    "economy": 41.5,
    "cylinders": 4,
    "displacement": 98,
    "power": 76,
    "weight": 2144,
    "mph": 14.7,
    "year": 80
  },
  {
    "economy": 31.5,
    "cylinders": 4,
    "displacement": 89,
    "power": 71,
    "weight": 1990,
    "mph": 14.9,
    "year": 78
  },
  {
    "economy": 26,
    "cylinders": 4,
    "displacement": 97,
    "power": 46,
    "weight": 1950,
    "mph": 21,
    "year": 73
  },
  {
    "economy": 23,
    "cylinders": 4,
    "displacement": 97,
    "power": 54,
    "weight": 2254,
    "mph": 23.5,
    "year": 72
  },
  {
    "economy": 19,
    "cylinders": 4,
    "displacement": 121,
    "power": 112,
    "weight": 2868,
    "mph": 15.5,
    "year": 73
  },
  {
    "economy": 18,
    "cylinders": 4,
    "displacement": 121,
    "power": 112,
    "weight": 2933,
    "mph": 14.5,
    "year": 72
  },
  {
    "economy": 22,
    "cylinders": 4,
    "displacement": 121,
    "power": 98,
    "weight": 2945,
    "mph": 14.5,
    "year": 75
  },
  {
    "economy": 20,
    "cylinders": 4,
    "displacement": 130,
    "power": 102,
    "weight": 3150,
    "mph": 15.7,
    "year": 76
  },
  {
    "economy": 17,
    "cylinders": 6,
    "displacement": 163,
    "power": 125,
    "weight": 3140,
    "mph": 13.6,
    "year": 78
  },
  {
    "economy": 30.7,
    "cylinders": 6,
    "displacement": 145,
    "power": 76,
    "weight": 3160,
    "mph": 19.6,
    "year": 81
  }
]

const dims = Object.keys(raw[0])