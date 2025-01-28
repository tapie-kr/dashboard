import { Segment, SegmentGroup } from '@tapie-kr/inspire-react';
import { Contest } from '@/lib/enum';
import { getContestIcon } from '@/lib/enum/utils';

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
