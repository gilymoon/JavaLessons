const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function studentsBirthDays(students){
  
    const sortedStudents = students.sort((a, b) => {
        let aStudentBirth = a.birthDate;
        const aStudentDateArr = aStudentBirth.split('/');
        const aDateStudent = new Date(aStudentDateArr);
        let bStudentBirth = b.birthDate;
        const bStudentDateArr = bStudentBirth.split('/');
        const bDateStudent = new Date(bStudentDateArr);
        if(aDateStudent > bDateStudent){
            return 1;
        }
    })
    const result = sortedStudents.reduce((acc, { name, birthDate }) => {
        const monthsName = months[new Date(birthDate).getMonth()];
        return {...acc, [monthsName]: acc[monthsName] ? acc[monthsName].concat(name) : [name] };
    }, {});
    return result;
}


export{studentsBirthDays}

