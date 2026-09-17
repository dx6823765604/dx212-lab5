let ngv1 = { 
    name : "ngv1",
    route : "route 01",
    late : false,
    mile : 5078
};
let ngv2 = { 
    name : "ngv2",
    route : "route 02",
    late : true,
    mile : 3000
};
let ngv3 = { 
    name : "ngv3",
    route : "route 03",
    late : true,
    mile : 2000
};
const buses = [ngv1, ngv2, ngv3];
//console.log(buses.name);

const lateBus = buses.filter(b => b.late).map(r => r.route);
console.log(lateBus);
const oldBus = buses.filter(b => b.mile > 3000).map(m => m.mile);
console.log(oldBus);