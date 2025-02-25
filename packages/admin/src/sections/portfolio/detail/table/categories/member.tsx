'use client';

import * as s from '../style.css';

import {
  Button,
  ButtonSize,
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
          팀원
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
            key:        'studentId',
            label:      '학번',
            width:      60,
            isSortable: true,
          },
          {
            key:        'name',
            label:      '이름',
            width:      100,
            isSortable: true,
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
