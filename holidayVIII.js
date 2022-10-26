/**
 * This function calculates how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
 * @param {*} normPrice The price of one bottle
 * @param {*} discount The discount 
 * @param {*} hol The cost of the holiday
 * @returns 
 */
function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * (discount / 100)))
  }