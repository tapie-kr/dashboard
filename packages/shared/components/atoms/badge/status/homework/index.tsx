import { Badge, BadgeSize } from '@tapie-kr/inspire-react';

import { HomeworkStatus } from '~/lib/enum';
import { getHomeworkStatusIcon, getHomeworkStatusTheme } from '~/lib/enum/utils';

interface StatusBadgeProps {
  status: HomeworkStatus;
  size?:  BadgeSize;
}

export default function HomeworkStatusBadge(props: StatusBadgeProps) {
  const { status, size = BadgeSize.LARGE } = props;

  return (
    <Badge.Default
      size={size}
      theme={getHomeworkStatusTheme(status)}
      label={status}
      leadingIcon={getHomeworkStatusIcon(status)}
    />
  );
}
