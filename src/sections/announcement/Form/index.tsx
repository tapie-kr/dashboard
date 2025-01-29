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
import { useState } from 'react';
import { Announcement } from '@/lib/enum';
import { getAnnouncementIcon } from '@/lib/enum/utils';

export default function AnnouncementFormSection() {
  const [currentType, setCurrentType] = useState<Announcement>(Announcement.NOTICE);

  const handleToggleType = () => {
    setCurrentType((prevType: Announcement) => {
      return prevType === Announcement.NOTICE ? Announcement.MESSAGE : Announcement.NOTICE;
    });
  };

  return (
    <VStack
      spacing={spacingVars.moderate}
      align={StackAlign.START}
      className={s.base}
    >
      <SegmentGroup
        defaultValue={Announcement.NOTICE}
        onChange={handleToggleType}
      >
        {Object.values(Announcement).map(type => (
          <Segment
            key={type}
            value={type}
            label={type}
            leadingIcon={getAnnouncementIcon(type)}
          />
        ))}
      </SegmentGroup>
      {currentType === Announcement.MESSAGE ? <MessageForm /> : <NoticeForm />}
      <Button.Default
        size={ButtonSize.MEDIUM}
        leadingIcon={getAnnouncementIcon(currentType)}
      >
        {currentType} 전송하기
      </Button.Default>
    </VStack>
  );
}

function NoticeForm() {
  return (
    <VStack
      spacing={spacingVars.moderate}
      align={StackAlign.START}
      fullWidth
    >
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
    </VStack>
  );
}

function MessageForm() {
  return (
    <VStack
      spacing={spacingVars.moderate}
      align={StackAlign.START}
      fullWidth
    >
      <FormField
        label={'메세지 내용'}
        isEssential
      >
        <Input.Text placeholder={'메세지 입력'} />
      </FormField>
      <FormField
        label={'사유'}
        isEssential
      >
        <Input.Text placeholder={'메세지 사유 입력'} />
      </FormField>
    </VStack>
  );
}
