import HYFClass from "./HYFClass"

 var JS = new HYFClass([])

    var jsMembers = [{firstName: 'Mauro',lastName: 'Mandracchia',type: 'teacher'},
                     {firstName: 'David',lastName: 'furlong',type: 'teacher'},
                     {firstName: 'Ali',lastName: 'Barakat',type: 'student'},
                     {firstName: 'odai',lastName: 'kakhi',type: 'student'}
                    ]

    jsMembers.forEach((member) => {
        if (member.type === "teacher") {
            JS.addTeacher(member)
        } else {
            JS.addStudent(member)
        }

    })

    console.log("ALL Teachers", JS.getAllteachers())
    console.log("ALL Students", JS.getAllStudents())
