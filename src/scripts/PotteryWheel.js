
let potteryId = 1

export const makePottery = (shape, weight, height) => {

    const pot = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    }
    potteryId++
    return pot
}