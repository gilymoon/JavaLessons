const dayOfWeek = (date, days) => {
    const weekDays = ['Sun', 'Mon', 'Tue','Wed','Thu','Fri','Str']
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return weekDays[new Date (dateInFuture).getDay()]
}

export {dayOfWeek}