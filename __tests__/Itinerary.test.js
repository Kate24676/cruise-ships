const Itinerary = require('../src/Itinerary');

const Port =require('../src/port');


describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it('can have ports', () => {
    const kate = new Port('Kate');
    const nela = new Port('Nela');

    const itinerary = new Itinerary([kate, nela]);

    expect(itinerary.ports).toEqual([kate, nela]);
  });
});
