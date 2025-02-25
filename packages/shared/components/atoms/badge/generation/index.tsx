import {
  Badge,
  BadgeSize,
  BadgeTheme,
  GlyphIcon,
} from '@tapie-kr/inspire-react';

interface UnitBadgeProps {
  generation: number;
  theme?:     BadgeTheme;
  size?:      BadgeSize;
}

export default function GenerationBadge(props: UnitBadgeProps) {
  const {
    generation,
    theme = BadgeTheme.MONOCHROME,
    size = BadgeSize.LARGE,
  } = props;

  return (
    <Badge.Default
      label={`${generation}기`}
      theme={theme}
      size={size}
      leadingIcon={GlyphIcon.SCHOOL}
    />
  );
}
