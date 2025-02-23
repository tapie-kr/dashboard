'use client';

import {
  BadgeSize,
  colorVars,
  DataTable,
  HStack,
  StackAlign,
  StackJustify,
  Typo,
} from '@tapie-kr/inspire-react';
import StatusBadge from '@/components/atoms/badge/status';
import Profile from '@/components/atoms/profile';
import HomeworkCardGroup from '@/components/organisms/card-group/homework';
import Page from '@/components/page';

import { Temporal } from '@js-temporal/polyfill';
import { type ChangeEvent, useState } from 'react';
import { Status } from '@/lib/enum';
import { getPaddingZero } from '@/lib/utils/date';

const data = [
  {
    title:      'React 작동 원리 및 최적화',
    status:     Status.IN_PROGRESS,
    instructor: {
      avatar: 'https://avatars.githubusercontent.com/u/72495729?v=4',
      name:   '한유찬',
    },
    date: Temporal.PlainDate.from({
      year:  2025,
      month: 1,
      day:   1,
    }),
  },
  {
    title:      'Expo 당근 모작',
    status:     Status.CONFIRMED,
    instructor: {
      avatar: 'https://avatars.githubusercontent.com/u/72495729?v=4',
      name:   '한유찬',
    },
    date: Temporal.PlainDate.from({
      year:  2025,
      month: 1,
      day:   1,
    }),
  },
  {
    title:      '자 이제 우리 넥스트를 배워볼까요옹?',
    status:     Status.CONFIRMED,
    instructor: {
      avatar: 'https://avatars.githubusercontent.com/u/72495729?v=4',
      name:   '한유찬',
    },
    date: Temporal.PlainDate.from({
      year:  2025,
      month: 1,
      day:   1,
    }),
  },
];

export default function ClassroomLecturePage() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Page
      hasSearch
      title='수업'
      count={172}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <HStack
        fullWidth
        justify={StackJustify.BETWEEN}
        align={StackAlign.START}
      >
        <DataTable
          showIndex
          data={data}
          columns={[
            {
              label:      '제목',
              key:        'title',
              isSortable: true,
              width:      270,
            },
            {
              label:      '상태',
              key:        'status',
              isSortable: true,
              width:      80,
              cell:       status => (
                <StatusBadge
                  status={status}
                  size={BadgeSize.SMALL}
                />
              ),
            },
            {
              label:      '진행자',
              key:        'instructor',
              isSortable: true,
              width:      120,
              cell:       instructor => <Profile {...instructor} />,
            },
            {
              label:      '수업일',
              key:        'date',
              isSortable: true,
              width:      120,
              cell:       date => (
                <Typo.Tiny color={colorVars.content.default}>
                  {date.year}-{getPaddingZero(date.month)}-{getPaddingZero(date.day)}
                </Typo.Tiny>
              ),
            },
          ]}
        />
        <HomeworkCardGroup />
      </HStack>
    </Page>
  );
}
