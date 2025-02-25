'use client';

import {
  Button,
  ButtonSize,
  Filter,
  GlyphIcon,
  Grid,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  VStack,
} from '@tapie-kr/inspire-react';
import AchievementCard from '@/components/card/achievement';
import Page from '@/components/page';

import { Temporal } from '@js-temporal/polyfill';
import { usePrivateAwardList } from '@tapie-kr/api-client';
import { Contest } from '@tapie-kr/dashboard-shared/lib/enum';
import { getContestFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { toTemporalDate } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { type ChangeEvent, useEffect, useState } from 'react';
import SkeletonAchievementCard from '@/components/card/achievement/Skeleton';

export default function AchievementPage() {
  const [searchValue, setSearchValue] = useState('');

  const {
    data,
    isPending,
    fetch,
  } = usePrivateAwardList();

  useEffect(() => {
    fetch();
  }, []);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Page
      hasSearch
      title='수상실적'
      count={7}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.moderate}
        align={StackAlign.START}
      >
        <HStack
          fullWidth
          justify={StackJustify.BETWEEN}
          align={StackAlign.START}
        >
          <Filter filters={[getContestFilterGroup()]} />
          <Button.Default
            size={ButtonSize.SMALL}
            leadingIcon={GlyphIcon.ADD}
          >
            수상실적 등록
          </Button.Default>
        </HStack>
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {isPending && <SkeletonAchievementCard />}
          {data?.data.map((award, idx) => (
            <AchievementCard
              key={idx}
              contestName={award.title}
              contestType={Contest.INTERNAL}
              year={Temporal.PlainDate.from(toTemporalDate(award.rewardedAt)).year}
              grade={{
                grade:      award.grade,
                gradeLabel: award.gradeLabel,
              }}
              members={award.members.map(member => ({
                name:      member.name,
                studentId: member.uuid,
              }))}
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
