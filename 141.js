const hasCycle = (head) => {
  if (!head) {
    return false;
  }

  let turtle = head;
  let hare = head.next ? head.next : null;

  while (turtle !== hare) {
    if (hare === null || hare.next === null) {
      return false;
    }

    turtle = turtle.next;
    hare = hare.next.next;
  }

  return true;
};
