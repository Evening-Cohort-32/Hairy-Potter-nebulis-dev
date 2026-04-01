export let sellablePottery = []

export const toSellOrNotToSell = (pottery, weight, cracked) => {
    
    if (weight < 6) {
        pottery.price = 20
    } else {
        pottery.price = 40
    }

    if (!cracked) {
        sellablePottery.push(pottery)
    }

    return pottery
}