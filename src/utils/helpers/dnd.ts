export const getClosestDroppable = (eventTarget: Element) => {
  const closestDroppable = eventTarget.closest('*[id^=droppable-]');

  if (closestDroppable === null) {
    throw Error('Closest droppable not found');
  }

  return closestDroppable as HTMLElement;
};

export const getClosestDroppableId = (eventTarget: Element) => {
  const closestDroppable = getClosestDroppable(eventTarget);

  if (closestDroppable.id === '') {
    throw Error('Closest droppable ID not found');
  }

  return closestDroppable.id;
};

export const pullNumberFromText = (text: string) => {
  const matches = text.match(/\d+/);

  return matches && Number.parseInt(matches[0]);
};

export const getNodeId = (eventTarget: Element) => {
  const closestDroppableNodeId = getClosestDroppableId(eventTarget);

  return pullNumberFromText(closestDroppableNodeId);
};
