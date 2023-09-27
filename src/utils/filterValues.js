export function filterValues(arr, keys, order) {
    return arr.filter(item => {

        for (let i = 0; i < keys.length; i++) {
            let currentKey = keys[i];
            if (item[currentKey].toLowerCase().includes(order.toLowerCase())) {
                return item
            }
        }

    })
}