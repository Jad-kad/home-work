export default class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName || "notset"
        this.lastName = lastName || "notset"
    }

    getFirstName() {
        return this.firstName
    }
    getLastName() {
        return this.lastName
    }
}


