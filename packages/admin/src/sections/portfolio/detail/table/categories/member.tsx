'use client';

import * as s from '../style.css';

import {
  Button,
  ButtonSize,
  colorVars,
  DataTable,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { PortfolioMember } from '../shared';

interface PortfolioDetailMemberSectionProps {
  member: PortfolioMember[];
}

export default function PortfolioDetailMemberSection(props: PortfolioDetailMemberSectionProps) {
  const { member } = props;

  return (
    <VStack
      fullWidth
      spacing={spacingVars.mini}
      align={StackAlign.START}
    >
      <HStack
        fullWidth
        spacing={spacingVars.micro}
        justify={StackJustify.BETWEEN}
      >
        <Typo.Moderate
          weight={Weight.SEMIBOLD}
          className={s.title}
        >
          참여 부원
        </Typo.Moderate>
        <Button.Default
          size={ButtonSize.MEDIUM}
          leadingIcon={GlyphIcon.ADD}
        >
          팀원 추가하기
        </Button.Default>
      </HStack>
      <DataTable
        showIndex
        data={member}
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
            width:      100,
            isSortable: true,
            cell:       member => (
              <HStack spacing={spacingVars.micro}>
                <Typo.Petite weight={Weight.MEDIUM}>{member.name}</Typo.Petite>
                <Typo.Petite
                  weight={Weight.MEDIUM}
                  color={colorVars.content.muted}
                >
                  {member.studentId}
                </Typo.Petite>
              </HStack>
            ),
          },
          {
            key:        'role',
            label:      '역할',
            width:      150,
            isSortable: true,
          },
          {
            key:        'roleDetail',
            label:      '역할 상세',
            width:      300,
            isSortable: true,
          },
        ]}
      />
    </VStack>
  );
}
