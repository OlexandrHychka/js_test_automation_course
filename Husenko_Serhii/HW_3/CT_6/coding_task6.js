const logNames = (users) => {
    for (const user of users) {
        console.log(`${user.firstName} ${user.lastName}`);
    }
};

const randomUsers = [
    {
        id: 1,
        firstName: "Nick",
        lastName: "Mold",
    },
    {
        id: 2,
        firstName: "Marta",
        lastName: "Zald",
    },
];

logNames(randomUsers);
