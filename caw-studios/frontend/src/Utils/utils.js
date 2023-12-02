export const getFixedNumberOfWords = (inputString, numberOfWords) => {
  const wordsArray = inputString.split(" ");
  const selectedWords = wordsArray.slice(0, numberOfWords);
  const result = selectedWords.join(" ");
  return result;
};
