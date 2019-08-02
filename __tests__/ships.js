const Ship = require('../src/ship.js');

const Port = require('../src/port.js');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship('Kate')).toBeInstanceOf(Object);
  });
});

it('has a current port', () => {
  const port = new Port('Kate');
  const ship = new Ship(port);


  expect(ship.currentPort).toBe(port);
});

it('can set sail', () => {
  const ship = new Ship('Kate');

  ship.setSail();

  expect(ship.currentPort).toBeFalsy();
  expect(kate.ships).not.toContain(ships);
});

it('can dock at a different port', () => {
  const kate = new Port ('Kate');
  const nela = new Port ('Nela');
  const itinerary = new Itinerary ([kate,nela]);

  const ship = new Ship (itinerary);

  ship.setSail();
  ship.dock();

  expect(ship.currentPort).toBe(nela);
  expect(nela.ships).toContain(ship);
});

it('gets added to port on instantiation', () => {

  const kate = new Port('Kate');

  const itinerary = new Itinerary([kate]);

  const ship = new Ship(itinerary);

  expect(kate.ships).toContain(ship);
});
