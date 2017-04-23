import Student from "./Student"
import Teacher from "./Teacher"  

export default class HYFClass {
        constructor( members ) {
            this.members = members || []

            let memberIsArray = this.members instanceof Array
            if (!memberIsArray) {
                throw new Error("members should be an array")
            }
        }

        addTeacher( member ) {
            this.members.push( new Teacher(member))
        }

        addStudent( member ) {
            this.members.push(new Student(member))
        }
        getAllteachers() {
            return this.members.filter( member => member instanceof Teacher)
        }
        getAllStudents() {
            return this.members.filter( member => member instanceof Student)
        }
    }