
/**
 * Quicksort
 */
export default function quickSort(elements: number[], direction: "asc" | "desc" = "asc"): number[] {
    return sort(elements, 0, elements.length - 1, direction);
}

function sort(elements: number[], first: number, last: number, direction: "asc" | "desc" = "asc"): number[] {
    if (first < last) {
        const pivot = partition(elements, first, last, direction);
        sort(elements, first, pivot, direction);
        sort(elements, pivot + 1, last, direction);
    }

    return elements;
}

function partition(elements: number[], first: number, last: number, direction: "asc" | "desc" = "asc"): number {
    const pivot = elements[last];
    let index = first - 1;

    for (let j = first; j < last; j++) {
        const value = elements[j];
        const needSwitch = (direction === 'asc') ? value <= pivot : value >= pivot;

        if (needSwitch) {
            index++;
            const temp = elements[index];
            elements[index] = value;
            elements[j] = temp;
        }
    }

    const temp = elements[index + 1];
    elements[index + 1] = pivot;
    elements[last] = temp;

    return index++;
}