import * as s from './style.css';

import {
  AspectRatio,
  Badge,
  BadgeSize,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  Image,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { type Temporal } from '@js-temporal/polyfill';
import { MemberUnit } from '@tapie-kr/api-client/enum';
import { getUnitIcon } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';

interface HomeworkCardProps {
  member:      {
    studentId: number;
    name:      string;
  };
  unit:        MemberUnit;
  isSubmitted: boolean;
  files:       string[];
  date:        Temporal.PlainDateTime;
}

const imageExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'webp',
  'svg',
];

export default function HomeworkCard(props: HomeworkCardProps) {
  const {
    member,
    isSubmitted,
    unit,
    files,
    date,
  } = props;

  const isImage = (file: string) => {
    const extension = file.split('.').pop()
      ?.split('/')[0];

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
      <AspectRatio
        fullWidth
        ratio={16 / 9}
        className={s.preview}
      >
        {hasImage && firstImage
          ? (
            <Image
              fullWidth
              fullHeight
              src={firstImage}
              alt='Preview Image'
            />
          )
          : (
            <HStack
              fullWidth
              fullHeight
              className={s.previewNoImage}
            >
              <Typo.Tiny
                weight={Weight.MEDIUM}
                color={colorVars.content.default}
              >
                미리보기 지원 안함
              </Typo.Tiny>
            </HStack>
          )}
      </AspectRatio>
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
          <Typo.Petite weight={Weight.SEMIBOLD}>{member.studentId} {member.name}</Typo.Petite>
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
            label={`${getDatetimeString(date.toLocaleString(), false)} 제출`}
            leadingIcon={GlyphIcon.SCHEDULE}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
