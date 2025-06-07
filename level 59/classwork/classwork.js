function Flight( flightid , status){
    this.flightid = flightid;
    this.status=status
};

let flightid = promt("Enter your flight id")
let status = promt("Enter your status")

let member = new Flight( flightid , status)

console.log(Flight)