function rectangle(width, height, color) {

    let obj = {
        width,
        height,
        color: color.replace(color[0], color[0].toUpperCase()),

        calcArea(width) {
            area = Number(this.height) * Number(this.width);
            return area;
        }
    }

    return obj;

}