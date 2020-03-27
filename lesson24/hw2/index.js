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

