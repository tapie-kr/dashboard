'use client';

import {
  colorVars,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import HomeworkCard from '@/components/molecules/card/homework';

import { Temporal } from '@js-temporal/polyfill';
import { Status } from '@/lib/enum';

const data = [
  {
    title:  'Expo 당근 모작하기',
    status: Status.DEADLINE_IMMINENT,
    date:   Temporal.PlainDateTime.from({
      year:   2025,
      month:  3,
      day:    27,
      hour:   6,
      minute: 17,
    }),
    onClick: () => {
    },
  },
  {
    title:  '리액트 성능 최적화',
    status: Status.IN_PROGRESS,
    date:   Temporal.PlainDateTime.from({
      year:   2025,
      month:  3,
      day:    27,
      hour:   6,
      minute: 17,
    }),
    onClick: () => {
    },
  },
  {
    title:  '리액트 라우터 기초 및 개념 정리',
    status: Status.CONFIRMED,
    date:   Temporal.PlainDateTime.from({
      year:   2025,
      month:  3,
      day:    27,
      hour:   6,
      minute: 17,
    }),
    onClick: () => {
    },
  },
];

export default function HomeworkCardGroup() {
  const count = data.length;

  return (
    <VStack
      spacing={spacingVars.base}
      align={StackAlign.START}
    >
      <HStack spacing={spacingVars.tiny}>
        <Typo.Base weight={Weight.MEDIUM}>미완료 과제</Typo.Base>
        <Typo.Base
          weight={Weight.MEDIUM}
          color={colorVars.content.muted}
        >
          {count}개
        </Typo.Base>
      </HStack>
      {data.map(item => {
        return <HomeworkCard {...item} />;
      })}
    </VStack>
  );
}
