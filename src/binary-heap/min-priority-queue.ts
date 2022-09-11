import { BinaryHeap } from "./binary-heap.ts";

export default class MinPriorityQueue {
    private binaryHeap!: BinaryHeap;

    constructor(private elements: number[]) {
        this.binaryHeap = new BinaryHeap(elements);
        elements = this.binaryHeap.heapSort("asc");
    }

    getElements(): number[] {
        return this.elements;
    }

    /**
     * Ritorna il valore minimo della coda, cioé il primo.
     */
    minimum(): number | null {
        if (this.elements.length === 0) {
            return null;
        }

        return this.elements[0];
    }

    /**
     * Estrare il minimo valore dalla coda.
     * Estraendolo bisogna ribilanciare l'albero, tuttavia questo non fa si che
     * l'albero sia ordinato, semplicemente rispetterá la condizione di MinHeap.
     */
    extractMin(): number | null {
        if (this.elements.length === 0) {
            return null;
        }

        // The minimum value is the first
        const min = this.elements[0];

        const lastIndex = this.elements.length - 1
        this.elements[0] = this.elements[lastIndex];
        this.elements.splice(lastIndex, 1);

        // Re heapify the values
        this.binaryHeap.minHeapify(this.elements, 0);

        return min;
    }

    /**
     * Decrementa la chiave specificata con un nuovo valore.
     * Se il valore della chiave é superiore nessuna operazione viene eseguita.
     * Alla sostituzione potrebbe verificarsi la condizione per cui il nuovo valore
     * é minore rispetto al padre, quindi la condizione di MinHeap non sarebbe
     * piú soddisfatta. É necessario quindi attraversare tutti i padri per trovare
     * il posto piú appropriato per il nuovo valore.
     * Questo metodo non ordina l'albero, semplicemente rispetta la proprietá 
     * di MinHeap.
     */
    decreaseKey(key: number, value: number): void {
        if (this.elements[key] < value) {
            console.log("NOOP");
            return;
        }

        this.elements[key] = value;
        let parent = ~~(key / 2);
        while (key > 0 && this.elements[parent] < this.elements[key]) {
            const temp = this.elements[parent];
            this.elements[parent] = this.elements[key];
            this.elements[key] = temp;

            parent = ~~(parent / 2);
        }
    }

    /**
     * L'inserimento espande prima l'array e successivamente decrementa la nuova
     * chiave con il valore, in questo modo la proprietá di MinHeap é rispettata.
     * Questo metodo non ordina l'albero, semplicemente rispetta la proprietá 
     * di MinHeap.
     */
    insert(value: number): void {
        this.elements[this.elements.length] = +Infinity;
        this.decreaseKey(this.elements.length - 1, value);
    }

    sort(): void {
        this.binaryHeap.heapSort("asc");
    }
}