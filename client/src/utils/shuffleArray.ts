export const shuffleArray = (array: string[]) => {
  let i = array.length - 1;
  let arr2 = [...array];
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr2[i];
    arr2[i] = arr2[j];
    arr2[j] = temp;
  }
  return arr2;
};
