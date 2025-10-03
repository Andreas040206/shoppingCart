// Pure fn
const addToShoppingCart = (newItem, state, setFn) => {
  let newShoppingCart = [...state];

  let itemAdded = false;

  if (newShoppingCart.length !== 0) {
    newShoppingCart.forEach((item) => {
      if (item.info.id === newItem.id) {
        // If we are trying to add an item that have allready been added, just increment the amount
        item.amount++;
        itemAdded = true;
      }
    });
  }
  if (itemAdded === false) {
    // We need to add a new object
    newShoppingCart.push({ info: newItem, amount: 1 });
  }
  setFn(newShoppingCart);
};

const removeFromShoppingCart = (removedItem, state, setFn) => {
  let newShoppingCart = [...state];

  newShoppingCart.reduce((index, item) => {
    if (item.info.id === removedItem.id) {
      // If it's the right item to remove
      newShoppingCart.splice(index, 1);
    }
    return index + 1;
  }, 0);

  setFn(newShoppingCart);
};

const decreaseItemFromShoppingCart = (removedItem, state, setFn) => {
  let newShoppingCart = [...state];

  newShoppingCart.reduce((index, item) => {
    if (item.info.id === removedItem.id) {
      // If it's the right item to remove
      item.amount--;

      if (item.amount <= 0) {
        newShoppingCart.splice(index, 1);
      }
    }

    return index + 1;
  }, 0);

  setFn(newShoppingCart);
};

export {
  addToShoppingCart,
  removeFromShoppingCart,
  decreaseItemFromShoppingCart,
};
