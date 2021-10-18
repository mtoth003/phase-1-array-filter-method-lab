// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}


function fuzzyMatch(drivers, providedName){
    return drivers.filter(driver => driver.toLowerCase().indexOf(providedName.toLowerCase()) === 0)
}

function matchName(providedObject, enteredName){
    return providedObject.filter(object => object.name === enteredName)
}