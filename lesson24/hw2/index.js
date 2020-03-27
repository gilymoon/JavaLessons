function studentsBirthDays(students){
    const sortedStudents = students.sort(a, b => {
        let aStudent = a.birthDate.splice('/');
        const aDateStudent = new Date(aStudent);
        let bStudent = b.birthDate.splice('/');
        const bDateStudent = new Date(bStudent);
        if(aDateStudent > bDateStudent){
            return 1;
        }
    })
    return sortedStudents;
}

export{studentsBirthDays}