//Receive an amount of seconds (Number)
//and convert it to an Javascript Object
//containing 3 items: hours, minutes and seconds
//in a string format, always with no less than 2 digits
export function convertSecondsToTimeObject(time) {

    const totalHours = Math.floor(time / 3600)
    const totalMinutes = Math.floor((time - (totalHours * 3600)) / 60)
    const totalSeconds = time % 60

    return {
        hours: `${totalHours < 10 ? "0" : ""}${totalHours}`,
        minutes: `${totalMinutes < 10 ? "0" : ""}${totalMinutes}`,
        seconds: `${totalSeconds < 10 ? "0" : ""}${totalSeconds}`
    }
}

//Gets the current time
//and returns a Javascript Object
//containing 3 items: hours, minutes and seconds
export function getCurrentTimeObject(){

    const currentDate = new Date()

    return {
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds()
    }
}

export function getRemainingTime(){
    
}