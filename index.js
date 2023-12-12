// Code your solution in this file!
const drivers = ['Antonio', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (drivers) => {
    const newDriverArr = drivers.slice(0, 2)
    return newDriverArr
}

const returnLastTwoDrivers = (drivers) =>  {
    const newDriverArr = drivers.slice(-2)
    return newDriverArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return (fare) => fare * multiplier
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)



function selectDifferentDrivers(drivers, driverSelection) {
    if (driverSelection === returnFirstTwoDrivers) {
        return drivers.slice(0, 2);
    } else if (driverSelection === returnLastTwoDrivers) {
        return drivers.slice(-2);
    }
}
