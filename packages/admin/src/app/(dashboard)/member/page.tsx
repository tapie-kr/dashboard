'use client';

import {
  Filter,
  Grid,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';
import MemberCard from '@/components/card/member';
import Page from '@/components/page';

import { type ChangeEvent, useState } from 'react';
import { Executive, Unit } from '@/lib/enum';
import { getContestFilterGroup } from '@/lib/enum/utils';

export default function MemberPage() {
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
        spacing={spacingVars.jumbo}
      >
        <Filter filters={[getContestFilterGroup()]} />
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          <MemberCard
            executive={Executive.MANAGER}
            unit={Unit.DEVELOPER}
            generation={119}
            profileImage='https://www.jwkwon0817.me/_next/image?url=%2Fassets%2Fprofile.png&w=256&q=75'
            member={{
              studentId: 10404,
              name:      '권지원',
            }}
          />
          {Array.from({ length: 5 }).map((_, index) => (
            <MemberCard
              key={index}
              isGraduated
              unit={Unit.DEVELOPER}
              generation={119}
              profileImage='https://www.jwkwon0817.me/_next/image?url=%2Fassets%2Fprofile.png&w=256&q=75'
              member={{
                studentId: 10404,
                name:      '권지원',
              }}
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
