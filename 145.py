class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        if (not root):
            return []

        stack1 = [root]
        stack2 = []
        arr = []

        while (len(stack1)):
            poppedNode = stack1.pop()
            stack2.append(poppedNode)

            if (poppedNode.left):
                stack1.append(poppedNode.left)

            if (poppedNode.right):
                stack1.append(poppedNode.right)

        while len(stack2):
            poppedNode = stack2.pop()
            arr.append(poppedNode.val)


        return arr
