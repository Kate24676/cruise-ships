function Port(name) {
  this.name = name;
  this.ships = [];
  this.addShip = (ship) => {
    this.ships.push(ship);
}
  this.removeShip = (ship) => {
    this.ships = this.ships.filter(shipInList => shipInList !== ship);
}
};

module.exports = Port;
