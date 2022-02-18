// Question 
// Convert timestamps to military time given the following format

// s = '12:01:00PM'


// 

function timeConversion(s) {
    // s = '12:01:00PM'
    // establish helper variables for if statement

    // pull the AM or PM from string s
    let dayNight = s.slice(-2)
    // split the string @ colons
    let split = s.split(":")
    // establish the hour portion of timestamp as numerical value
    let hour = parseInt(split[0])
    
    // account for high noon
    if (hour === 12 && dayNight === "PM"){
        return s.slice(0,8)
    // account for midnight hour
    }else if (hour === 12 && dayNight === "AM"){
        let midnight = "00" + s.slice(2,8)
        return midnight
    // account for AM time
    }else if (hour < 12 && dayNight === "AM"){
        return s.slice(0,8)
    // account for PM time
    }else if (hour < 12 && dayNight === "PM"){
        let afternoon = 12+hour
        let final = afternoon + s.slice(2,8)
        return final
    }
}
