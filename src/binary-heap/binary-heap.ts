export class BinaryHeap {

    constructor(private elements: number[]) { }

    private heapSize!: number;

    buildMaxHeap(): number[] {
        let elements = this.elements;
        this.heapSize = elements.length;

        for (let i = ~~(elements.length / 2); i >= 0; i--) {
            elements = this.maxHeapify(elements, i);
        }

        return elements;
    }

    buildMinHeap(): number[] {
        let elements = this.elements;
        this.heapSize = elements.length;

        for (let i = 0; i < elements.length; i++) {
            elements = this.minHeapify(elements, i);
        }

        return elements;
    }

    private maxHeapify(elements: number[], parent: number): number[] {
        const leftIndex = parent * 2 + 1;
        const rightIndex = parent * 2 + 2;
        let maxIndex = parent;

        if (leftIndex < this.heapSize && elements[leftIndex] > elements[parent]) {
            maxIndex = leftIndex;
        }

        if (rightIndex < this.heapSize && elements[rightIndex] > elements[maxIndex]) {
            maxIndex = rightIndex;
        }

        if (parent !== maxIndex) {
            const temp = elements[parent];
            elements[parent] = elements[maxIndex];
            elements[maxIndex] = temp;

            this.maxHeapify(elements, maxIndex);
        }

        return elements;
    }

    private minHeapify(elements: number[], parent: number): number[] {
        const leftIndex = parent * 2 + 1;
        const rightIndex = parent * 2 + 2;
        let minIndex = parent;

        if (leftIndex < this.heapSize && elements[leftIndex] < elements[parent]) {
            minIndex = leftIndex;
        }

        if (rightIndex < this.heapSize && elements[rightIndex] < elements[minIndex]) {
            minIndex = rightIndex;
        }

        if (parent !== minIndex) {
            const temp = elements[parent];
            elements[parent] = elements[minIndex];
            elements[minIndex] = temp;

            this.minHeapify(elements, minIndex);
        }

        return elements;
    }

    heapSort(type: "asc" | "desc"): number[] {
        if (type === 'asc') {
            let elements = this.buildMaxHeap();

            // Starting from 1 is more simple
            const firstIndex = 0;
            this.heapSize = elements.length;

            for (let i = elements.length; i >= 2; i--) {
                const lastIndex = this.heapSize - 1;
                const lastValue = elements[lastIndex];
                elements[lastIndex] = elements[firstIndex];
                elements[firstIndex] = lastValue;
                this.heapSize--;
                elements = this.maxHeapify(elements, firstIndex);
            }

            return elements;
        }
        else {
            let elements = this.buildMinHeap();

            // Starting from 1 is more simple
            const firstIndex = 0;
            this.heapSize = elements.length;

            for (let i = elements.length; i >= 2; i--) {
                const lastIndex = this.heapSize - 1;
                const lastValue = elements[lastIndex];
                elements[lastIndex] = elements[firstIndex];
                elements[firstIndex] = lastValue;
                this.heapSize--;
                elements = this.minHeapify(elements, firstIndex);
            }

            return elements;
        }
    }
}