'use client';

import {
  Grid,
  radiusVars,
  Skeleton,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';
import ApplicationCard from '@/components/card/application';
import Page from '@/components/page';

import { usePrivateFormApplicationList } from '@tapie-kr/api-client';
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
  } = usePrivateFormApplicationList();

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
      count={data?.data.length}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        align={StackAlign.START}
      >
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {data && Array.isArray(data.data)
            ? data.data.map((item, index) => (
              <ApplicationCard
                {...item}
                key={index}
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
