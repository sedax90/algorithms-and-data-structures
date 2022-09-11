import { BinaryHeap } from "./binary-heap.ts";

export default class MaxPriorityQueue {
    private binaryHeap!: BinaryHeap;

    constructor(private elements: number[]) {
        this.binaryHeap = new BinaryHeap(elements);
        elements = this.binaryHeap.heapSort("desc");
    }

    getElements(): number[] {
        return this.elements;
    }

    /**
     * Ritorna il valore massimo della coda, cioé il primo.
     */
    maximum(): number | null {
        if (this.elements.length === 0) {
            return null;
        }

        return this.elements[0];
    }

    /**
     * Estrare il massimo valore dalla coda.
     * Estraendolo bisogna ribilanciare l'albero, tuttavia questo non fa si che
     * l'albero sia ordinato, semplicemente rispetterá la condizione di MaxHeap.
     */
    extractMax(): number | null {
        if (this.elements.length === 0) {
            return null;
        }

        // The maximum value is the first
        const max = this.elements[0];

        // Remove from the list
        const lastIndex = this.elements.length - 1;

        this.elements[0] = this.elements[lastIndex];
        this.elements.splice(lastIndex, 1);
        this.binaryHeap.setElements(this.elements);

        // Re heapify the values
        this.binaryHeap.maxHeapify(this.elements, 0);

        return max;
    }

    /**
     * Incrementa la chiave specificata con un nuovo valore.
     * Se il valore della chiave é inferiore nessuna operazione viene eseguita.
     * Alla sostituzione potrebbe verificarsi la condizione per cui il nuovo valore
     * é maggiore rispetto al padre, quindi la condizione di MaxHeap non sarebbe
     * piú soddisfatta. É necessario quindi attraversare tutti i padri per trovare
     * il posto piú appropriato per il nuovo valore.
     * Questo metodo non ordina l'albero, semplicemente rispetta la proprietá 
     * di MaxHeap.
     */
    increaseKey(key: number, value: number): void {
        if (key > this.elements.length - 1) {
            throw new Error("Array overflow");
        }

        const oldValue = this.elements[key];
        if (value < oldValue) {
            console.log("NOOP");
            return;
        }

        this.elements[key] = value;

        let parentKey = ~~(key / 2);
        while (key > 0 && this.elements[parentKey] < this.elements[key]) {
            const temp = this.elements[parentKey];
            this.elements[parentKey] = this.elements[key];
            this.elements[key] = temp;

            parentKey = ~~(parentKey / 2);
        }
    }

    /**
     * L'inserimento espande prima l'array e successivamente incrementa la nuova
     * chiave con il valore, in questo modo la proprietá di MaxHeap é rispettata.
     * Questo metodo non ordina l'albero, semplicemente rispetta la proprietá 
     * di MaxHeap.
     */
    insert(value: number): void {
        this.elements[this.elements.length] = -Infinity;
        this.increaseKey(this.elements.length - 1, value);
    }

    sort(): void {
        this.binaryHeap.heapSort("desc");
    }
}