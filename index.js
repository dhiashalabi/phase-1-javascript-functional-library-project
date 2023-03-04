function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            callback(values[i], Object.keys(collection)[i], collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i], i, collection));
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            newArray.push(callback(values[i], Object.keys(collection)[i], collection));
        }
    }
    return newArray;
}

function myFirst(collection, n) {
    if (!Array.isArray(collection) && typeof collection !== 'string') {
        collection = Object.values(collection);
    }
    if (n === undefined) {
        return collection[0];
    } else {
        return collection.slice(0, n);
    }
}

function myLast(collection, n) {
    if (!Array.isArray(collection) && typeof collection !== 'string') {
        collection = Object.values(collection);
    }
    if (n === undefined) {
        return collection[collection.length - 1];
    } else {
        return collection.slice(Math.max(collection.length - n, 0));
    }
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(obj) {
    var values = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else if (typeof collection === 'object') {
        return Object.keys(collection).length;
    } else {
        return 0;
    }
}

function myReduce(collection, callback, initialValue) {
    if (Array.isArray(collection)) {
        return initialValue !== undefined
            ? collection.reduce(callback, initialValue)
            : collection.reduce(callback);
    } else if (typeof collection === 'object') {
        const values = Object.values(collection);
        return initialValue !== undefined
            ? values.reduce(callback, initialValue)
            : values.reduce(callback);
    } else {
        throw new TypeError('reduce of undefined');
    }
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i], Object.keys(collection)[i], collection)) {
                return values[i];
            }
        }
    }
}

function myFilter(collection, predicate) {
    let newArray = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                newArray.push(collection[i]);
            }
        }
    } else {
        let values = Object.values(collection);
        for (let i = 0; i < values.length; i++) {
            if (predicate(values[i], Object.keys(collection)[i], collection)) {
                newArray.push(values[i]);
            }
        }
    }
    return newArray;
}
