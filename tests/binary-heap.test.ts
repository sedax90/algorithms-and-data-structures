import { assertArrayIncludes, assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { BinaryHeap } from "../src/binary-heap/binary-heap.ts";
import MaxPriorityQueue from "../src/binary-heap/max-priority-queue.ts";
import MinPriorityQueue from "../src/binary-heap/min-priority-queue.ts";

const input = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
let binaryHeap!: BinaryHeap;

Deno.test("heapSortAsc", () => {
    const start = performance.now();
    binaryHeap = new BinaryHeap(input);
    const output = binaryHeap.heapSort("asc");
    const end = performance.now();

    assertEquals(output, [1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);

    console.log(`Elapsed time: ${end - start} ms`);
});

Deno.test("heapSortDesc", () => {
    const start = performance.now();
    binaryHeap = new BinaryHeap(input);
    const output = binaryHeap.heapSort("desc");
    const end = performance.now();

    assertEquals(output, [16, 14, 10, 9, 8, 7, 4, 3, 2, 1]);

    console.log(`Elapsed time: ${end - start} ms`);
});

Deno.test("maxPriorityQueue", () => {
    const queue = new MaxPriorityQueue(input);

    let max = queue.maximum();
    assertEquals(max, 16);

    max = queue.extractMax();
    assertEquals(max, 16);

    max = queue.maximum();
    assertEquals(max, 14);

    assertEquals(queue.getElements().length, 9);

    queue.increaseKey(4, 20);
    assertArrayIncludes(queue.getElements(), [20]);

    queue.sort();
    assertEquals(queue.maximum(), 20);

    queue.insert(25);
    assertEquals(queue.getElements().length, 10);
    assertArrayIncludes(queue.getElements(), [25]);

    queue.sort();
    assertEquals(queue.maximum(), 25);
});

Deno.test("minPriorityQueue", () => {
    const queue = new MinPriorityQueue(input);

    let min = queue.minimum();
    assertEquals(min, 1);

    min = queue.extractMin();
    assertEquals(min, 1);
    assertEquals(queue.getElements().length, 9);

    queue.decreaseKey(0, 0);
    assertArrayIncludes(queue.getElements(), [0]);

    queue.sort();
    assertEquals(queue.minimum(), 0);

    queue.insert(5);
    assertEquals(queue.getElements().length, 10);
    assertArrayIncludes(queue.getElements(), [5]);
});