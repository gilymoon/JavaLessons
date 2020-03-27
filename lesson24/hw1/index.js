function getDiff(startDate, endDate){
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    const resDate = new Date(eDate.getMilliseconds() - sDate.getMilliseconds());
    console.log(res);

    const resDay = resDate.getDate();
    const resHour = resDate.getHours();
    const resMin = resDate.getMinutes();
    const resSec = resDate.getSeconds();
    return `${resDay}d ${resHour}h ${resMin}m ${resSec}s`
}

const strDate = new Date();
const enDate = new Date(2021, 5, 13, 22, 21, 0);

const res = getDiff(strDate, enDate);

console.log(res);