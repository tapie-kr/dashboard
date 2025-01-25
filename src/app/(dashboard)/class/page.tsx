'use client';

import * as s from './page.css';

import PageTemplate from '@/components/page-template';

import {
  Badge,
  Button,
  ButtonSize,
  colorVars,
  DataTable,
  Filter,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { type ChangeEvent, useState } from 'react';
import { Status, Unit } from '@/lib/enum';
import { getStatusIcon, getStatusTheme, getUnitIcon } from '@/lib/enum/util';
type DataType = {
  title: string;
  status: Status;
  instructor: string;
  unit: Unit;
  date: string;
};

const data: DataType[] = [
  {
    title: 'React 작동 원리 및 최적화',
    status: Status.CONFIRMED,
    instructor: '성이름',
    unit: Unit.DEVELOPER,
    date: '2025-01-01',
  },
  {
    title: '수업 제목',
    status: Status.CANCELED,
    instructor: '성이름',
    unit: Unit.DESIGNER,
    date: '2025-01-01',
  },
  {
    title: '수업 제목',
    status: Status.SCHEDULED,
    instructor: '성이름',
    unit: Unit.DEVELOPER,
    date: '2025-01-01',
  },
  {
    title: '수업 제목',
    status: Status.POSTPONED,
    instructor: '성이름',
    unit: Unit.DEVELOPER,
    date: '2025-01-01',
  },
  {
    title: '수업 제목',
    status: Status.IN_PROGRESS,
    instructor: '성이름',
    unit: Unit.DEVELOPER,
    date: '2025-01-01',
  },
];

export default function ClassPage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <PageTemplate
      title={'수업'}
      count={172}
      hasSearch
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.petite}
      >
        <HStack
          justify={StackJustify.BETWEEN}
          align={StackAlign.START}
          fullWidth
        >
          <Filter
            filters={[
              {
                label: '상태',
                options: Object.values(Status).map(status => ({
                  label: status,
                  icon: getStatusIcon(status),
                  value: status,
                })),
              },
              {
                label: '유닛',
                options: Object.values(Unit).map(unit => ({
                  label: unit,
                  icon: getUnitIcon(unit),
                  value: unit,
                })),
              },
            ]}
          />
          <Button.Default
            leadingIcon={GlyphIcon.ADD}
            size={ButtonSize.SMALL}
          >
            수업 등록
          </Button.Default>
        </HStack>
        <DataTable
          showIndex
          actions={[
            {
              icon: GlyphIcon.EDIT,
              onClick: () => {},
            },
            {
              icon: GlyphIcon.DELETE,
              onClick: () => {},
            },
          ]}
          columns={[
            {
              key: 'title',
              label: '제목',
              width: 250,
              isSortable: true,
              cell: title => <Typo.Petite weight={Weight.MEDIUM}>{title}</Typo.Petite>,
            },
            {
              key: 'status',
              label: '상태',
              width: 120,
              isSortable: true,
              cell: status => {
                return (
                  <Badge.Default
                    label={status}
                    leadingIcon={getStatusIcon(status)}
                    theme={getStatusTheme(status)}
                  />
                );
              },
            },
            {
              key: 'instructor',
              label: '진행자',
              width: 120,
              isSortable: true,
              cell: instructor => (
                <HStack spacing={spacingVars.micro}>
                  <div className={s.circle} />
                  <Typo.Tiny weight={Weight.MEDIUM}>{instructor}</Typo.Tiny>
                </HStack>
              ),
            },
            {
              key: 'unit',
              label: '유닛',
              width: 120,
              isSortable: true,
              cell: unit => {
                return (
                  <Badge.Default
                    label={unit}
                    leadingIcon={getUnitIcon(unit)}
                  />
                );
              },
            },
            {
              key: 'date',
              label: '수업일',
              width: 100,
              isSortable: true,
              cell: date => <Typo.Tiny color={colorVars.content.default}>{date}</Typo.Tiny>,
            },
          ]}
          data={data}
        />
      </VStack>
    </PageTemplate>
  );
}
