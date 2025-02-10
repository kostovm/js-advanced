function timeToWalk(steps, footprint, speed) {

    const distance = footprint * steps;
    const breaks = Math.floor(distance / 500);
    const travelInSeconds = ((distance / (speed * 1000)) * 60 + breaks) * 60;

    const hours = Math.floor(travelInSeconds / 3600);
    const minutes = Math.floor(travelInSeconds / 60 - hours * 60);
    const seconds = (travelInSeconds - (hours * 3600) - (minutes * 60)).toFixed(0);

    console.log(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`);

}