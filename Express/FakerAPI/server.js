const express = require("express");
const res = require("express/lib/response");
const app = express();
const faker = require("faker");
const port = 8000;

app.use(express.json());

class User {
    constructor() {
        this.id = Math.abs(faker.datatype.number());
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumberFormat();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = Math.abs(faker.datatype.number());
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress() + " " + faker.address.cityName() + " " + faker.address.state() + " " + faker.address.zipCode() + " " + faker.address.country();
    }
}


app.get("/" , (req, res) => {
    res.send("Hello from faker!");
});

app.get("/api/companies/new", (req, res) => {
    const reqComp = new Company;
    res.json( reqComp );
});

app.get("/api/user/company", (req, res) => {
    const reqComp = new Company;
    const reqUser = new User;
    const combined = {reqUser, reqComp};
    res.json( combined );
});

app.get("/api/users/new", (req, res) => {
    const reqUser = new User;
    res.json( reqUser );
});



const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);