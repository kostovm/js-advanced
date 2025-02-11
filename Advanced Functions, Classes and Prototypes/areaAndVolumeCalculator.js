function areaAndVolumeCalculator(areaFunc, volFunc, shapesJson) {

    const shapes = JSON.parse(shapesJson);

    const result = [];

    for (let shape of shapes) {
        const area = areaFunc.call(shape);
        const volume = volFunc.call(shape);

        const current = {
            area,
            volume
        };

        result.push(current);
    }

    return result;

}