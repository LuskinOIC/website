export default function mergeAndSortArrays(array1: any, array2: any) {
  const combinedArray = [...array1, ...array2];

  combinedArray.sort((a, b) => {
    const dateA = new Date(a.date || a.eventDate).getTime();
    const dateB = new Date(b.date || b.eventDate).getTime();

    return dateB - dateA;
  });

  return combinedArray;
}
