import { BadgeTheme, GlyphIcon, type IconName } from '@tapie-kr/inspire-react';
import { type Garde } from '.';

export const getGradeTheme = (grade: Garde): BadgeTheme => {
  const gradeTheme: {
    [key in number]: BadgeTheme;
  } = {
    [1]: BadgeTheme.RED,
    [2]: BadgeTheme.YELLOW,
    [3]: BadgeTheme.BLUE,
  };

  return gradeTheme[grade.grade] || BadgeTheme.MONOCHROME;
};

export const getGradeIcon = (): IconName => {
  return GlyphIcon.TROPHY;
};
