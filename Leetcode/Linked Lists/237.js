// 237. Delete Node in a Linked List

const deleteNode = (node) => {
  node.val = node.next.val;
  node.next = node.next.next;
};

// Time Complexity: O(1)
// Space Complexity: O(1)
