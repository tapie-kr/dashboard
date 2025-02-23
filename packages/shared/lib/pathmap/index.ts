import { type PathMapType, type PathNode } from './types';

export class PathMap {
  private map: PathMapType;

  constructor(pathMap: PathMapType) {
    this.map = pathMap;
  }
  private isPathNode(value: unknown): value is PathNode {
    return typeof value === 'object' && value !== null;
  }
  public getPath(value: PathNode | string | undefined): string {
    if (!value) return '';

    if (typeof value === 'string') return value;

    if (value === this.map.home) return '/';

    const findPathSegments = (root: PathMapType | PathNode,
      target: PathNode | string,
      segments: string[] = []): string[] | null => {
      for (const [key, val] of Object.entries(root)) {
        if (val === target) {
          return [...segments, key];
        }

        if (this.isPathNode(val)) {
          const result = findPathSegments(val, target, [...segments, key]);

          if (result) return result;
        }
      }

      return null;
    };

    const segments = findPathSegments(this.map, value);

    if (!segments) return '';

    if (segments.length === 1 && segments[0] === 'home') {
      return '/';
    }

    return '/' + segments.join('/');
  }
  public getSubItems(path: PathNode): {
    title: string; href: string;
  }[] {
    const entries = Object.entries(path);

    const filtered = entries.filter(([key, value]) => {
      return key !== 'index' && key !== 'fallback' && this.isPathNode(value);
    });

    const result = filtered.map(([key, value]) => {
      const node = value as PathNode;

      return {
        title: node.index || key,
        href:  key,
      };
    });

    return result;
  }
  public getPathNode(path: string): PathNode | undefined {
    if (path === '/' || path === '') {
      return this.map.home;
    }

    const segments = path.split('/').filter(Boolean);

    if (segments.length === 0) return undefined;

    const firstSegment = segments[0];

    let currentNode: PathNode | undefined;

    if (firstSegment in this.map) {
      const rootNode = this.map[firstSegment as keyof PathMapType];

      if (this.isPathNode(rootNode)) {
        currentNode = rootNode;
      }
    }

    return segments.slice(1).reduce<PathNode | undefined>((node, segment) => {
      if (!node) return undefined;

      const next = node[segment];

      return this.isPathNode(next) ? next : undefined;
    }, currentNode);
  }
  public getPathList(path: string): {
    title: string; href: string;
  }[] {
    if (path === '/') {
      return [];
    }

    const segments = path.split('/').filter(Boolean);

    const result: {
      title: string; href: string;
    }[] = [];

    let currentNode: PathNode | undefined;

    segments.forEach((segment, index) => {
      const currentPath = '/' + segments.slice(0, index + 1).join('/');

      if (index === 0) {
        if (segment in this.map) {
          const rootNode = this.map[segment as keyof PathMapType];

          if (this.isPathNode(rootNode)) {
            result.push({
              title: rootNode.index || segment,
              href:  currentPath,
            });

            currentNode = rootNode;
          }
        }

        return;
      }

      if (!currentNode) return;

      const nextNode = currentNode[segment];

      if (this.isPathNode(nextNode)) {
        result.push({
          title: nextNode.index || segment,
          href:  currentPath,
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
            href:  fallbackPath,
          });

          fallbackNode = fallbackNode.fallback;

          remainingSegments--;

          depth++;
        }

        currentNode = undefined;
      }
    });

    return result;
  }
  public resolvePath(pathNode: PathNode,
    ...segments: (string | number | boolean)[]): string {
    return this.getPath(pathNode) + '/' + segments.join('/');
  }
}
