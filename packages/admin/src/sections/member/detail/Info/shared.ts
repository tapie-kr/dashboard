import { GlyphIcon, type IconName } from '@tapie-kr/inspire-react';

export interface MemberInfoProfileLink {
  label: string;
  link:  string;
  icon:  IconName;
}

export interface MemberInfoAwards {
  contestName: string;
  gradeLabel:  string;
  grade:       number;
  memberCount: number;
}

interface Tag {
  name: string;
  icon: IconName;
}

export interface MemberInfoPortfolio {
  title:         string;
  tags:          Tag[];
  memberCount:   number;
  viewCount:     number;
  downloadCount: number;
}

export enum Skill {
  DEVELOPMENT = '개발',
  MANAGEMENT = '관리',
  ETC = '기타',
}

export const getSkillIcon = (skill: Skill): IconName => {
  switch (skill) {
    case Skill.DEVELOPMENT:
      return GlyphIcon.CODE;

    case Skill.MANAGEMENT:
      return GlyphIcon.FLAG;

    case Skill.ETC:
      return GlyphIcon.EDIT;
  }
};

export interface MemberInfoSkill {
  name: string;
  type: Skill;
  icon: IconName;
}

export interface MemberInfoHistory {
  label:       string;
  link:        string;
  isImportant: boolean;
}
