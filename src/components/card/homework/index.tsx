import * as s from './style.css';

import { type Temporal } from '@js-temporal/polyfill';
import {
  Badge,
  BadgeSize,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import cn from 'classnames';
import { type Unit } from '@/lib/enum';
import { getUnitIcon } from '@/lib/enum/utils';
import { type Member } from '@/lib/types';
import { getMemberString } from '@/lib/types/utils';

interface HomeworkCardProps {
  member: Member;
  unit: Unit;
  isSubmitted: boolean;
  files: string[];
  date: Temporal.PlainDateTime;
}

const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];

export default function HomeworkCard(props: HomeworkCardProps) {
  const { member, isSubmitted, unit, files, date } = props;

  const isImage = (file: string) => {
    const extension = file.split('.').pop()?.split('/')[0];
    return extension && imageExtensions.includes(extension);
  };

  const hasImage = files.some(file => isImage(file));

  const firstImage = files.find(file => isImage(file));

  return (
    <VStack
      className={s.base}
      spacing={spacingVars.base}
      align={StackAlign.START}
    >
      <HStack
        fullWidth
        className={cn(s.preview, !hasImage && s.previewNoImage)}
        style={{
          backgroundImage: `url(${firstImage})`,
        }}
      >
        {!hasImage && (
          <Typo.Tiny
            weight={Weight.MEDIUM}
            color={colorVars.content.default}
          >
            미리보기 지원 안함
          </Typo.Tiny>
        )}
      </HStack>
      <VStack
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <VStack
          spacing={spacingVars.mini}
          align={StackAlign.START}
        >
          <Badge.Default
            label={unit}
            leadingIcon={getUnitIcon(unit)}
            size={BadgeSize.SMALL}
          />
          <Typo.Petite weight={Weight.SEMIBOLD}>{getMemberString(member)}</Typo.Petite>
        </VStack>

        <VStack
          spacing={spacingVars.tiny}
          align={StackAlign.START}
        >
          <HStack spacing={spacingVars.tiny}>
            <Badge.Default
              label={isSubmitted ? '제출 완료' : '제출 실패'}
              size={BadgeSize.SMALL}
              theme={isSubmitted ? BadgeTheme.GREEN : BadgeTheme.RED}
              leadingIcon={isSubmitted ? GlyphIcon.CHECK : GlyphIcon.CLOSE}
            />
            <Badge.Default
              label={`첨부파일 ${files.length}개`}
              leadingIcon={GlyphIcon.FOLDER}
            />
          </HStack>
          <Badge.Default
            label={`${date.month}월 ${date.day}일 ${date.hour}:${date.minute} 제출`}
            leadingIcon={GlyphIcon.SCHEDULE}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
