// DOM element(s) references
const pointsInput = document.getElementById('pointsInput');
const destinationSelect = document.getElementById('destinationSelect');
const peakCheckbox = document.getElementById('peakCheckbox');
const offPeakCheckbox = document.getElementById('offPeakCheckbox');
const returnCheckbox = document.getElementById('returnCheckbox');
const calculateButton = document.getElementById('calculateButton');
const singleTripsDisplay = document.getElementById('singleTripsDisplay');
const pricePerTripDisplay = document.getElementById('pricePerTripDisplay');
const returnTripsDisplay = document.getElementById('returnTripsDisplay');
const pricePerReturnTripDisplay = document.getElementById('pricePerReturnTripDisplay');

// Factory Function instance
const widget = BusWidget();

// Disable off-peak checkbox when peak checkbox is checked, and vice versa
peakCheckbox.addEventListener('change', () => {
  if (peakCheckbox.checked) {
    offPeakCheckbox.checked = false;
    offPeakCheckbox.disabled = true;
  } else {
    offPeakCheckbox.disabled = false;
  }
});

offPeakCheckbox.addEventListener('change', () => {
  if (offPeakCheckbox.checked) {
    peakCheckbox.checked = false;
    peakCheckbox.disabled = true;
  } else {
    peakCheckbox.disabled = false;
  }
});

// DOM Interaction
calculateButton.addEventListener('click', () => {
  // Retrieve input values
  const points = parseInt(pointsInput.value);
  const destination = destinationSelect.value;
  const time = peakCheckbox.checked ? 'peak' : 'offPeak';
  const isReturn = returnCheckbox.checked;

  // Calculate values using factory function methods
  const singleTrips = widget.totalTrips(points, destination, time);
  const pricePerTrip = widget.calculatePriceBasedOnTime(destination, time);
  const returnTrips = widget.returnTrips(points, destination, time, isReturn);
  const pricePerReturnTrip = widget.costPerReturnTrip(points, destination, time, isReturn);

  // Update the result container with the calculated values
  singleTripsDisplay.textContent = singleTrips;
  pricePerTripDisplay.textContent = pricePerTrip;
  returnTripsDisplay.textContent = returnTrips;
  pricePerReturnTripDisplay.textContent = pricePerReturnTrip;
});
