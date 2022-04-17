//Receive a Time Object
//and returns the total seconds amount (Number)
export function convertTimeObjectToSeconds(timeObj) {
    return ((timeObj.hours * 3600) + (timeObj.minutes * 60) + timeObj.seconds)
}

//Gets the current time
//and returns a Javascript Object
//containing 3 items: hours, minutes and seconds
export function getCurrentTimeSeconds(){
    const currentDate = new Date()
    const obj = {
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds()
    }
    return convertTimeObjectToSeconds(obj)
}

//Gets the string generated in the timepicker
//and converts it to seconds (Number)
export function convertTimeStringToSeconds(timeString){
    const array = timeString.split(":")
    const timeObj = {
        hours: parseInt(array[0]),
        minutes: parseInt(array[1]),
        seconds: parseInt(array[2])
    }
    return convertTimeObjectToSeconds(timeObj)
}

export function convertDateToSeconds(date) {
    return ((date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds())
}