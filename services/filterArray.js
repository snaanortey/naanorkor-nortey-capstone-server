function filterArray(array, value1, value2, value3) {
  return array.filter((element) => {
    return element != value1 && element != value2 && element != value3;
  });
}

module.exports = {filterArray};
