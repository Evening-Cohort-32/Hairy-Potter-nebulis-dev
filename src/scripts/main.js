// Imports go first

import { firePottery } from "./Kiln.js"
import { makePottery } from "./PotteryWheel.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { potteryList } from "./potteryList.js"
import { sellablePottery } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel

let mug = makePottery("mug", 1, 4)

let platter = makePottery("Platter", 1, 1)

let burjKhalifa = makePottery("Burj Khalifa", 1000000, 40000)

let bowl = makePottery("Bowl", 1, 3)

let dinnerPlate = makePottery("Dinner Plate", 1, 1)

// Fire each piece of pottery in the kiln

firePottery(mug, 2200)
firePottery(platter, 1209)
firePottery(burjKhalifa, 4802)
firePottery(bowl, 9078)
firePottery(dinnerPlate, 2022)

// Determine which ones should be sold, and their price

toSellOrNotToSell(dinnerPlate, dinnerPlate.weight, dinnerPlate.cracked)
toSellOrNotToSell(mug, mug.weight, mug.cracked)
toSellOrNotToSell(platter, platter.weight, platter.cracked)
toSellOrNotToSell(burjKhalifa, burjKhalifa.weight, burjKhalifa.cracked)
toSellOrNotToSell(bowl, bowl.weight, bowl.cracked)

// Invoke the component function that renders the HTML list
const container = document.querySelector('.potteryList')
container.innerHTML = potteryList()
