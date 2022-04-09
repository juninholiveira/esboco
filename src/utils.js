//Receive an amount of seconds (Number)
//and convert it to an Javascript Object
//containing 3 items: hours, minutes and seconds
//in a string format, always with no less than 2 digits
// export function convertSecondsToTimeObject(time) {
//     const totalHours = Math.floor(time / 3600)
//     const totalMinutes = Math.floor((time - (totalHours * 3600)) / 60)
//     const totalSeconds = time % 60
//     return {
//         hours: `${totalHours < 10 ? "0" : ""}${totalHours}`,
//         minutes: `${totalMinutes < 10 ? "0" : ""}${totalMinutes}`,
//         seconds: `${totalSeconds < 10 ? "0" : ""}${totalSeconds}`
//     }
// }

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