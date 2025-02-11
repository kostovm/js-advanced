function extensibleObject() {

    let obj = {
        extend: function (template) {
            for (let parentProp of Object.keys(template)) {
                let templateElement = template[parentProp];

                if (typeof templateElement === "function") {
                    Object.getPrototypeOf(obj)[parentProp] = templateElement;
                } else {
                    obj[parentProp] = templateElement;
                }
            }
        }
    };

    return obj;

}