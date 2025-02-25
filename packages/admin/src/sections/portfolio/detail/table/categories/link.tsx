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

import { type Info } from '../shared';

interface PortfolioDetailInfoSectionProps {
  info: Info[];
}

export default function PortfolioDetailLinkSection(props: PortfolioDetailInfoSectionProps) {
  const { info } = props;

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
        링크
      </Typo.Moderate>
      <HStack spacing={spacingVars.micro}>
        <Box className={s.input}>
          <Input.Text
            placeholder='링크 입력'
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
        data={info}
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
            label:      '라벨',
            width:      500,
            isSortable: true,
          },
        ]}
      />
    </VStack>
  );
}
