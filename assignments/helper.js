exports.randInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.dice = function(sides, numberOfDie) {
    let working = [];
    let min = 1;
    for (let i = 0; i < numberOfDie; i++) {
        working.push(exports.randInt(1, sides));
    }
    return working.reduce((total, items) => total + items, 0);
};
