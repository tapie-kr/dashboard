import { Badge, BadgeSize } from '@tapie-kr/inspire-react';

import { type Status } from '~/lib/enum';
import { getStatusIcon, getStatusTheme } from '~/lib/enum/utils';

interface StatusBadgeProps {
  status: Status;
  size?:  BadgeSize;
}

export default function StatusBadge(props: StatusBadgeProps) {
  const { status, size = BadgeSize.LARGE } = props;

  return (
    <Badge.Default
      size={size}
      theme={getStatusTheme(status)}
      label={status}
      leadingIcon={getStatusIcon(status)}
    />
  );
}
