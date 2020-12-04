// 876. Middle of the Linked List

const middleNode = (head) => {
  let current = head;
  let length = 0;
  let i = 0;

  while (current) {
    length++;
    current = current.next;
  }

  current = head;
  i = 0;
  let middleIndex = Math.floor(length / 2);

  while (i < middleIndex) {
    i++;
    current = current.next;
  }

  return current;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
