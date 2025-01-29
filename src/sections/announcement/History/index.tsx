import AnnouncementCard from '@/components/card/announcement';

import { Temporal } from '@js-temporal/polyfill';
import { Grid, spacingVars, StackAlign, Typo, VStack, Weight } from '@tapie-kr/inspire-react';

export default function AnnouncementHistorySection() {
  return (
    <VStack
      spacing={spacingVars.medium}
      align={StackAlign.START}
    >
      <Typo.Medium weight={Weight.SEMIBOLD}>기록</Typo.Medium>
      <Grid
        columnCount={3}
        gap={spacingVars.petite}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <AnnouncementCard
            key={index}
            content={'룰렛 안걸려서 오늘 수업 없습니다. 집으로 귀가하세요'}
            isSent
            isNotice
            date={Temporal.PlainDateTime.from({
              year: 2025,
              month: 3,
              day: 27,
              hour: 6,
              minute: 17,
            })}
          />
        ))}
      </Grid>
    </VStack>
  );
}
