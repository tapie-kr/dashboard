'use client';

import ApplicationCard from '@/components/card/application';
import PageTemplate from '@/components/page-template';

import { Temporal } from '@js-temporal/polyfill';
import { Filter, Grid, spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import { type ChangeEvent, useState } from 'react';
import { Unit } from '@/lib/enum';
import { getUnitFilterGroup } from '@/lib/enum/utils';

export default function ApplicationDetailPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <PageTemplate
      title={'신청폼'}
      count={2}
      hasSearch
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        spacing={spacingVars.jumbo}
        fullWidth
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
              member={{ studentId: 10404, name: '권지원' }}
              unit={Unit.DEVELOPER}
              content={'안녕하세요'}
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
    </PageTemplate>
  );
}
