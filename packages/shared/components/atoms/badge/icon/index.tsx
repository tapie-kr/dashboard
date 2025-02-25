import {
  Badge,
  BadgeSize,
  BadgeTheme,
  BrandIcon,
} from '@tapie-kr/inspire-react';

import { BrandIconEnumToName } from './utils';

interface UnitBadgeProps {
  icon:   BrandIcon;
  theme?: BadgeTheme;
  size?:  BadgeSize;
}

export default function IconBadge(props: UnitBadgeProps) {
  const {
    icon,
    theme = BadgeTheme.MONOCHROME,
    size = BadgeSize.LARGE,
  } = props;

  return (
    <Badge.Default
      label={BrandIconEnumToName(icon)}
      theme={theme}
      size={size}
      leadingIcon={icon}
    />
  );
}
