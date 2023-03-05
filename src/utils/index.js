export const getMaxId = (elements) => {
  if (!elements.length) return 1;
  let elementsId;
  if (!!elements[0].id) elementsId = elements.map((elem) => elem.id);
  else elementsId = elements;
  return Math.max(...elementsId) + 1;
};

export const saveTodos = (newContent) => {
  const parsedContent = JSON.stringify(newContent);
  localStorage.setItem('TODOV1', parsedContent);
};

export const getTodos = () => {
  const todos = localStorage.getItem('TODOV1');
  if (!todos) return [];
  return JSON.parse(todos);
};
