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
import AwardsCard from '@/components/card/awards';
import SkeletonAwardsCard from '@/components/card/awards/Skeleton';
import Page from '@/components/page';

import { usePrivateAwardList } from '@tapie-kr/api-client';
import { getContestFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useEffect, useState } from 'react';
import { path, pathMap } from '@/lib/pathmap';

export default function AwardsPage() {
  const [searchValue, setSearchValue] = useState('');

  const {
    data,
    isPending,
    fetch,
  } = usePrivateAwardList();

  useEffect(() => {
    fetch();
  }, []);

  const router = useRouter();

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Page
      hasSearch
      title='수상실적'
      count={data?.data.length || 0}
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
            onClick={() => {
              router.push(pathMap.resolvePath(path.awards.create));
            }}
          >
            수상실적 등록
          </Button.Default>
        </HStack>
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {isPending && <SkeletonAwardsCard />}
          {data?.data.map((award, idx) => (
            <AwardsCard
              key={idx}
              {...award}
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
