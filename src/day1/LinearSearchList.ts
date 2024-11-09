export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) return true;
    }

    return false;
}

// Linear Search Algorithm
// We are doing a linear search on the input
// to find what matches with our numvber and
// return bool.

// BigO : O(N)
// As our input grows, the no of steps also grows linearly.
