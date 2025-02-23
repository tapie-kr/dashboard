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

import { type ChangeEvent, useState } from 'react';
import { Contest } from '@/lib/enum';
import { getContestFilterGroup, getUnitFilterGroup } from '@/lib/enum/utils';

export default function AchievementPage() {
  const [searchValue, setSearchValue] = useState('');

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
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <HStack
          fullWidth
          justify={StackJustify.BETWEEN}
          align={StackAlign.START}
        >
          <Filter filters={[getContestFilterGroup(), getUnitFilterGroup()]} />
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
          {Array.from({ length: 7 }).map((_, index) => (
            <AchievementCard
              key={index}
              contestName='24th 앱잼 생활'
              contestType={Contest.INTERNAL}
              year={2025}
              grade={{
                grade:      1,
                gradeLabel: '최우수상',
              }}
              members={[
                {
                  name:      '한유찬',
                  studentId: 10000,
                },
                {
                  name:      '신유준',
                  studentId: 10000,
                },
              ]}
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
