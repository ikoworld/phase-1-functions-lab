// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const HqLocation= 42 ;
   let distance = HqLocation-pickupLocation;
   return  distance >= 0 ? distance :-distance;  
   
}
function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    let distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    let distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
    // Returns the number of feet traveled
    let distanceInfeet = (destination-start)*264;
    return distanceInfeet >0 ? distanceInfeet : -distanceInfeet;
    
}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
   
        let distance = Math.abs((start - destination)) * 264;
      
        if (distance <= 400) {
          return 0;
        } else if (distance > 400 && distance <= 2000) {
          let fare = 0.02 * (distance - 400);
          return fare ;
        } else if (distance > 2000 && distance <= 2500) {
          let fare = 25;
          return fare;
        } else {
          return "cannot travel that far";
        }
      }
  






