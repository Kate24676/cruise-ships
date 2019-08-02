const Port = require('../src/port.js');


describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port('Kate')).toBeInstanceOf(Object);
  });
});

it('can add a ship', () => {
  const port = new Port('Kate');
  const ship = {};

  port.addShip(ship);

  expect(port.ships).toContain(ship);
});

it('can remove a ship', () => {
  const port = new Port('Kate');
  const titanic = {};
  const queenMary = {};

  port.addShip(titanic);
  port.addShip(queenMary);
  port.removeShip(queenMary);

  expect(port.ships).toEqual([titanic]);
});
