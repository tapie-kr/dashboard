'use client';

import {
  Grid,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import ApplicationCard from '@/components/atoms/card/application';
import Page from '@/components/page';

import { type ChangeEvent, useState } from 'react';

export default function ApplicationPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Page
      hasSearch
      title='앱'
      count={172}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.petite}
        align={StackAlign.START}
      >
        <Typo.Base weight={Weight.MEDIUM}>앱 리스트</Typo.Base>
        <Grid
          fullWidth
          columnCount={3}
          gap={spacingVars.petite}
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <ApplicationCard
              key={index}
              title='한유찬 어딨어'
              description='디코 온라인이면서 자꾸 사라지는 한유찬 위치를 추적하는 서비스'
              image='https://avatars.githubusercontent.com/u/72495729?v=4'
            />
          ))}
        </Grid>
      </VStack>
    </Page>
  );
}
