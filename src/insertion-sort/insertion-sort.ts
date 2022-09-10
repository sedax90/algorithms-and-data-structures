export function insertionSort(elements: number[]): number[] {
    for (let i = 1; i < elements.length; i++) {
        let prevIndex = i - 1;
        let prev = elements[prevIndex];
        let current = elements[i];

        while (prevIndex >= 0 && current < prev) {
            elements[prevIndex] = current;
            elements[prevIndex + 1] = prev;
            
            current = elements[prevIndex];
            prevIndex--;
            prev = elements[prevIndex];
        }
    }

    return elements;
}