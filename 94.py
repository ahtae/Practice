class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        stack = []
        arr = []
        done = False
        current = root

        while (not done):
            if current:
                stack.append(current)
                current = current.left
            else:
                if (not len(stack)):
                    done = True
                else:
                    current = stack.pop()
                    arr.append(current.val)
                    current = current.right

        return arr
