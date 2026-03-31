// Imports go first

import { firePottery } from "./Kiln.js"
import { makePottery } from "./potteryWheel.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel

/*
const potteries = [
    {
        shape: "mug",
        weight: 1,
        height: 4
    },
    {
        shape: "Platter",
        weight: 1,
        height: 1
    },
    {
        shape: "Burj Khalifa",
        weight: 1000000,
        height: 40000
    },
    {
        shape: "Bowl",
        weight: 1,
        height: 3
    },
    {
        shape: "Dinner Plate",
        weight: 1,
        height: 1
    }
]
*/

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

toSellOrNotToSell(dinnerPlate, dinnerPlate.weight)
toSellOrNotToSell(mug, mug.weight)
toSellOrNotToSell(platter, platter.weight)
toSellOrNotToSell(burjKhalifa, burjKhalifa.weight)
toSellOrNotToSell(bowl, bowl.weight)


/*
for (const pottery of potteries) {
    let i = firePottery(pottery["shape"], 2200)
    console.log(i)
}
*/

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

