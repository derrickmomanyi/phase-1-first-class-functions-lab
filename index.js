const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);

}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareQuadrupler){
      return function (fare){
      return fare * fareQuadrupler;
      }
    console.log(createFareMultiplier(4))  
}

const fareDoubler = function (createFareMultiplier){
    return createFareMultiplier * 2;
}

const fareTripler = function (createFareMultiplier){
    return createFareMultiplier * 3;
}

const selectDifferentDrivers = function (drivers, selectingDrivers){
    return selectingDrivers(drivers);
}   
