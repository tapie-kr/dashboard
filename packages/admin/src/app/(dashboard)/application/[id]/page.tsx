'use client';

import {
  Filter,
  Grid,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';
import ApplicationCard from '@/components/card/application';
import Page from '@/components/page';

import { Temporal } from '@js-temporal/polyfill';
import { Unit } from '@tapie-kr/dashboard-shared/lib/enum';
import { getUnitFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { type ChangeEvent, useState } from 'react';

export default function ApplicationDetailPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Page
      hasSearch
      title='신청폼'
      count={2}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <Filter filters={[getUnitFilterGroup()]} />
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <ApplicationCard
              key={index}
              unit={Unit.DEVELOPER}
              content='안녕하세요'
              member={{
                studentId: 10404,
                name:      '권지원',
              }}
              date={Temporal.PlainDateTime.from({
                year:   2025,
                month:  3,
                day:    27,
                hour:   6,
                minute: 17,
              })}
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
