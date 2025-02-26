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

import { usePrivateFormResponseList } from '@tapie-kr/api-client';
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
    isPending,
  } = usePrivateFormResponseList();

  useEffect(() => {
    fetch({ param: { formId: id } });
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
          {data && Array.isArray(data.data)
            ? data.data.map((item, idx) => (
              <ApplicationCard
                {...item}
                key={idx}
                uuid={item.uuid}
                formId={id}
                unit={item.unit}
                introduction={item.introduction}
                createdAt={item.createdAt}
                name={item.name}
                hasPortfolio={!!item.portfolioAssetUUID}
              />
            ))
            : (
              isPending && Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={index}
                  width={300}
                  height={120}
                  borderRadius={radiusVars.smooth}
                />
              ))
            )}
        </Grid>
      </VStack>
    </Page>
  );
}
