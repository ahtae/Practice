// 328. Odd Even Linked List

const oddEvenList = (head) => {
  if (!head) {
    return null;
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
