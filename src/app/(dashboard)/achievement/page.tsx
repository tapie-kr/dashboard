'use client';

import PageTemplate from '@/components/page-template';

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
import { type ChangeEvent, useState } from 'react';
import { getContestFilterGroup, getUnitFilterGroup } from '@/lib/enum/utils';

export default function AchievementPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <PageTemplate
      title={'수상실적'}
      count={7}
      hasSearch
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        spacing={spacingVars.jumbo}
        fullWidth
        align={StackAlign.START}
      >
        <HStack
          fullWidth
          justify={StackJustify.BETWEEN}
          align={StackAlign.START}
        >
          <Filter filters={[getContestFilterGroup(), getUnitFilterGroup()]} />
          <Button.Default
            size={ButtonSize.SMALL}
            leadingIcon={GlyphIcon.ADD}
          >
            수상실적 등록
          </Button.Default>
        </HStack>
        <Grid
          columnCount={3}
          gap={spacingVars.petite}
        >
          {Array.from({ length: 7 }).map((_, index) => (
            <></>
          ))}
        </Grid>
      </VStack>
    </PageTemplate>
  );
}
