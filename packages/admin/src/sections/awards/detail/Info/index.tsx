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

interface AchievementDetailInfoSectionProps {
  uuid: string;
}

export default function AwardsDetailInfoSection(props: AchievementDetailInfoSectionProps) {
  const { uuid } = props;

  const getGradeString = (studentId: number) => {
    const studentIdString = studentId.toString();

    return studentIdString.slice(0, 1) + '학년';
  };

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
          />
        </Box>
        <IconButton
          size={ButtonSize.SMALL}
          icon={GlyphIcon.ADD}
        />
      </HStack>
      <DataTable
        showIndex
        data={[]}
        actions={[
          {
            icon:    GlyphIcon.EDIT,
            onClick: () => {
            },
          },
          {
            icon:    GlyphIcon.DELETE,
            onClick: () => {
            },
          },
        ]}
        columns={[
          {
            key:        'member',
            label:      '참여 부원',
            width:      500,
            isSortable: true,
            cell:       member => (
              <HStack spacing={spacingVars.micro}>
                <Typo.Petite weight={Weight.MEDIUM}>{member.name}</Typo.Petite>
                <Typo.Petite
                  weight={Weight.MEDIUM}
                  color={colorVars.content.muted}
                >
                  {getGradeString(member.studentId)}
                </Typo.Petite>
              </HStack>
            ),
          },
        ]}
      />
    </VStack>
  );
}
