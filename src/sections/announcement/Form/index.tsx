'use client';

import * as s from './style.css';

import {
  Button,
  ButtonSize,
  FormField,
  GlyphIcon,
  HStack,
  Input,
  Segment,
  SegmentGroup,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';

enum AnnouncementType {
  NOTICE = '공지',
  MESSAGE = '메시지',
}

export default function AnnouncementFormSection() {
  return (
    <VStack
      spacing={spacingVars.moderate}
      align={StackAlign.START}
      className={s.base}
    >
      <SegmentGroup defaultValue={AnnouncementType.NOTICE}>
        <Segment
          value={AnnouncementType.NOTICE}
          label={AnnouncementType.NOTICE}
          leadingIcon={GlyphIcon.NOTIFICATIONS}
        />
        <Segment
          value={AnnouncementType.MESSAGE}
          label={AnnouncementType.MESSAGE}
          leadingIcon={GlyphIcon.SEND}
        />
      </SegmentGroup>
      <FormField
        label={'공지 내용'}
        isEssential
      >
        <Input.Text placeholder={'공지 내용 입력'} />
      </FormField>
      <FormField
        label={'사유'}
        isEssential
      >
        <Input.Text placeholder={'공지 사유 입력'} />
      </FormField>
      <HStack className={s.fileUpload}>
        <FormField label={'파일 업로드'}>
          <Input.File.Draggable
            placeholder={'공지 내용 입력'}
            leadingIcon={GlyphIcon.UPLOAD}
          />
        </FormField>
      </HStack>
      <Button.Default
        size={ButtonSize.MEDIUM}
        leadingIcon={GlyphIcon.NOTIFICATIONS}
      >
        공지사항 전송하기
      </Button.Default>
    </VStack>
  );
}
