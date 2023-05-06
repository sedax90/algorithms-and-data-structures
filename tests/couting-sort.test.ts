import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import countingSort from "../src/counting-sort/counting-sort.ts";

const input = [2, 5, 3, 0, 2, 3, 0, 3];

Deno.test("countingSort", () => {
    const sorted = countingSort(input, 5);

    assertEquals(sorted, [0, 0, 2, 2, 3, 3, 3, 5]);
});