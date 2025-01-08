export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

{
    /*
Binary sort is swapping two digits at a time so the larger value moves to right side of the array.
On each pass/iteration of loop, the largest element will have moved to the end of the array,
 and in 2nd pass/iteration, the 2nd largest element would have to 2nd last place in array.
so each time, you are not checking the last element as you already know it’s sorted, 
so after first iteration it becomes N-1, in 2nd pass → N-2 and so on … untill you know the it will be N-N+1 for the last pass/iteration.

Space time complexity
to check BIG(O) for this sorting algo, the example given above is not explained really but simple math for space-time complexity algorithm is this.
N(N^2 + 1)/ 2 | math formula for the sum of numbers to a range
$(N^2 + N)/2 | simplifiying the equation
$(N^2 + N) | constant gets dropped in big(O), so 2 is dropped here
N^2 | + n becomes too small as N gets large so it’s value becomes insignificant in big(O)

So Big(O) of the sorting algo is 0(N^2)
in Simple example, the first loop is N and 2nd loop is also N in complexity
so space complexity in simple terms will become 0(N^2)
*/
}

{
    /*
    Code explanation
    First loop will run i to the N
    2nd loop is will run to the N-1-i so the array doesn't go out of bounds.
    we check if j > j+1 and swap if true.
    on each pass, j moves to the left side by 1 as the last item already
     gets sorted so no need to check that one again.
    */
}
