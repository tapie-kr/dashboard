'use client';

import PageTemplate from '@/components/page-template';

import {
  Filter,
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
        >
          <Filter filters={[getContestFilterGroup(), getUnitFilterGroup()]} />
        </HStack>
      </VStack>
    </PageTemplate>
  );
}
