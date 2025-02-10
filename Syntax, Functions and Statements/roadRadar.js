function roadRadar(speed, area) {

    let speedLimit;

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else if (speed - speedLimit <= 20) {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`)
    } else if (speed - speedLimit <= 40) {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
    } else if (speed - speedLimit > 40) {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
    }

}