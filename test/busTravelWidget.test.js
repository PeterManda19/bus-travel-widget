describe('BusWidget', function () {
  let widget;

  beforeEach(function () {
    // Create a new instance of BusWidget before each test
    widget = BusWidget();
  });

  describe('costPerTrip', function () {
    it('should calculate the cost per trip correctly', function () {
      const points = 10;
      const destination = 'Khayelitsha';
      const expectedCost = 10;

      const cost = widget.costPerTrip(points, destination);

      assert.strictEqual(cost, expectedCost);
    });
  });

  describe('totalTrips', function () {
    it('should calculate the total trips correctly', function () {
      const points = 20;
      const destination = 'Dunoon';
      const time = 'offPeak';
      const expectedTotalTrips = 20;

      const totalTrips = widget.totalTrips(points, destination, time);

      assert.strictEqual(totalTrips, expectedTotalTrips);
    });
  });

  describe('returnTrips', function () {
    it('should calculate the return trips correctly when return option is selected', function () {
      const points = 30;
      const destination = 'Mitchells Plain';
      const time = 'peak';
      const isReturn = true;
      const expectedReturnTrips = 2;

      const returnTrips = widget.returnTrips(points, destination, time, isReturn);

      assert.strictEqual(returnTrips, expectedReturnTrips);
    });

    it('should return 0 return trips when return option is not selected', function () {
      const points = 30;
      const destination = 'Mitchells Plain';
      const time = 'peak';
      const isReturn = false;
      const expectedReturnTrips = 0;

      const returnTrips = widget.returnTrips(points, destination, time, isReturn);

      assert.strictEqual(returnTrips, expectedReturnTrips);
    });
  });

  describe('costPerReturnTrip', function () {
    it('should calculate the cost per return trip correctly', function () {
      const points = 40;
      const destination = 'Khayelitsha';
      const time = 'offPeak';
      const isReturn = true;
      const expectedCost = 100;

      const cost = widget.costPerReturnTrip(points, destination, time, isReturn);

      assert.strictEqual(cost, expectedCost);
    });
  });

  describe('calculatePriceBasedOnTime', function () {
    it('should calculate the price based on time correctly for peak time', function () {
      const destination = 'Dunoon';
      const time = 'peak';
      const expectedPrice = 25 * 1.25;

      const price = widget.calculatePriceBasedOnTime(destination, time);

      assert.strictEqual(price, expectedPrice);
    });

    it('should calculate the price based on time correctly for off-peak time', function () {
      const destination = 'Mitchells Plain';
      const time = 'offPeak';
      const expectedPrice = 35;

      const price = widget.calculatePriceBasedOnTime(destination, time);

      assert.strictEqual(price, expectedPrice);
    });
  });
});

