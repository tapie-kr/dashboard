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

import {
  MemberRole,
  MemberType,
  MemberUnit,
  usePrivateMemberList,
} from '@tapie-kr/api-client';
import { getUnitFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
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

  const memberData: MemberType = {
    uuid:        '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    name:        'Jeewon Kwon',
    username:    'jeewonkwon',
    googleEmail: 'noreply@tapie.kr',
    role:        MemberRole.MANAGER,
    unit:        MemberUnit.DEVELOPER,
    generation:  119,
    profileUrl:  'https://tapie.kr/profile.png',
  };

  return (
    <Page
      hasSearch
      title='부원'
      count={data?.data.length || 0}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        align={StackAlign.START}
        spacing={spacingVars.petite}
      >
        <Filter filters={[getUnitFilterGroup()]} />
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {/* TODO: 한유찬한테 API response 바꾸라고 하기 */}
          {isPending && <SkeletonMemberCard />}
          {data && data.data.map(member => (
            <MemberCard
              key={member.uuid}
              {...memberData}
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
