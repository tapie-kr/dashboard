import * as s from './style.css';

import {
  Button,
  ButtonSize,
  FormField,
  GlyphIcon,
  Input,
  Select,
  spacingVars,
  useToggle,
  VStack,
} from '@tapie-kr/inspire-react';
import DialogTemplate from '@/components/dialog/template';

import { usePrivateCompetitionList } from '@tapie-kr/api-client';
import { useState } from 'react';

interface AwardsDetailFormSectionProps {
  competition: {
    uuid?: string; name?: string;
  };
  setCompetition: (competition: {
    uuid?: string; name?: string;
  }) => void;
}

export default function AwardsDetailFormSection(props: AwardsDetailFormSectionProps) {
  const { competition, setCompetition } = props;
  const toggler = useToggle();
  const [competitionUUID, setCompetitionUUID] = useState<string | undefined>(competition.uuid);
  const [name, setName] = useState<string | undefined>(competition.name);
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
        >눌러서 대회 선택하기
        </Button.Default>
      </FormField>
      <FormField
        isEssential
        label='등급'
      >
        <Input.Text placeholder='등급 입력 (ex. 1)' />
      </FormField>
      <FormField
        isEssential
        label='등급 이름'
      >
        <Input.Text placeholder='등급 이름 입력 (ex. 최우수상)' />
      </FormField>
      <DialogTemplate
        toggler={toggler}
        title='대회 선택'
        isPending={false}
        isSuccess={false}
        onClick={() => {
          if (name) {
            setCompetition({ name });
          } else {
            setCompetition({ uuid: competitionUUID });
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
