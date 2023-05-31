// Application Logic

// Define a function or factory function
function BusWidget() {
    // Define necessary properties
    const destinations = {
      "Khayelitsha": 40,
      "Dunoon": 25,
      "Mitchells Plain": 30,
    };
  
    // Calculate the cost per trip based on points and destination
    function costPerTrip(points, destination) {
      return points; // * destinations[destination];
    }
  
    // Calculate the total number of trips based on points, destination, and time
    function totalTrips(points, destination, time) {
      // Calculate the cost per trip
      const cost = costPerTrip(points, destination);
  
      // Calculate the price based on the time and destination
      const priceBasedOnTime = calculatePriceBasedOnTime(destination, time);
  
      // Calculate the total number of trips needed
      return Math.ceil(cost / priceBasedOnTime);
    }
  
    // Calculate the number of return trips based on points, destination, time, and return option
    function returnTrips(points, destination, time, isReturn) {
      // If return option is not selected, return 0 return trips
      if (!isReturn) {
        return 0;
      }
  
      // Calculate the total number of trips
      const total = totalTrips(points, destination, time);
  
      // Calculate the number of return trips (half of total trips)
      return Math.ceil(total / 2);
    }
  
    // Calculate the cost for return trips based on points, destination, time, and return option
    function costPerReturnTrip(points, destination, time, isReturn) {
      // Calculate the number of return trips
      const returnTripsCount = returnTrips(points, destination, time, isReturn);
  
      // Calculate the price based on the time and destination
      const priceBasedOnTime = calculatePriceBasedOnTime(destination, time);
  
      // Calculate the cost for return trips
      return returnTripsCount * priceBasedOnTime * 2;
    }
  
    // Calculate the price based on the time and destination
    function calculatePriceBasedOnTime(destination, time) {
      // Get the base price from the destinations object (which is equal to the points)
      const basePrice = destinations[destination];
  
      // Apply a price multiplier if the time is "peak" (1.25 multiplier), otherwise use base price
      const priceMultiplier = time === "peak" ? 1.25 : 1;
  
      // Calculate the final price based on time
      return basePrice * priceMultiplier;
    }
  
    // Return an object with the public methods
    return {
      costPerTrip,
      totalTrips,
      returnTrips,
      costPerReturnTrip,
      calculatePriceBasedOnTime,
    };
}
  