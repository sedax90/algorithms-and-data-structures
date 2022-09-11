import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import quickSort from "../src/quick-sort/quick-sort.ts";

const input = [2, 8, 7, 1, 3, 5, 6, 4];

Deno.test("quicksort", () => {
    const start = performance.now();
    let sorted = quickSort(input, 'asc');
    const end = performance.now();

    console.log(`Elapsed time: ${end - start} ms`);

    assertEquals(sorted[0], 1);
    assertEquals(sorted[input.length - 1], 8);
    assertEquals(sorted, [1, 2, 3, 4, 5, 6, 7, 8]);

    sorted = quickSort(input, 'desc');

    assertEquals(sorted[0], 8);
    assertEquals(sorted[input.length - 1], 1);
    assertEquals(sorted, [8, 7, 6, 5, 4, 3, 2, 1]);
});