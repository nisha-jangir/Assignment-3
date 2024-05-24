function countFrequencies(arr) {
  const frequency = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }

  return frequency;
}
