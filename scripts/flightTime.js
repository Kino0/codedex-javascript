const departTripTicket = {
  name: "",
  from: "",
  to: "",
  leaveTime: null,
  businessClass: false,
  distance: null,
  velocity: null,

  classLog () {
    return this.businessClass ? "Business" : "Economic Class";
  },

  upgrade (){
    if (this.businessClass === false){
      return this.businessClass = true;
    } else {
      return "Business Class not included "
    }
  },

  flightTime () {
    let time = this.distance / this.velocity;
    this.arriveTime = (this.leaveTime + time) % 24;
    return `${this.arriveTime} hrs (Departing from ${this.leaveTime}:00)`;
  },

  departLog () {
    console.log(`Passenger: ${this.name}`);
    console.log(`From: ${this.from}`);
    console.log(`To: ${this.to}`);
    console.log(`Departure time: ${this.leaveTime}:00`);
    console.log(`Arrival time: ${this.flightTime()}`);
    console.log(`Flight class: ${this.classLog()}`);
  }
};

// Adiciona as informações
departTripTicket.name = "Denis";
departTripTicket.from = "Brazil";
departTripTicket.to = "Hong Kong";
departTripTicket.leaveTime = 5;
departTripTicket.flightTime();

// Informações técnicas de voo
departTripTicket.distance = 9000;
departTripTicket.velocity = 800;

// Log geral para o passageiro
departTripTicket.departLog()