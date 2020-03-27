function studentsBirthDays(students){
    const sortedStudents = students.sort((a, b) => {
        let aStudentBirth = a.birthDate;
        const aStudentDateArr = aStudentBirth.split('/');
        const aDateStudent = new Date(aStudentDateArr);
        let bStudentBirth = b.birthDate;
        const bStudentDateArr = bStudentBirth.split('/');
        const bDateStudent = new Date(bStudentDateArr);
        if(aDateStudent > bDateStudent){
            return -1;
        }
    })
    return sortedStudents;
}

export{studentsBirthDays}

[{name: 'Tom', birthDate:'01/15/2010'}, {name:'Ben', birthDate:'01/17/2008'}, {name: 'Sam', birthDate:'03/15/2010'}]