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

import { PortfolioStack } from '../shared';

interface PortfolioDetailStackSectionProps {
  stack: PortfolioStack[];
}

export default function PortfolioDetailStackSection(props: PortfolioDetailStackSectionProps) {
  const { stack } = props;

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
          기술 스택
        </Typo.Moderate>
        <Button.Default
          size={ButtonSize.MEDIUM}
          leadingIcon={GlyphIcon.ADD}
        >
          기술 추가하기
        </Button.Default>
      </HStack>
      <DataTable
        showIndex
        data={stack}
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
            key:        'icon',
            label:      '아이콘',
            width:      200,
            isSortable: true,
          },
          {
            key:        'name',
            label:      '이름',
            width:      200,
            isSortable: true,
          },
          {
            key:        'category',
            label:      '카테고리',
            width:      200,
            isSortable: true,
          },
        ]}
      />
    </VStack>
  );
}
