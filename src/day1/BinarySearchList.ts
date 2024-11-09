export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];
        if (v === needle) return true;
        else if (v > needle) hi = m;
        else lo = m + 1;
    } while (lo < hi);

    return false;
}

// Binary Search Algorithm
// Finding middle point of data, and checking if our number
// will be in the right half or left half of Array.
// Only works on Sorted List.

// BigO : O(log n)
// This Algorithm will do less steps than O(N) as we don't have to go through each item and check.
// Cut in half, untill we reach one ... Just like in normal logrithmic mathematical equation.

// ex : log2(8) = 3 [log base 2 of 8 equals 3]
// cut in 3 steps to reach one.
// 8 / 2 = 4 / 2 = 2 / 2 = 1
