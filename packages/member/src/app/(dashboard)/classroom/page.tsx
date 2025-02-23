'use client';

import { Grid, spacingVars } from '@tapie-kr/inspire-react';
import ClassroomCard from '@/components/atoms/card/classroom';
import Page from '@/components/page';

import { type ChangeEvent, useState } from 'react';

export default function ClassroomPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Page
      hasSearch
      title='강의실 리스트'
      count={172}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <Grid
        fullWidth
        columnCount={3}
        gap={spacingVars.base}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <ClassroomCard
            key={index}
            image='https://avatars.githubusercontent.com/u/72495729?v=4'
            title='방학 프로젝트'
            content='AnA랑 같이하는 방학 프로젝트의 강의실입니다~ 다같이 여기서 코딩해요~'
          />
        ))}
      </Grid>
    </Page>
  );
}
