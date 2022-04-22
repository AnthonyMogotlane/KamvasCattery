describe("The bookingCost function", () => {
    it("should return the total price of the days booked for bookings made on Monday", () => {
        assert.deepEqual(bookingCost({ check_in_day: 'Monday', duration: 3, cat_name: 'Snowy' }), 135);
    })

    it("should return the total price with a discout of 15% for the bookings made on Wednesday", () => {
        assert.deepEqual(bookingCost({ check_in_day: 'Wednesday', duration: 3, cat_name: 'Snowy' }), 101.25);
    })

    it("should return the total price with a discout of 25% for the bookings made on Friday", () => {
        assert.deepEqual(bookingCost({ check_in_day: 'Wednesday', duration: 3, cat_name: 'Snowy' }), 101.25);
    })
})
