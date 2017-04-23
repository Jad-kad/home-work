import Person from "./Person"
export default class Student extends Person {
    constructor( member ) {
        super( member.firstName, member.lastName )
    }
}
