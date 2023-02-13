const n = parseInt(readline()) // the number of temperatures to analyse
var inputs = readline().split(' ')

// 1 - Si la valeur vaut 0 ou inputs []
if(n === 0 || !inputs.length) 
    return console.log(0)

// Recuperation des nombres positifs
const positiveNumbers = inputs.filter(number => number > 0 )
// Recuperation du plus petit nombre positif
const positiveMin = Math.min(...positiveNumbers)

// Recuperation des nombres negatifs
const negativeNumbers = inputs.filter(number => number < 0 )
// Recuperation du plus grand nombre negatif
const negativeMax = Math.max(...negativeNumbers)

// Comparer la valeur absolue de positiveMin/negativeMax
const negativeMaxConvert = Math.abs(negativeMax)

console.log(positiveMin <= negativeMaxConvert ? positiveMin : negativeMax)