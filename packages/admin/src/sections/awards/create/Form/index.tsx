import * as s from './style.css';

import {
  Button,
  ButtonSize,
  DatePicker,
  FormField,
  GlyphIcon,
  Input,
  Select,
  spacingVars,
  useToggle,
  VStack,
} from '@tapie-kr/inspire-react';
import DialogTemplate from '@/components/dialog/template';

import { Temporal } from '@js-temporal/polyfill';
import { usePrivateCompetitionList } from '@tapie-kr/api-client';
import { useState } from 'react';

export type AwardsCreateCompetitionType = {
  uuid?:     string;
  uuidName?: string;
  name?:     string;
};

export type AwardsCreateGradeType = {
  grade?: number;
  label?: string;
};

interface AwardsCreateFormSectionProps {
  competition:    AwardsCreateCompetitionType;
  setCompetition: (competition: AwardsCreateCompetitionType) => void;
  grade:          AwardsCreateGradeType;
  setGrade:       (grade: AwardsCreateGradeType) => void;
  title:          string;
  setTitle:       (title: string) => void;
  rewardedAt:     Temporal.PlainDate | undefined;
  setRewardedAt:  (rewardedAt: Temporal.PlainDate | undefined) => void;
}

export default function AwardsCreateFormSection(props: AwardsCreateFormSectionProps) {
  const {
    competition,
    setCompetition,
    grade,
    setGrade,
    title,
    setTitle,
    rewardedAt,
    setRewardedAt,
  } = props;

  const toggler = useToggle();
  const [competitionUUID, setCompetitionUUID] = useState<string | undefined>(undefined);
  const [competitionUUIDName, setCompetitionUUIDName] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [_isModalOpen, toggle] = toggler;
  const { fetch, data } = usePrivateCompetitionList();

  return (
    <VStack
      spacing={spacingVars.medium}
      className={s.base}
    >
      <FormField
        isEssential
        label='대회 이름'
      >
        <Button.Default
          size={ButtonSize.MEDIUM}
          leadingIcon={GlyphIcon.TROPHY}
          onClick={async () => {
            await fetch();

            toggle();
          }}
        >{competition.uuid ? competition.uuidName : competition.name ? competition.name : '눌러서 대회 선택하기'}
        </Button.Default>
      </FormField>
      <FormField
        isEssential
        label='제목'
      >
        <Input.Text
          placeholder='제목 입력 (ex. 27th 생활부문)'
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
      </FormField>
      <FormField
        isEssential
        label='등급'
      >
        <Input.Text
          placeholder='등급 입력 (ex. 1)'
          value={grade.grade}
          onChange={e => {
            console.log('Grade Label', grade.label);

            console.log({
              ...grade, grade: Number(e.target.value),
            });

            setGrade({
              ...grade,  grade: Number(e.target.value),
            });
          }}
        />
      </FormField>
      <FormField
        isEssential
        label='등급 이름'
      >
        <Input.Text
          placeholder='등급 이름 입력 (ex. 최우수상)'
          value={grade.label}
          onChange={e => {
            console.log('Grade Number', grade.grade);

            console.log({
              ...grade, label: e.target.value,
            });

            setGrade({
              ...grade, label: e.target.value,
            });
          }}
        />
      </FormField>
      <FormField
        isEssential
        label='수상일'
      >
        <DatePicker
          value={rewardedAt}
          onChange={setRewardedAt}
        />
      </FormField>
      <DialogTemplate
        toggler={toggler}
        title='대회 선택'
        isPending={false}
        isSuccess={false}
        onClick={() => {
          if (name && name.trim() != '') {
            setCompetition({ name });
          } else {
            setCompetition({
              uuid: competitionUUID, uuidName: competitionUUIDName,
            });
          }

          toggle();
        }}
      >
        <FormField label='대회 선택'>
          <Select
            placeholder='대회 선택'
            value={competitionUUID}
            options={data?.data.map(item => ({
              label: item.name,
              value: item.uuid,
            }))}
            onChange={e => {
              setCompetitionUUID(e.target.value);

              setCompetitionUUIDName(data?.data.find(item => item.uuid === e.target.value)?.name);
            }}
          />
        </FormField>
        <FormField label='대회 추가'>
          <Input.Text
            placeholder='대회 이름 입력'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormField>
      </DialogTemplate>
    </VStack>
  );
}
