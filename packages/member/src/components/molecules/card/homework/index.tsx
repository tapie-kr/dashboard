'use client';

import * as s from './style.css';

import {
  BadgeSize,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { type Temporal } from '@js-temporal/polyfill';
import DateBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/date';
import HomeworkStatusBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/status/homework';
import { HomeworkStatus } from '@tapie-kr/dashboard-shared/lib/enum';

interface HomeworkCardProps {
  title:   string;
  date:    Temporal.PlainDateTime;
  status:  HomeworkStatus;
  onClick: () => void;
}

export default function HomeworkCard(props: HomeworkCardProps) {
  const {
    title,
    date,
    status,
    onClick: handleClick,
  } = props;

  return (
    <VStack
      spacing={spacingVars.petite}
      className={s.base}
      align={StackAlign.START}
      onClick={handleClick}
    >
      <Typo.Petite weight={Weight.MEDIUM}>{title}</Typo.Petite>
      <HStack spacing={spacingVars.tiny}>
        <HomeworkStatusBadge
          status={status}
          size={BadgeSize.SMALL}
        />
        <DateBadge
          date={date}
          size={BadgeSize.SMALL}
        />
      </HStack>
    </VStack>
  );
}
