# Binary heap

## IT

### Riassunto
- Albero binario
- I riferimenti agli elementi seguono queste regole (dato il primo elemento con indice i = 1):
    - Parent(i) = i/2
    - Left(i) = 2i
    - Right(i) = 2i+1

- Dato il primo elemento con indice 1 = 2:
    - Left(i) = 2i+1
    - Right(i) = 2i+2

### Max-heapify
Crea la struttura ad albero il cui primo elemento é il valore maggiore delle foglie. Non é detto comunque che i valori siano ordinati, semplicemente ogni padre é il valore maggiore dei suoi rami figli.

#### Algoritmo
Dato un array A di numeri interi e i l'indice del padre:

MAX-HEAPIFY(A, i)
1. l = LEFT(i)
2. r = RIGHT(i)
3. IF l <= A.lenght AND A[l] > A[i]
    max = i
4. IF r <= A.lenght AND [r] > A[max]
    max = r
5. IF max != i
    A[i] = A[max]
    MAX-HEAPIFY(A, max)

### Heapsort
Crea una albero binario ordinato

#### Algoritmo
1. BUILD-(MIN|MAX)-HEAPIFY(A)
2. FOR i = A.length DOWNTO 2
    scambio A[A.lenght - 1] con A[i]
    (MIN|MAX)-HEAPIFY(A, 1)