// Imports go first

import { makePottery } from "./PotteryWheel"

// Make 5 pieces of pottery at the wheel

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
        weight: 10000,
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

for (const pottery of potteries) {
    makePottery(shape, weight, height)
    console.log(makePottery)
}

/*

*/

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

