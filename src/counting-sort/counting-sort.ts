export default function countingSort(elements: number[], maxValue: number): number[] {
    const totalElements = elements.length;
    const cache: number[] = new Array(maxValue);

    // Inizializza l'array di cache a 0, tenendo conto del valore massimo possibile
    for (let i = 0; i <= maxValue; i++) {
        cache[i] = 0;
    }

    // Ad ogni indice della cache assegna il numero di massimo di valori per cui si presenta quell'indice 
    // (es. quante volte si presenta il valore 0 (indice 0)?)
    for (let i = 0; i < totalElements; i++) {
        const value = elements[i];
        cache[value] = cache[value] + 1;
    }

    // Calcoliamo quandi numeri sono presenti <= del valore stesso, dato che per fare questo sommiamo
    // il valore dell'indice con il suo precedente, possiamo saltare il primo elemento
    for (let i = 1; i < cache.length; i++) {
        const value = cache[i];
        cache[i] = value + cache[i - 1];
    }

    // Possiamo quindi ciclando l'array al contrario posizionare i valori nella cache correttamente all'interno
    // dell'array, diminuendo di 1 ad ogni ciclo
    const sortedElements: number[] = new Array(totalElements);
    for (let i = totalElements - 1; i >= 0; i--) {
        const cachedIndex = elements[i];
        const cachedValue = cache[cachedIndex] - 1;
        sortedElements[cachedValue] = cachedIndex;
        cache[cachedIndex] = cache[cachedIndex] - 1;
    }

    return sortedElements;
}