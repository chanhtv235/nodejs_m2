export class FindBinary {
    public findFirstOccurrence(numbers: number[],
                                 target: number): number {
        let low: number = 0;
        let high: number = numbers.length - 1;
        let result: number  = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (numbers[mid] == target) {
                result = mid;
                high = mid - 1;
            } else if (numbers[mid] > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return result
    }
}