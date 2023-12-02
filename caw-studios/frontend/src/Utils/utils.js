export const getFixedNumberOfWords = (inputString, numberOfWords) => {
  const wordsArray = inputString.split(" ");
  const selectedWords = wordsArray.slice(0, numberOfWords);
  const result = selectedWords.join(" ");
  return result;
};

export const addNewOrder=()=>{
  return {
      productName: "Chicken Breast Fillets Boneless mattu maMarinated 6 Ounce Raw,Invivid",
      brand: "hormel Black Lebelmany",
      price: 60.67,
      quantity: 0,
      status: false
  }
}