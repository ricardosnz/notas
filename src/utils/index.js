export const getMaxId = (elements) => {
  if (!elements.length) return 1;
  let elementsId;
  if (!!elements[0].id) elementsId = elements.map((elem) => elem.id);
  else elementsId = elements;
  return Math.max(...elementsId) + 1;
};
