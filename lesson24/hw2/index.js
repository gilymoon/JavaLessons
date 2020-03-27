const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function studentsBirthDays(students){
  
    const sortedStudents = students.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate());
    const result = sortedStudents.reduce((acc, { name, birthDate }) => {
        const monthsName = months[new Date(birthDate).getMonth()];
        return {...acc, [monthsName]: acc[monthsName] ? acc[monthsName].concat(name) : [name] };
    }, {});
    return result;
}

export{studentsBirthDays}

