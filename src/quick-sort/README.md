# Quicksort

Quicksort é un ordinamento molto efficiente che si basa sull'algoritmo Divide et impera.

Il funziomamento é molto semplice, lo scopo é suddividere in maniera ricorsiva un array di elementi in due sotto array, ognuno dei quali avrá tutti i suoi elementi minori o maggiori di un valore intermedio (detto pivot); questa operazione é detta PARTITION;

Il pivot puó essere preso dall'ultimo elemento dell'array nel caso piú semplice, ad un elemento random nel caso piú complesso.

Dato un array A di n elementi, si otterranno quindi due sottoarray formati:
```
pivot = A[lastIndex];
A1 = [] dove ogni elemento é < di pivot
A2 = [] dove ogni elemento é > di pivot
```

Ciclando in maniera ricorsiva entrambi i sottoarray si otterranno sempre dei
sottorray piú piccoli, ognuno dei quali si ordinerá mano a mano che si va in profonditá nella ricorsione.

Non é necessario combinare gli array dato che QuickSort effettua la sosituzione sul posto degli elementi, la quantitá massima di memoria utilizzata per l'ordinamento quindi é la memoria stessa occupata dall'array.
 