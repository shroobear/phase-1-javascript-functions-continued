// code your solution here
const saturdayFun = function(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(toDo='go to the office') {
    return `This Monday, I will ${toDo}.`
}

const wrapAdjective = function(emphasis) {
    return function (compliment='special') {
        return `You are ${emphasis}${compliment}${emphasis}!`
    }
};