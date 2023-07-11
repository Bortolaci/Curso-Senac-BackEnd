type user = {
    name: string,
    email: string,
    role: string
}

let admins: Array<string> = [];

let users: Array<user> = [
    {name: "Rogério", email: "roger@email.com", role: "user"},
    {name: "Ademir", email: "ademir@email.com", role: "admin"},
    {name: "Aline", email: "aline@email.com", role: "user"},
    {name: "Jéssica", email: "jessica@email.com", role: "user"},
    {name: "Adilson", email: "adilson@email.com", role: "user"},
    {name: "Carina", email: "carina@email.com", role: "admin"}
];

const result = users.filter((user) => {
    // console.log(user);
    return user.role === 'admin';
});

const emails = result.map((mapEmail) => {
    return mapEmail.email;
});

console.log(emails);

// function returnAdm(users:any): any {
//     for (let i = 0; i < users.length; i++) {
//         if(users[i].role == "admin") {
//             admins.push(users[i].email)
//         }
//     }
// }

// returnAdm(users);
// console.log(admins);