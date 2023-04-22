function binarySearch(numbers: number[],
                      needle: number,
                      left: number,
                      right: number): boolean {

    if (right < left) {
        return false;
    }

    let mid = Math.floor((right + left) / 2);
    if (numbers[mid] == needle) {
        return true;
    } else if (numbers[mid] > needle) {
        return binarySearch(numbers, needle, left, mid - 1);
    } else {
        return binarySearch(numbers, needle, mid + 1, right);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 8, 10];
console.log(binarySearch(arr, 6, 0, arr.length - 1)); // true
console.log(binarySearch(arr, 7, 0, arr.length - 1)); // false