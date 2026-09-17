const buses = [
    { route: "NGV-1", passengers: 45, late: false },
    { route: "NGV-2", passengers: 62, late: true },
    { route: "NGV-3", passengers: 38, late: true },
    { route: "NGV-4", passengers: 51, late: false },
];
const messages = buses.map(bus => `${bus.route} มีผู้โดยสาร ${bus.passengers} คน`); //map
const lateBuses = buses.filter(bus => bus.late); //filter
const totalPassengers = buses.reduce((sum, bus) => sum + bus.passengers, 0); //reduce
const latePassengers = buses //chain
    .filter(bus => bus.late)
    .reduce((sum, bus) => sum + bus.passengers, 0);

console.log(messages);
console.log(lateBuses);
console.log(totalPassengers);
console.log(latePassengers);