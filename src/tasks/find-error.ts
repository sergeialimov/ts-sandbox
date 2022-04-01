function remove<ItemType>(itemToRemove: ItemType, array: Array<ItemType>): Array<ItemType> {
  return array.filter((item) => item !== itemToRemove);
}

const res = remove(1, [1, 2, 3]);

console.log(res);


// return type was incorrect
