'use client';

import * as s from './style.css';

import {
  Box,
  ButtonSize,
  colorVars,
  DataTable,
  GlyphIcon,
  HStack,
  IconButton,
  Input,
  InputSize,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { usePrivateMemberSearch } from '@tapie-kr/api-client';
import { useState } from 'react';

export type AwardsCreateMemberType = {
  name:      string;
  studentId: number;
  uuid:      string;
};

interface AwardsCreateInfoSectionProps {
  members:    AwardsCreateMemberType[];
  setMembers: (members: AwardsCreateMemberType[]) => void;
}

export default function AwardsCreateInfoSection(props: AwardsCreateInfoSectionProps) {
  const { members, setMembers } = props;

  const getGradeString = (studentId: number) => {
    const studentIdString = studentId.toString();

    return studentIdString.slice(0, 1) + '학년';
  };

  const [username, setUsername] = useState('');
  const { fetch } = usePrivateMemberSearch();

  return (
    <VStack
      fullWidth
      spacing={spacingVars.mini}
      align={StackAlign.START}
    >
      <HStack spacing={spacingVars.micro}>
        <Box className={s.input}>
          <Input.Text
            placeholder='참여 부원을 입력하세요'
            size={InputSize.MEDIUM}
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Box>
        <IconButton
          size={ButtonSize.SMALL}
          icon={GlyphIcon.ADD}
          onClick={async () => {
            fetch({ param: { username } })
              .then(response => {
                if (response.status === 400) return;

                if (response?.data.uuid) members.find(member => member.uuid === response?.data.uuid) || setMembers([
                  ...members,
                  {
                    name:      response?.data.name || '',
                    studentId: response?.data.studentID || 0,
                    uuid:      response?.data.uuid || '',
                  },
                ]);
              });

            setUsername('');
          }}
        />
      </HStack>
      <DataTable
        showIndex
        data={members}
        actions={[
          {
            icon:    GlyphIcon.DELETE,
            onClick: value => {
              setMembers(members.filter(member => member.uuid !== value.uuid));
            },
          },
        ]}
        columns={[
          {
            key:        'name',
            label:      '참여 부원',
            width:      500,
            isSortable: true,
            cell:       (name, _, rawData) => (
              <HStack spacing={spacingVars.micro}>
                <Typo.Petite weight={Weight.MEDIUM}>{name}</Typo.Petite>
                <Typo.Petite
                  weight={Weight.MEDIUM}
                  color={colorVars.content.muted}
                >
                  {getGradeString(rawData.studentId)}
                </Typo.Petite>
              </HStack>
            ),
          },
        ]}
      />
    </VStack>
  );
}
