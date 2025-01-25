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
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useState } from 'react';
import { Status, Unit } from '@/lib/enum';
import { getStatusIcon, getStatusTheme, getUnitFilterGroup, getUnitIcon } from '@/lib/enum/utils';
import { getPath } from '@/lib/pathmap';
import { pathMap } from '@/lib/pathmap/map';

interface HomeworkDateType {
  id: number;
  title: string;
  status: Status;
  unit: Unit;
  fromDate: string;
  toDate: string;
}

export const homeworkData: HomeworkDateType[] = [
  {
    id: 5,
    title: '리액트 성능 최적화',
    status: Status.IN_PROGRESS,
    unit: Unit.DEVELOPER,
    fromDate: '2025-01-01',
    toDate: '2025-01-01',
  },
  {
    id: 3,
    title: '리액트 라우터 기초 및 개념 정리',
    status: Status.CONFIRMED,
    unit: Unit.DESIGNER,
    fromDate: '2025-01-01',
    toDate: '2025-01-01',
  },
  {
    id: 2,
    title: '리액트 라우터 기초 및 개념 정리',
    status: Status.CONFIRMED,
    unit: Unit.DESIGNER,
    fromDate: '2025-01-01',
    toDate: '2025-01-01',
  },
];

export default function HomeworkPage() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <PageTemplate
      title={'과제'}
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
                options: [Status.CONFIRMED, Status.CANCELED, Status.IN_PROGRESS].map(status => ({
                  label: status,
                  icon: getStatusIcon(status),
                  value: status,
                })),
              },
              getUnitFilterGroup(),
            ]}
          />
          <Button.Default
            leadingIcon={GlyphIcon.ADD}
            size={ButtonSize.SMALL}
          >
            과제 등록
          </Button.Default>
        </HStack>
        <DataTable
          showIndex
          actions={[
            {
              icon: GlyphIcon.EDIT,
              onClick: index => {
                router.push(getPath(pathMap.homework) + `/${index}`);
              },
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
              cell: (title, index) => {
                const handleNavigate = () => {
                  router.push(getPath(pathMap.homework) + `/${index}`);
                };

                return (
                  <Typo.Petite
                    weight={Weight.MEDIUM}
                    className={s.title}
                    onClick={handleNavigate}
                  >
                    {title}
                  </Typo.Petite>
                );
              },
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
              key: 'unit',
              label: '유닛',
              width: 100,
              isSortable: true,
              cell: unit => (
                <Badge.Default
                  label={unit}
                  leadingIcon={getUnitIcon(unit)}
                />
              ),
            },
            {
              key: 'fromDate',
              label: '시작일',
              width: 100,
              isSortable: true,
              cell: fromDate => <Typo.Tiny color={colorVars.content.default}>{fromDate}</Typo.Tiny>,
            },
            {
              key: 'toDate',
              label: '마감일',
              width: 100,
              isSortable: true,
              cell: fromDate => <Typo.Tiny color={colorVars.content.default}>{fromDate}</Typo.Tiny>,
            },
          ]}
          data={homeworkData}
        />
      </VStack>
    </PageTemplate>
  );
}
