'use client';

import {
  Filter,
  Grid,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';
import MemberCard from '@/components/card/member';
import SkeletonMemberCard from '@/components/card/member/Skeleton';
import Page from '@/components/page';

import { usePrivateMemberList } from '@tapie-kr/api-client';
import { getContestFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { type ChangeEvent, useEffect, useState } from 'react';

export default function MemberPage() {
  const {
    data,
    isPending,
    fetch,
  } = usePrivateMemberList();

  useEffect(() => {
    fetch();
  }, []);

  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Page
      hasSearch
      title='부원'
      count={20}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        align={StackAlign.START}
        spacing={spacingVars.petite}
      >
        <Filter filters={[getContestFilterGroup()]} />
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {/* TODO: 한유찬한테 API response 바꾸라고 하기 */}
          {isPending && <SkeletonMemberCard />}
          {data && data.data.map(member => (
            <MemberCard
              key={member.uuid}
              unit={member.unit}
              generation={member.generation}
              profileImage='https://www.jwkwon0817.me/_next/image?url=%2Fassets%2Fprofile.png&w=256&q=75'
              member={{
                studentId: '10417',
                name:      member.name,
              }}
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
