function shmoment(date){
    const now = new Date(date);
    return {
        add(time,value){
            switch(time){
                case 'years':
                    return now.setFullYear(now.getFullYear() + value);
                    
                case 'months':
                    return now.setMonth(now.getMonth() + value);
                    
                case 'days':
                    return now.setDate(now.getDate() + value);
                    
                case 'hours':
                    return now.setHours(now.getHours() + value);
                    
                case 'minutes':
                    return now.setMinutes(now.getMinutes + value);
                    
                case 'seconds':
                    return now.setSeconds(now.getSeconds + value);
                    
                case 'milliseconds':
                    return now.setMilliseconds(now.getMilliseconds + value);
                    
            }
        },
        subtract(time,value){
            switch(time){
                case 'years':
                    return now.setFullYear(now.getFullYear() - value);
                    
                case 'months':
                    return now.setMonth(now.getMonth() - value);
                    
                case 'days':
                    return now.setDate(now.getDate() - value);
                    
                case 'hours':
                    return now.setHours(now.getHours() - value);
                    
                case 'minutes':
                    return now.setMinutes(now.getMinutes - value);
                    
                case 'seconds':
                    return now.setSeconds(now.getSeconds - value);
                    
                case 'milliseconds':
                    return now.setMilliseconds(now.getMilliseconds - value);
                    
            }
        },
        result(){
            switch(now.getMonth){
                case 0:
                    return `Jan ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;
                    
                case 1:
                    return `Feb ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;                    
                case 2:
                    return `Mar ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;                    
                case 3:
                    return `Apr ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;                    
                case 4:
                    return `May ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;                    
                case 5:
                    return `Jun ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;                    
                case 6:
                    return `Jul ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;
                case 7:
                    return `Aug ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;
                case 8:
                    return `Sep ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;
                case 9:
                    return `Oct ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;
                case 10:
                    return `Nov ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;
                case 11:
                    return `Dec ${now.getDate()} ${now.getFullYear()} ${now.getHours}:${now.getMinutes}:${now.getSeconds}`;                    
            }
        }
    }
}

// const dateRand = new Date(2020, 0, 7, 17, 17, 17);
// const res = shmoment(dateRand).add('minutes', 2).add('days', 8).subtract('years', 1).result();

export{shmoment}