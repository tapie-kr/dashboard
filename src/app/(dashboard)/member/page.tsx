'use client';

import MemberCard from '@/components/card/member';
import PageTemplate from '@/components/page-template';

import { Filter, HStack, spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import { type ChangeEvent, useState } from 'react';
import { Executive, Unit } from '@/lib/enum';
import { getUnitFilterGroup } from '@/lib/enum/utils';

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
        <Filter filters={[getUnitFilterGroup()]} />
        <HStack spacing={spacingVars.petite}>
          <MemberCard
            member={{ studentId: 10404, name: '권지원' }}
            executive={Executive.MANAGER}
            unit={Unit.DESIGNER}
            generation={119}
          />
        </HStack>
      </VStack>
    </PageTemplate>
  );
}
