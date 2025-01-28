'use client';

import MemberCard from '@/components/card/member';
import PageTemplate from '@/components/page-template';

import { Filter, Grid, spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import { type ChangeEvent, useState } from 'react';
import { Executive, Unit } from '@/lib/enum';
import { getContestFilterGroup } from '@/lib/enum/utils';

export default function MemberPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <PageTemplate
      title={'부원'}
      count={20}
      hasSearch
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        align={StackAlign.START}
        spacing={spacingVars.jumbo}
      >
        <Filter filters={[getContestFilterGroup()]} />
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          <MemberCard
            profileImage={
              'https://www.jwkwon0817.me/_next/image?url=%2Fassets%2Fprofile.png&w=256&q=75'
            }
            member={{ studentId: 10404, name: '권지원' }}
            executive={Executive.MANAGER}
            unit={Unit.DEVELOPER}
            generation={119}
          />
          {Array.from({ length: 5 }).map((_, index) => (
            <MemberCard
              key={index}
              profileImage={
                'https://www.jwkwon0817.me/_next/image?url=%2Fassets%2Fprofile.png&w=256&q=75'
              }
              member={{ studentId: 10404, name: '권지원' }}
              unit={Unit.DEVELOPER}
              generation={119}
              isGraduated
            />
          ))}
        </Grid>
      </VStack>
    </PageTemplate>
  );
}
