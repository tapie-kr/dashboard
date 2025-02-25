'use client';

import * as s from '../style.css';

import {
  Box,
  ButtonSize,
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

import { type PortfolioTag } from '../shared';

interface PortfolioDetailTagSectionProps {
  tag: PortfolioTag[];
}

export default function PortfolioDetailTagSection(props: PortfolioDetailTagSectionProps) {
  const { tag } = props;

  return (
    <VStack
      fullWidth
      spacing={spacingVars.mini}
      align={StackAlign.START}
    >
      <Typo.Moderate
        weight={Weight.SEMIBOLD}
        className={s.title}
      >
        태그
      </Typo.Moderate>
      <HStack spacing={spacingVars.micro}>
        <Box className={s.input}>
          <Input.Text
            placeholder='태그 입력'
            size={InputSize.MEDIUM}
          />
        </Box>
        <IconButton
          size={ButtonSize.MEDIUM}
          icon={GlyphIcon.ADD}
        />
      </HStack>
      <DataTable
        showIndex
        data={tag}
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
            key:        'label',
            label:      '이름',
            width:      500,
            isSortable: true,
          },
        ]}
      />
    </VStack>
  );
}
