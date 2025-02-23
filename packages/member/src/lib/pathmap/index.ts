import { PathMap } from '@tapie-kr/dashboard-shared/lib/pathmap';
import { PathNode } from '@tapie-kr/dashboard-shared/lib/pathmap/types';

export const path = {
  home:      { index: '홈' },
  classroom: {
    index:    '수업',
    lecture:  { index: '수업' },
    homework: { index: '과제' },
    board:    { index: '게시물' },
    fallback: { index: '상세' },
  },
  application: { index: '앱' },
} as const satisfies {
  [key: string]: PathNode;
};

export const sidebarMap  = [
  path.home,
  {
    title:    '강의',
    children: [path.classroom],
  },
  {
    title:    '기타',
    children: [path.application],
  },
];

export const pathMap = new PathMap(path);
