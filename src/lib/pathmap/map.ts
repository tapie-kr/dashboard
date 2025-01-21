import { type PathMapType } from './types';

export const pathMap: PathMapType = {
  home: {
    index: '홈',
  },
  class: {
    index: '수업',
    board: {
      index: '게시판',
    },
  },
  homework: {
    index: '과제',
  },
  attendance: {
    index: '출석',
  },
  member: {
    index: '부원',
    fallback: '부원 상세',
  },
  portfolio: {
    index: '포트폴리오',
    fallback: '포트폴리오 상세',
  },
  achievement: {
    index: '수상실적',
    fallback: '수상실적 상세',
  },
  application: {
    index: '신청폼',
    fallback: '상세',
  },
  announcement: {
    index: '공지사항',
  },
  statistics: {
    index: '통계',
    site: {
      index: '사이트',
    },
    portfolio: {
      index: '포트폴리오',
    },
    profile: {
      index: '부원 프로필',
    },
  },
  metadata: {
    index: '메타데이터',
    contest: {
      index: '대회',
    },
    asset: {
      index: '에셋',
    },
    technology: {
      index: '기술',
    },
  },
} as const;
