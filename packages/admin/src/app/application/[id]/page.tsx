'use client';

import {
  Filter,
  Grid,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';
import ApplicationCard from '@/components/card/application';
import Page from '@/components/page';

import { Temporal } from '@js-temporal/polyfill';
import { usePrivateFormResponseList } from '@tapie-kr/api-client';
import { Unit } from '@tapie-kr/dashboard-shared/lib/enum';
import { getUnitFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import {
  type ChangeEvent,
  use,
  useEffect,
  useState,
} from 'react';

export default function ApplicationDetailPage({ params }: {
  params: Promise<{
    id: number;
  }>;
}) {
  const [searchValue, setSearchValue] = useState('');
  const { id } = use(params);

  const {
    data,
    fetch,
    error,
    isPending,
  } = usePrivateFormResponseList(id);

  useEffect(() => {
    fetch();
  }, []);

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
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <Filter filters={[getUnitFilterGroup()]} />
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {data && data.data.map((item, idx) => (
            <ApplicationCard
              key={idx}
              unit={Unit.DEVELOPER}
              content='asd'
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
          {isPending && Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              width={300}
              height={120}
              borderRadius={radiusVars.smooth}
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
