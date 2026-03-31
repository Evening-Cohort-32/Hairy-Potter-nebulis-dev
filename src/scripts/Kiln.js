export const firePottery = (pottery, kilnTemperature) => {

    pottery.fired = true

    if (kilnTemperature > 2200) {
        pottery.cracked = true
    } else {
        pottery.cracked = false
    }
    return pottery
}   
