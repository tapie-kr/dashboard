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
import DateBadge from '@/components/atoms/badge/date';
import StatusBadge from '@/components/atoms/badge/status';

import { type Temporal } from '@js-temporal/polyfill';
import { type Status } from '@/lib/enum';

interface HomeworkCardProps {
  title:   string;
  date:    Temporal.PlainDateTime;
  status:  Status;
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
        <StatusBadge
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
