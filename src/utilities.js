

function calculateBMI(feet,inches,weight) {

    const tot_inches = parseFloat(feet)*12+parseFloat(inches)
    const meters = tot_inches*.025
    const meters_squared = meters**2

    const weight_KG = weight * .45
    
    const BMI = Math.round((weight_KG / meters_squared)*10) / 10

    return BMI
}

module.exports = calculateBMI