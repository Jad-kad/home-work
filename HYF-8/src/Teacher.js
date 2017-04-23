import Person from "./Person"

export default class Teacher extends Person {
    constructor( member ) {
        super(member.firstName, member.lastName)
    }
}