// 234. Palindrome Linked List

var isPalindrome = function (head) {
  const arr = [];
  let currentNode = head;

  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      return false;
    }
  }

  return true;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

var isPalindrome = function (head) {
  if (!head) {
    return true;
  }

  let turtle = head;
  let hare = head;

  while (hare && hare.next) {
    turtle = turtle.next;
    hare = hare.next.next;
  }

  hare = head;
  turtle = reverse(turtle);

  while (hare && hare.next) {
    if (hare.val !== turtle.val) {
      return false;
    }

    hare = hare.next;
    turtle = turtle.next;
  }

  return true;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

const reverse = (head) => {
  let previousNode = null;

  while (head !== null) {
    let nextNode = head.next;

    head.next = previousNode;
    previousNode = head;
    head = nextNode;
  }

  return previousNode;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
