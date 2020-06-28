import { Bookmark } from 'utils/api/api.interfaces';
import { clone } from 'ramda';

export const getNode = (id: number, tree: Bookmark[]): Bookmark | null => {
  const tempTree = clone(tree);

  const foundNode = tempTree.reduce((acc: Bookmark | null, node) => {
    if (acc !== null) {
      return acc;
    } else if (node.id === id) {
      return node;
    } else if (node.items?.length) {
      return getNode(id, node.items);
    }

    return null;
  }, null);

  return foundNode;
};

export const addNode = (
  parentId: number | null,
  node: Bookmark,
  tree: Bookmark[],
): Bookmark[] => {
  let tempTree: Bookmark[] = clone(tree);

  if (parentId === null) {
    tempTree.push(node);

    return tempTree;
  }

  tempTree = tempTree.map((treeNode) => {
    if (treeNode.id === parentId && treeNode.items !== undefined) {
      const tempTreeNode = clone(treeNode);
      tempTreeNode.items!.push(node);

      return tempTreeNode;
    } else if (treeNode.items !== undefined) {
      treeNode.items = addNode(parentId, node, treeNode.items);
    }

    return treeNode;
  });

  return tempTree;
};

export const removeNode = (
  nodeId: number,
  tree: Bookmark[],
  index = 0,
): Bookmark[] => {
  let tempTree: Bookmark[] = clone(tree);

  tempTree = tempTree.reduce((acc, treeNode) => {
    const tempAcc = clone(acc);
    const tempTreeNode = clone(treeNode);

    if (tempTreeNode.id !== nodeId) {
      if (tempTreeNode.items) {
        tempTreeNode.items = removeNode(nodeId, tempTreeNode.items, index + 1);
      }

      tempAcc.push(tempTreeNode);
    }

    return tempAcc;
  }, [] as Bookmark[]);

  return tempTree;
};

export const isDirectParent = (
  nodeId: number,
  parentId: number | null,
  tree: Bookmark[],
) => {
  const items =
    parentId === null ? clone(tree) : getNode(parentId, tree)?.items;

  if (items === undefined) {
    throw Error('Node not found or is not a folder');
  }

  return items.some((item) => {
    return item.id === nodeId;
  });
};
