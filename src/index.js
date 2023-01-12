module.exports = function reverse(n) {
    let str = String(n);
    str = str.replace("-", "");
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return Number(joinArray);
};
