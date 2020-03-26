function getDiff(startDate, endDate){
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    const resDate = new Date(eDate.getMilliseconds() - sDate.getMilliseconds());
    
    const resDay = resDate.getDate();
    const resHour = resDate.getHours();
    const resMin = resDate.getMinutes();
    const resSec = resDate.getSeconds();
    return `${resDay}d ${resHour}h ${resMin}m ${resSec}s`
}

export{getDiff}