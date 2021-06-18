// Binary Search
const binarySearch = (numbers, target) => {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            return mid;
        }
        if (numbers[mid] < target) {
            start = mid + 1;
        }
        if (numbers[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}
console.log("Item found at " + binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 44, 56, 76], 0));
