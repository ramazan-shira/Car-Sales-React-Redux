import { ADD_FEATURE, DELETE_FEATURE } from "../Actions/carActions";

const initialState = {
  cars: [
    {
      id: 0,
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: [],
    },
    {
      id: 1,
      price: 60350,
      name: "2020 Audi Q8",
      image:
        "https://cdn.motor1.com/images/mgl/mrY7q/s1/audi-q8-tfsi-e-quattro-2020.jpg",
      features: [],
    },
    {
      id: 2,
      price: 75895,
      name: "2021 BMW X7",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/2021-bmw-alpina-xb7-133-1594387013.jpg?crop=0.596xw:0.669xh;0.282xw,0.168xh&resize=768:*",
      features: [],
    },
    {
      id: 3,
      price: 56150,
      name: "2022 Mercedes-Benz GLE",
      image:
        "https://s.yimg.com/ny/api/res/1.2/ndGIZSaAgltepvTi8DbErA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzQ-/https://media.zenfs.com/en/newsbytes_319/271e2705bd802196036050c01240cfaf",
      features: [],
    },
  ],
  additionalPrice: 0,
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      state.cars = state.cars.map((car) => {
        if (car.id === Number(action.payload.carId)) {
          car.features.push(action.payload.feature);
          state.additionalPrice += action.payload.feature.price;
        }
        return car;
      });
      return {
        ...state,
      };

    // case DELETE_FEATURE:
    //   console.log(action.payload);

    //   return {
    //     ...state,
    //     cars: state.cars.map((car) => {
    //       if (car.id === Number(action.payload.carId)) {
    //         car.features.filter(
    //           (feature) => feature.id !== Number(action.payload.id)
    //         );
    //       }
    //       return car;
    //     }),
    //   };

    case "DELETE_FEATURE":
      const car = state.cars.find(
        (car) => car.id === Number(action.payload.carId)
      );
      if (!car) return state;

      const feature = car.features.find(
        (feature) => feature.id === Number(action.payload.id)
      );
      if (!feature) return state;

      return {
        ...state,
        cars: state.cars.map((car) => {
          if (car.id === Number(action.payload.carId)) {
            return {
              ...car,
              features: car.features.filter(
                (feature) => feature.id !== Number(action.payload.id)
              ),
            };
          }
          return car;
        }),
        additionalPrice: state.additionalPrice - feature.price,
      };

    default:
      return {
        ...state,
      };
  }
};
