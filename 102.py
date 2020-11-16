class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if (not root):
            return []

        queue = [root]
        arr = []

        while (len(queue)):
            level = []

            for i in range(0, len(queue)):
                shiftedNode = queue.pop(0)
                level.append(shiftedNode.val)

                if (shiftedNode.left):
                    queue.append(shiftedNode.left)

                if (shiftedNode.right):
                    queue.append(shiftedNode.right)

            arr.append(level)

        return arr
