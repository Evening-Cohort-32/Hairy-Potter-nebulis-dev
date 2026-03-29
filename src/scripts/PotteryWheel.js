

export const makePottery = (shape, weight, height) => {
    let potteryId = 1

    const pot = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    }
    potteryId++
    return pot
}