export default function two_crystal_balls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));

    let i = jump;

    for (; i < breaks.length; i += jump) {
        if (breaks[i]) break;
    }

    i -= jump;

    for (let j = 0; j <= jump && i < breaks.length; ++i, ++j) {
        if (breaks[i]) return i;
    }
    return -1;
}

// Two Crytal Balls
// This is a classic example that we solve using O(sqrt(N))
// We can solve it using Linear search but that won't be the most optimized solution.
// We can't solve it using Binary Search as we have a restriction of only two balls. (Both balls will break before we find the breaking story of balls)
// The best way is to get sqrt of N.

// BigO : O(sqrt(N))
// Example : You have this array of data set of boolean 100 and index of these will be [1, 2, 3, ... 100]
// sqrt here would be 10 of 100, so we move 10 steps each time.
// Lets say we find our first ball breaks at 30, so we know it has to be in the middle of 21-30.
// So we move i back to initial good point by minus of jump (in this case it would be 21)
// then do linearly search between 21-30 with second ball to find the actual story of the building.
// The number of steps are way less than Linear Searching through whole input.
