const cars = [
    { make: 'Toyota', model: 'Camry', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2019 },
    { make: 'Ford', model: 'Mustang', year: 2021 },
    { make: 'Chevrolet', model: 'Malibu', year: 2018 },
    { make: 'Nissan', model: 'Altima', year: 2022 },
    { make: 'Hyundai', model: 'Elantra', year: 2020 },
    { make: 'Kia', model: 'Optima', year: 2019 },
    { make: 'Volkswagen', model: 'Jetta', year: 2021 },
    { make: 'Subaru', model: 'Impreza', year: 2018 },
    { make: 'Mazda', model: '3', year: 2022 }

]

//vanill JavaScript function to list cars
function listCars(cars){
    return cars.map(car => {
        return {
            make: car.make,
            model: car.model,
            year: car.year
        };
    });
}


console.table(listCars(cars));


