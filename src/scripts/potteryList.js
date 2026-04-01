import { sellablePottery } from "./PotteryCatalog.js"

export const potteryList = () => {
    let potHTML = ''

    for (const pottery of sellablePottery) {
        potHTML += `
         <section class="pottery" id="pottery--1">
            <h2 class="pottery__shape">${pottery.shape}</h2>
                <div class="pottery__properties">
                <p>Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height</p>
                </div>
                <div class="pottery__price">Price is $${pottery.price}</div>
         </section>`
    }

    return potHTML
}