type BasePathNode = {
  index: string;
  fallback?: string;
};

type PathNodeObject<T> = {
  [K in keyof T]: T[K] extends { index: string } ? PathNode : T[K] extends string ? string : never;
};

type PathNode = BasePathNode & {
  [key: string]: PathNode | string | undefined;
};

type PathMapStructure = {
  home: PathNode;
  class: PathNode & {
    board: PathNode;
  };
  homework: PathNode;
  attendance: PathNode;
  member: PathNode;
  portfolio: PathNode;
  achievement: PathNode;
  application: PathNode;
  announcement: PathNode;
  statistics: PathNode & {
    site: PathNode;
    portfolio: PathNode;
    profile: PathNode;
  };
  metadata: PathNode & {
    contest: PathNode;
    asset: PathNode;
    technology: PathNode;
  };
};

export type PathMapType = PathNodeObject<PathMapStructure>;
