import * as s from './style.css';

import {
  Badge,
  BadgeSize,
  BadgeTheme,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { type Temporal } from '@js-temporal/polyfill';
import { getDateString } from '../../../lib/utils/date';

interface AnnouncementCardProps {
  content: string;
  isSent: boolean;
  isNotice: boolean;
  date: Temporal.PlainDateTime;
}

export default function AnnouncementCard(props: AnnouncementCardProps) {
  const { content, isSent, isNotice, date } = props;

  return (
    <VStack
      className={s.base}
      spacing={spacingVars.petite}
      align={StackAlign.START}
    >
      <Typo.Petite weight={Weight.SEMIBOLD}>{content}</Typo.Petite>
      <HStack spacing={spacingVars.tiny}>
        {isSent && (
          <Badge.Default
            theme={BadgeTheme.GREEN}
            size={BadgeSize.SMALL}
            label='전송됨'
            leadingIcon={GlyphIcon.CHECK}
          />
        )}
        {isNotice && (
          <Badge.Default
            theme={BadgeTheme.RED}
            size={BadgeSize.SMALL}
            label='공지'
            leadingIcon={GlyphIcon.NOTIFICATIONS}
          />
        )}
        <Badge.Default
          size={BadgeSize.SMALL}
          label={getDateString(date, true)}
          leadingIcon={GlyphIcon.TODAY}
        />
      </HStack>
    </VStack>
  );
}
