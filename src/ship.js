function Ship(itinerary) {

  this.itinerary =  itinerary;

  this.currentPort = itinerary.ports[0];

  this.previousPort = null;

  this.currentPort.addShip(this);

  this.setSail = () => {
    console.log('sailing');
    this.currentPort = false;
  };

  this.dock = (port) => {
    this.currentPort = port;
  };
};

function dock() {

  const itinerary = this.itinerary;

  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];

  this.currentPort.addShip(this);
}


module.exports = Ship;
