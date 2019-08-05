export const convertEmptyToNull = (object) => {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] === '') {
                object[key] = null;
            }
        }
    }
    return object;
}
