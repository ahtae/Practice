// 83. Remove Duplicates from Sorted List

const deleteDuplicates = (head) => {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
