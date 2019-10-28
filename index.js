function produceDrivingRange(num){
    return function(street1, street2){
        let distance = Math.abs(parseInt(street1) - parseInt(street2));
        return distance <= num ? `within range by ${num - distance}` : `${distance - num} blocks out of range`
    };
}

function produceTipCalculator(num){
    return function(fare){
        return num * fare;
    };
}

function createDriver(){
    let driverId = 0;
    return class Driver {
        constructor(name) {
          this.name = name;
          this.id = driverId++;
        }
    }
}