import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { insertionSort } from '../src/insertion-sort/insertion-sort.ts';

/**
 * Should reorder elements with insertion sort
 */
Deno.test("testInseritionSort", () => {
  const start = performance.now();

  // const elements = Array.from({ length: 20 }, () => (x, y) => x);
  const elements = [10, 7, 23, 20, 1, 3, 4, 0, 50];
  console.log("Original", elements);

  const sorted = insertionSort(elements);
  const end = performance.now();

  console.log('Sorted', sorted);
  console.log(`Elapsed time: ${end - start} ms`);

  assertEquals(sorted.length, elements.length);
  assertEquals(sorted, [0, 1, 3, 4, 7, 10, 20, 23, 50]);
});