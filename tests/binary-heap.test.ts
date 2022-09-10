import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { BinaryHeap } from "../src/binary-heap/binary-heap.ts";

const input = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
let binaryHeap!: BinaryHeap;

Deno.test("heapSortAsc", () => {
    const start = performance.now();
    binaryHeap = new BinaryHeap(input);
    const output = binaryHeap.heapSort("asc");
    const end = performance.now();

    assertEquals(output, [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
    console.log(output);

    console.log(`Elapsed time: ${end - start} ms`);
});

Deno.test("heapSortDesc", () => {
    const start = performance.now();
    binaryHeap = new BinaryHeap(input);
    const output = binaryHeap.heapSort("desc");
    const end = performance.now();

    assertEquals(output, [16, 14, 10, 9, 8, 7, 4, 3, 2, 1]);
    console.log(output);

    console.log(`Elapsed time: ${end - start} ms`);
});