// Pure fn
const isItemSearched = (search, text) => {
  if (search === "") {
    // If no search entered, it should pass
    return true;
  }

  let searchAry = search.toLowerCase().split(""); // Convert both to lowercase
  let textAry = text.toLowerCase().split("");

  for (let i = 0; i < textAry.length; i++) {
    if (searchAry[0] === textAry[i]) {
      // First letter match, now we check if next letter follows
      let match = true;
      for (let j = 1; j < searchAry.length; j++) {
        if (searchAry[j] !== textAry[i + j]) {
          // If next letter in the row doesn't match then turn false
          match = false;
          break; // Break out of the loop if there is a mismatch
        }
      }
      if (match) {
        // It's a match
        return true;
      }
    }
  }
  // If it hasn't returned true then return false
  return false;
};

const makeSlug = (title, id) => {
  return (
    title
      .toLowerCase() // lowercase
      .replace(/[^a-z0-9\s-]/g, "") // remove special chars
      .trim() // remove leading/trailing spaces
      .replace(/\s+/g, "-") + // spaces -> dashes
    "-" +
    id // append the ID for uniqueness
  );
};

export { isItemSearched, makeSlug };
