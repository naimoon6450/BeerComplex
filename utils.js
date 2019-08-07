export const convertEmptyToNull = object => {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key] === '') {
        object[key] = null;
      }
    }
  }
  return object;
};

export const truncate = (desc, someHeight) => {
  // double height length
  const max = 2 * someHeight;
  if (desc.length > max) {
    return `${desc.slice(0, max)}...`;
  }
  return desc;
};
