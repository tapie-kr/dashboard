'use client';

import * as s from './page.css';

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
import Page from '@/components/page';

import { MemberUnit } from '@tapie-kr/api-client/enum';
import { Status } from '@tapie-kr/dashboard-shared/lib/enum';
import {
  getContestFilterGroup,
  getStatusIcon,
  getStatusTheme,
  getUnitIcon,
} from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { type ChangeEvent, useState } from 'react';

interface HomeworkDateType {
  id:       number;
  title:    string;
  status:   Status;
  unit:     MemberUnit;
  fromDate: string;
  toDate:   string;
}

export const homeworkData: HomeworkDateType[] = [
  {
    id:       1,
    title:    '리액트 성능 최적화',
    status:   Status.IN_PROGRESS,
    unit:     MemberUnit.DEVELOPER,
    fromDate: '2025-01-01',
    toDate:   '2025-01-01',
  },
  {
    id:       2,
    title:    '리액트 라우터 기초 및 개념 정리',
    status:   Status.CONFIRMED,
    unit:     MemberUnit.DESIGNER,
    fromDate: '2025-01-01',
    toDate:   '2025-01-01',
  },
  {
    id:       3,
    title:    '리액트 라우터 기초 및 개념 정리',
    status:   Status.CONFIRMED,
    unit:     MemberUnit.DESIGNER,
    fromDate: '2025-01-01',
    toDate:   '2025-01-01',
  },
];

export default function HomeworkPage() {
  // const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Page
      hasSearch
      title='과제'
      count={172}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.petite}
      >
        <HStack
          fullWidth
          justify={StackJustify.BETWEEN}
          align={StackAlign.START}
        >
          <Filter
            filters={[
              {
                label:   '상태',
                options: [
                  Status.CONFIRMED,
                  Status.CANCELED,
                  Status.IN_PROGRESS,
                ].map(status => ({
                  label: status,
                  icon:  getStatusIcon(status),
                  value: status,
                })),
              },
              getContestFilterGroup(),
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
          data={homeworkData}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: _index => {
                // router.push(pathMap.resolvePath(path.homework, index.id));
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: () => {
              },
            },
          ]}
          columns={[
            {
              key:        'title',
              label:      '제목',
              width:      250,
              isSortable: true,
              cell:       (title, _, _index) => {
                const handleNavigate = () => {
                  // router.push(pathMap.resolvePath(path.homework, index.id));
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
              key:        'status',
              label:      '상태',
              width:      120,
              isSortable: true,
              cell:       status => {
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
              key:        'unit',
              label:      '유닛',
              width:      100,
              isSortable: true,
              cell:       unit => (
                <Badge.Default
                  label={unit}
                  leadingIcon={getUnitIcon(unit)}
                />
              ),
            },
            {
              key:        'fromDate',
              label:      '시작일',
              width:      100,
              isSortable: true,
              cell:       fromDate => <Typo.Tiny color={colorVars.content.default}>{fromDate}</Typo.Tiny>,
            },
            {
              key:        'toDate',
              label:      '마감일',
              width:      100,
              isSortable: true,
              cell:       fromDate => <Typo.Tiny color={colorVars.content.default}>{fromDate}</Typo.Tiny>,
            },
          ]}
        />
      </VStack>
    </Page>
  );
}
