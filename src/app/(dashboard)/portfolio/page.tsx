'use client';

import PortfolioCard from '@/components/card/portfolio';
import PageTemplate from '@/components/page-template';

import { Filter, GlyphIcon, Grid, spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import { type ChangeEvent, useState } from 'react';
import { getContestFilterGroup, getStatusFilterGroup } from '@/lib/enum/utils';

export default function PortfolioPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <PageTemplate
      title={'포트폴리오'}
      count={20}
      hasSearch
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <Filter filters={[getStatusFilterGroup(), getContestFilterGroup()]} />
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <PortfolioCard
              key={index}
              title={'선린투데이'}
              tags={[
                { name: 'Badge', icon: GlyphIcon.DEFAULT },
                { name: 'Badge' },
                { name: 'Badge' },
                { name: 'Badge' },
              ]}
              image={'https://tapie.kr/thumbnails/sunrin_today.webp'}
              catchphrase={'선린투데이는 선린인터넷고등학교 학생들을 위한 정보 제공 플랫폼입니다.'}
            />
          ))}
        </Grid>
      </VStack>
    </PageTemplate>
  );
}
