// 19. Remove Nth Node From End of List

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1);
  let hare = dummy;
  let turtle = dummy;

  dummy.next = head;

  while (hare.next) {
    hare = hare.next;

    if (n-- <= 0) {
      turtle = turtle.next;
    }
  }

  turtle.next = turtle.next.next;

  return dummy.next;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
