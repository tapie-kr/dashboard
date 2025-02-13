import { type pathMap } from './map';

type BasePathNode = {
  index: string;
  fallback?: BasePathNode;
};

type PathNode = {
  [key: string]: PathNode | string | undefined;
} & BasePathNode;

export type PathNodeMap = Record<keyof typeof pathMap, PathNode>;
export type PathMapType = typeof pathMap;
