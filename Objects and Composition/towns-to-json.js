function townsToJson(input) {

    let result = [];


    for (let i = 1; i < input.length; i++) {
        let info = input[i].split('| ');

        let town = info[1].trim();
        let latitude = Number(info[2].trim()).toFixed(2);
        let longitude = Number(info[3].substring(0, info[3].length - 2)).toFixed(2);

        let obj = {
            'Town': town,
            'Latitude': Number(latitude),
            'Longitude': Number(longitude),
        }

        result.push(obj)
    }

    return JSON.stringify(result)
}