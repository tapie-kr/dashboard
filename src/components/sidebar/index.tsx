'use client';

import * as s from './style.css';

import {
  Badge,
  BadgeSize,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  IconButton,
  spacingVars,
  StackAlign,
  StackJustify,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import React from 'react';
import SidebarContent from './content';

export default function Sidebar() {
  const handleTogglePanel = () => {
    console.log('clicked');
  };

  return (
    <VStack
      fullWidth
      fullHeight
      className={s.base}
      spacing={spacingVars.base}
    >
      <VStack
        fullWidth
        fullHeight
        spacing={spacingVars.moderate}
      >
        <HStack
          fullWidth
          className={s.header}
          justify={StackJustify.BETWEEN}
        >
          <TAPIESymbol size={TAPIESymbolSize._24} />
          <Icon
            name={GlyphIcon.LEFT_PANEL_CLOSE}
            size={20}
            color={colorVars.content.default}
            onClick={handleTogglePanel}
          />
        </HStack>
        <SidebarContent />
      </VStack>
      <HStack
        fullWidth
        justify={StackJustify.BETWEEN}
        className={s.footer}
      >
        <HStack
          className={s.info}
          spacing={spacingVars.tiny}
          align={StackAlign.CENTER}
        >
          <Typo.Base weight={Weight.MEDIUM}>관리자님</Typo.Base>
          <Badge.Default
            size={BadgeSize.SMALL}
            label={'역할'}
          />
        </HStack>
        <IconButton
          icon={GlyphIcon.LOGOUT}
          size={ButtonSize.SMALL}
          variant={ButtonVariant.SECONDARY}
        />
      </HStack>
    </VStack>
  );
}
