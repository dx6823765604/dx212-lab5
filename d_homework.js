const team = [
    { name: "ฟ้า", role: "PO", tasksDone: 5 },
    { name: "ต้น", role: "Dev", tasksDone: 8 },
    { name: "มายด์", role: "SM", tasksDone: 3 },
    { name: "เจ", role: "Dev", tasksDone: 6 },
];


const namesAndRoles = team.map(member => {
    return `${member.name} (${member.role})`;
});

console.log("รายชื่อ:", namesAndRoles);



const devTeam = team.filter(member => {
    return member.role === "Dev";
});

console.log("Dev:", devTeam);


const totalTasks = team.reduce((total, member) => {
    return total + member.tasksDone;
}, 0);

console.log("Tasks ทั้งทีม:", totalTasks);


const totalDevTasks = team
    .filter(member => member.role === "Dev")
    .reduce((total, member) => {
        return total + member.tasksDone;
    }, 0);

console.log("Tasks ของ Dev:", totalDevTasks);