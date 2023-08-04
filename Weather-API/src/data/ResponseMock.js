export const initialResponse = {
  coord: {
    lon: -1.4437,
    lat: 38.9644,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "cielo claro",
      icon: "01d",
    },
  ],
  base: "stations",
  main: {
    temp: 19.96,
    feels_like: 19.47,
    temp_min: 19.96,
    temp_max: 21.12,
    pressure: 1018,
    humidity: 56,
    sea_level: 1018,
    grnd_level: 907,
  },
  visibility: 10000,
  wind: {
    speed: 1.06,
    deg: 223,
    gust: 1.54,
  },
  clouds: {
    all: 0,
  },
  dt: 1690787121,
  sys: {
    type: 1,
    id: 6390,
    country: "ES",
    sunrise: 1690779912,
    sunset: 1690831139,
  },
  timezone: 7200,
  id: 2516713,
  name: "Higueruela",
  cod: 200,
};

//* Cinco horas por día, cinco días consecutivos.
export const fiveDaysResponse = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1690794000,
      main: {
        temp: 22.5,
        feels_like: 22.32,
        temp_min: 22.5,
        temp_max: 27.58,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 908,
        humidity: 58,
        temp_kf: -5.08,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 2.22,
        deg: 260,
        gust: 2.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 09:00:00",
    },
    {
      dt: 1690804800,
      main: {
        temp: 28,
        feels_like: 27.53,
        temp_min: 28,
        temp_max: 32.02,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 908,
        humidity: 38,
        temp_kf: -4.02,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 3.31,
        deg: 253,
        gust: 4.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 12:00:00",
    },
    {
      dt: 1690815600,
      main: {
        temp: 35.18,
        feels_like: 32.75,
        temp_min: 35.18,
        temp_max: 35.18,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 907,
        humidity: 15,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.17,
        deg: 262,
        gust: 7.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 15:00:00",
    },
    {
      dt: 1690826400,
      main: {
        temp: 33.41,
        feels_like: 31.28,
        temp_min: 33.41,
        temp_max: 33.41,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 906,
        humidity: 19,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.74,
        deg: 252,
        gust: 7.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-07-31 18:00:00",
    },
    {
      dt: 1690837200,
      main: {
        temp: 25.69,
        feels_like: 25.62,
        temp_min: 25.69,
        temp_max: 25.69,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 905,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "algo de nubes",
          icon: "02n",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 3.14,
        deg: 198,
        gust: 3.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-07-31 21:00:00",
    },
    {
      dt: 1690848000,
      main: {
        temp: 23.01,
        feels_like: 22.54,
        temp_min: 23.01,
        temp_max: 23.01,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 904,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 3.09,
        deg: 233,
        gust: 3.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-01 00:00:00",
    },
    {
      dt: 1690858800,
      main: {
        temp: 21.56,
        feels_like: 20.16,
        temp_min: 21.56,
        temp_max: 21.56,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 903,
        humidity: 15,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.16,
        deg: 285,
        gust: 3.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-01 03:00:00",
    },
    {
      dt: 1690869600,
      main: {
        temp: 20.68,
        feels_like: 19.4,
        temp_min: 20.68,
        temp_max: 20.68,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 904,
        humidity: 23,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.48,
        deg: 281,
        gust: 6.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-01 06:00:00",
    },
    {
      dt: 1690880400,
      main: {
        temp: 27.27,
        feels_like: 26.23,
        temp_min: 27.27,
        temp_max: 27.27,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 906,
        humidity: 19,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.2,
        deg: 301,
        gust: 8.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-01 09:00:00",
    },
    {
      dt: 1690891200,
      main: {
        temp: 32.2,
        feels_like: 29.95,
        temp_min: 32.2,
        temp_max: 32.2,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 906,
        humidity: 14,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.68,
        deg: 297,
        gust: 5.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-01 12:00:00",
    },
    {
      dt: 1690902000,
      main: {
        temp: 34.21,
        feels_like: 31.66,
        temp_min: 34.21,
        temp_max: 34.21,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 905,
        humidity: 11,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.06,
        deg: 287,
        gust: 6.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-01 15:00:00",
    },
    {
      dt: 1690912800,
      main: {
        temp: 32.61,
        feels_like: 30.28,
        temp_min: 32.61,
        temp_max: 32.61,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 904,
        humidity: 12,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.42,
        deg: 294,
        gust: 6.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-01 18:00:00",
    },
    {
      dt: 1690923600,
      main: {
        temp: 24.2,
        feels_like: 23.43,
        temp_min: 24.2,
        temp_max: 24.2,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 903,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.19,
        deg: 232,
        gust: 2.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-01 21:00:00",
    },
    {
      dt: 1690934400,
      main: {
        temp: 21.92,
        feels_like: 21.63,
        temp_min: 21.92,
        temp_max: 21.92,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 903,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.63,
        deg: 183,
        gust: 2.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-02 00:00:00",
    },
    {
      dt: 1690945200,
      main: {
        temp: 20.11,
        feels_like: 19.61,
        temp_min: 20.11,
        temp_max: 20.11,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 901,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.66,
        deg: 240,
        gust: 1.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-02 03:00:00",
    },
    {
      dt: 1690956000,
      main: {
        temp: 21.13,
        feels_like: 20.11,
        temp_min: 21.13,
        temp_max: 21.13,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 902,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.53,
        deg: 293,
        gust: 1.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-02 06:00:00",
    },
    {
      dt: 1690966800,
      main: {
        temp: 28.19,
        feels_like: 26.9,
        temp_min: 28.19,
        temp_max: 28.19,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 904,
        humidity: 21,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.04,
        deg: 280,
        gust: 5.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-02 09:00:00",
    },
    {
      dt: 1690977600,
      main: {
        temp: 33.57,
        feels_like: 31.25,
        temp_min: 33.57,
        temp_max: 33.57,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 904,
        humidity: 16,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6,
        deg: 276,
        gust: 7.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-02 12:00:00",
    },
    {
      dt: 1690988400,
      main: {
        temp: 35.2,
        feels_like: 32.59,
        temp_min: 35.2,
        temp_max: 35.2,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 902,
        humidity: 12,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 8.05,
        deg: 277,
        gust: 8.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-02 15:00:00",
    },
    {
      dt: 1690999200,
      main: {
        temp: 33.33,
        feels_like: 30.95,
        temp_min: 33.33,
        temp_max: 33.33,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 901,
        humidity: 14,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.55,
        deg: 296,
        gust: 9.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-02 18:00:00",
    },
    {
      dt: 1691010000,
      main: {
        temp: 26.44,
        feels_like: 26.44,
        temp_min: 26.44,
        temp_max: 26.44,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 901,
        humidity: 22,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.96,
        deg: 277,
        gust: 8.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-02 21:00:00",
    },
    {
      dt: 1691020800,
      main: {
        temp: 23.8,
        feels_like: 22.97,
        temp_min: 23.8,
        temp_max: 23.8,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 901,
        humidity: 28,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.64,
        deg: 248,
        gust: 4.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-03 00:00:00",
    },
    {
      dt: 1691031600,
      main: {
        temp: 21.36,
        feels_like: 20.47,
        temp_min: 21.36,
        temp_max: 21.36,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 900,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.1,
        deg: 275,
        gust: 5.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-03 03:00:00",
    },
    {
      dt: 1691042400,
      main: {
        temp: 20.63,
        feels_like: 19.92,
        temp_min: 20.63,
        temp_max: 20.63,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 901,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.81,
        deg: 291,
        gust: 4.61,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-03 06:00:00",
    },
    {
      dt: 1691053200,
      main: {
        temp: 25.87,
        feels_like: 25.56,
        temp_min: 25.87,
        temp_max: 25.87,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 903,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.43,
        deg: 291,
        gust: 4.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-03 09:00:00",
    },
    {
      dt: 1691064000,
      main: {
        temp: 30.82,
        feels_like: 29.17,
        temp_min: 30.82,
        temp_max: 30.82,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 904,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.75,
        deg: 283,
        gust: 6.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-03 12:00:00",
    },
    {
      dt: 1691074800,
      main: {
        temp: 32.68,
        feels_like: 30.77,
        temp_min: 32.68,
        temp_max: 32.68,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 903,
        humidity: 22,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "cielo claro",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 3.6,
        deg: 294,
        gust: 8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-03 15:00:00",
    },
    {
      dt: 1691085600,
      main: {
        temp: 25.52,
        feels_like: 25.41,
        temp_min: 25.52,
        temp_max: 25.52,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 903,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03d",
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 7.81,
        deg: 155,
        gust: 7.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-03 18:00:00",
    },
    {
      dt: 1691096400,
      main: {
        temp: 20.35,
        feels_like: 20.4,
        temp_min: 20.35,
        temp_max: 20.35,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 904,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03n",
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 5.32,
        deg: 136,
        gust: 7.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-03 21:00:00",
    },
    {
      dt: 1691107200,
      main: {
        temp: 19.16,
        feels_like: 19.32,
        temp_min: 19.16,
        temp_max: 19.16,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 904,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03n",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 5.08,
        deg: 99,
        gust: 6.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-04 00:00:00",
    },
    {
      dt: 1691118000,
      main: {
        temp: 19.05,
        feels_like: 19.05,
        temp_min: 19.05,
        temp_max: 19.05,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 904,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "lluvia ligera",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.7,
        deg: 92,
        gust: 6.22,
      },
      visibility: 10000,
      pop: 0.38,
      rain: {
        "3h": 0.24,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-04 03:00:00",
    },
    {
      dt: 1691128800,
      main: {
        temp: 18.19,
        feels_like: 18.13,
        temp_min: 18.19,
        temp_max: 18.19,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 905,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "lluvia ligera",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.53,
        deg: 70,
        gust: 3.48,
      },
      visibility: 10000,
      pop: 0.21,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-04 06:00:00",
    },
    {
      dt: 1691139600,
      main: {
        temp: 18.81,
        feels_like: 18.65,
        temp_min: 18.81,
        temp_max: 18.81,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 907,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.71,
        deg: 55,
        gust: 1.19,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-04 09:00:00",
    },
    {
      dt: 1691150400,
      main: {
        temp: 23.41,
        feels_like: 23.16,
        temp_min: 23.41,
        temp_max: 23.41,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 908,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "nubes",
          icon: "04d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 2.03,
        deg: 262,
        gust: 3.15,
      },
      visibility: 10000,
      pop: 0.07,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-04 12:00:00",
    },
    {
      dt: 1691161200,
      main: {
        temp: 27.25,
        feels_like: 26.66,
        temp_min: 27.25,
        temp_max: 27.25,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 907,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 3.3,
        deg: 279,
        gust: 4.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-04 15:00:00",
    },
    {
      dt: 1691172000,
      main: {
        temp: 27.5,
        feels_like: 26.43,
        temp_min: 27.5,
        temp_max: 27.5,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 907,
        humidity: 21,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 3.89,
        deg: 290,
        gust: 6.39,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-04 18:00:00",
    },
    {
      dt: 1691182800,
      main: {
        temp: 18.12,
        feels_like: 17.71,
        temp_min: 18.12,
        temp_max: 18.12,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 908,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03n",
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 3.01,
        deg: 125,
        gust: 4.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-04 21:00:00",
    },
    {
      dt: 1691193600,
      main: {
        temp: 17,
        feels_like: 16.64,
        temp_min: 17,
        temp_max: 17,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 908,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "muy nuboso",
          icon: "04n",
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 1.43,
        deg: 193,
        gust: 1.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-05 00:00:00",
    },
    {
      dt: 1691204400,
      main: {
        temp: 15.22,
        feels_like: 14.86,
        temp_min: 15.22,
        temp_max: 15.22,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 906,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "muy nuboso",
          icon: "04n",
        },
      ],
      clouds: {
        all: 70,
      },
      wind: {
        speed: 0.88,
        deg: 306,
        gust: 0.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-08-05 03:00:00",
    },
    {
      dt: 1691215200,
      main: {
        temp: 15.74,
        feels_like: 15.28,
        temp_min: 15.74,
        temp_max: 15.74,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 907,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "nubes dispersas",
          icon: "03d",
        },
      ],
      clouds: {
        all: 44,
      },
      wind: {
        speed: 0.85,
        deg: 336,
        gust: 0.94,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-08-05 06:00:00",
    },
  ],
  city: {
    id: 2516713,
    name: "Higueruela",
    coord: {
      lat: 38.9644,
      lon: -1.4437,
    },
    country: "ES",
    population: 1351,
    timezone: 7200,
    sunrise: 1690779912,
    sunset: 1690831139,
  },
};

const newApiFiveDays = fiveDaysResponse.list.filter((element, index) => {
  return [index + 8] % 8 === 0;
});

[
  {
    dt: 1690794000,
    main: {
      temp: 22.5,
      feels_like: 22.32,
      temp_min: 22.5,
      temp_max: 27.58,
      pressure: 1018,
      sea_level: 1018,
      grnd_level: 908,
      humidity: 58,
      temp_kf: -5.08,
    },
    weather: [
      { id: 800, main: "Clear", description: "cielo claro", icon: "01d" },
    ],
    clouds: { all: 3 },
    wind: { speed: 2.22, deg: 260, gust: 2.81 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-07-31 09:00:00",
  },
  {
    dt: 1690880400,
    main: {
      temp: 27.27,
      feels_like: 26.23,
      temp_min: 27.27,
      temp_max: 27.27,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 906,
      humidity: 19,
      temp_kf: 0,
    },
    weather: [
      { id: 800, main: "Clear", description: "cielo claro", icon: "01d" },
    ],
    clouds: { all: 0 },
    wind: { speed: 7.2, deg: 301, gust: 8.3 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-08-01 09:00:00",
  },
  {
    dt: 1690966800,
    main: {
      temp: 28.19,
      feels_like: 26.9,
      temp_min: 28.19,
      temp_max: 28.19,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 904,
      humidity: 21,
      temp_kf: 0,
    },
    weather: [
      { id: 800, main: "Clear", description: "cielo claro", icon: "01d" },
    ],
    clouds: { all: 0 },
    wind: { speed: 4.04, deg: 280, gust: 5.38 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-08-02 09:00:00",
  },
  {
    dt: 1691053200,
    main: {
      temp: 25.87,
      feels_like: 25.56,
      temp_min: 25.87,
      temp_max: 25.87,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 903,
      humidity: 40,
      temp_kf: 0,
    },
    weather: [
      { id: 800, main: "Clear", description: "cielo claro", icon: "01d" },
    ],
    clouds: { all: 0 },
    wind: { speed: 3.43, deg: 291, gust: 4.16 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-08-03 09:00:00",
  },
  {
    dt: 1691139600,
    main: {
      temp: 18.81,
      feels_like: 18.65,
      temp_min: 18.81,
      temp_max: 18.81,
      pressure: 1019,
      sea_level: 1019,
      grnd_level: 907,
      humidity: 73,
      temp_kf: 0,
    },
    weather: [{ id: 804, main: "Clouds", description: "nubes", icon: "04d" }],
    clouds: { all: 100 },
    wind: { speed: 1.71, deg: 55, gust: 1.19 },
    visibility: 10000,
    pop: 0.07,
    sys: { pod: "d" },
    dt_txt: "2023-08-04 09:00:00",
  },
];
