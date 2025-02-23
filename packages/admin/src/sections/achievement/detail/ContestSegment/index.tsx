import { Segment, SegmentGroup } from '@tapie-kr/inspire-react';

import { Contest } from '@tapie-kr/dashboard-shared/lib/enum';
import { getContestIcon } from '@tapie-kr/dashboard-shared/lib/enum/utils';

export default function AchievementDetailContestSegment() {
  return (
    <SegmentGroup defaultValue={Contest.INTERNAL}>
      <Segment
        leadingIcon={getContestIcon(Contest.INTERNAL)}
        label={Contest.INTERNAL}
        value={Contest.INTERNAL}
      />
      <Segment
        leadingIcon={getContestIcon(Contest.EXTERNAL)}
        label={Contest.EXTERNAL}
        value={Contest.EXTERNAL}
      />
    </SegmentGroup>
  );
}
