import { pathMap } from './map';
import { type PathMapType, type PathNode } from './types';

export function isPathNode(value: unknown): value is PathNode {
  return typeof value === 'object' && value !== null;
}

export const getSubItems = (path: PathNode): { title: string; href: string }[] => {
  const entries = Object.entries(path);

  const filtered = entries.filter(([key, value]) => {
    return key !== 'index' && key !== 'fallback' && isPathNode(value);
  });

  const result = filtered.map(([key, value]) => {
    const node = value as PathNode;
    return {
      title: node.index || key,
      href: key,
    };
  });

  return result;
};

export const getPath = (value: PathNode | string | undefined): string => {
  if (!value) return '';
  if (typeof value === 'string') return value;

  if (value === pathMap.home) return '/';

  const findPathSegments = (
    root: PathMapType | PathNode,
    target: PathNode | string,
    segments: string[] = [],
  ): string[] | null => {
    for (const [key, val] of Object.entries(root)) {
      if (val === target) {
        return [...segments, key];
      }

      if (isPathNode(val)) {
        const result = findPathSegments(val, target, [...segments, key]);
        if (result) return result;
      }
    }
    return null;
  };

  const segments = findPathSegments(pathMap, value);
  if (!segments) return '';

  if (segments.length === 1 && segments[0] === 'home') {
    return '/';
  }

  return '/' + segments.join('/');
};

export const getPathNode = (path: string): PathNode | undefined => {
  if (path === '/' || path === '') {
    return pathMap.home;
  }

  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return undefined;

  const firstSegment = segments[0];
  let currentNode: PathNode | undefined;

  if (firstSegment in pathMap) {
    const rootNode = pathMap[firstSegment as keyof PathMapType];
    if (isPathNode(rootNode)) {
      currentNode = rootNode;
    }
  }

  return segments.slice(1).reduce<PathNode | undefined>((node, segment) => {
    if (!node) return undefined;
    const next = node[segment];
    return isPathNode(next) ? next : undefined;
  }, currentNode);
};

export const getPathList = (path: string): { title: string; href: string }[] => {
  if (path === '/') {
    return [];
  }

  const segments = path.split('/').filter(Boolean);
  const result: { title: string; href: string }[] = [];
  let currentNode: PathNode | undefined;

  segments.forEach((segment, index) => {
    const currentPath = '/' + segments.slice(0, index + 1).join('/');

    if (index === 0) {
      if (segment in pathMap) {
        const rootNode = pathMap[segment as keyof PathMapType];
        if (isPathNode(rootNode)) {
          result.push({
            title: rootNode.index || segment,
            href: currentPath,
          });
          currentNode = rootNode;
        }
      }
      return;
    }

    if (!currentNode) return;

    const nextNode = currentNode[segment];
    if (isPathNode(nextNode)) {
      result.push({
        title: nextNode.index || segment,
        href: currentPath,
      });
      currentNode = nextNode;
    } else {
      let fallbackNode = currentNode;
      let depth = 0;
      let remainingSegments = segments.length - index;

      while (fallbackNode?.fallback && remainingSegments > 0) {
        const fallbackPath = '/' + segments.slice(0, index + depth + 1).join('/');
        result.push({
          title: fallbackNode.fallback.index || segments[index + depth],
          href: fallbackPath,
        });
        fallbackNode = fallbackNode.fallback;
        remainingSegments--;
        depth++;
      }

      currentNode = undefined;
    }
  });

  return result;
};

export const resolvePath = (
  pathNode: PathNode,
  ...segments: (string | number | boolean)[]
): string => {
  return getPath(pathNode) + '/' + segments.join('/');
};
