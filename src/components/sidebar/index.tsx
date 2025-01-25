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
  Stack,
  StackAlign,
  StackDirection,
  StackJustify,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import cn from 'classnames';
import React, { useState } from 'react';
import SidebarContent from './content';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleTogglePanel = () => {
    setCollapsed(!collapsed);
  };

  return (
    <VStack
      fullWidth
      fullHeight
      className={cn(s.base, { [s.collapsed]: collapsed })}
      spacing={spacingVars.base}
    >
      <VStack
        fullWidth
        fullHeight
        justify={StackJustify.START}
        spacing={spacingVars.moderate}
      >
        <Stack
          direction={collapsed ? StackDirection.COLUMN : StackDirection.ROW}
          fullWidth
          className={s.header}
          justify={StackJustify.BETWEEN}
          spacing={collapsed ? spacingVars.base : 0}
        >
          <TAPIESymbol size={TAPIESymbolSize._24} />
          <Icon
            name={collapsed ? GlyphIcon.LEFT_PANEL_OPEN : GlyphIcon.LEFT_PANEL_CLOSE}
            size={20}
            color={colorVars.content.default}
            onClick={handleTogglePanel}
          />
        </Stack>
        {!collapsed && <SidebarContent />}
      </VStack>
      <HStack
        fullWidth
        justify={StackJustify.BETWEEN}
        className={s.footer}
      >
        {!collapsed && (
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
        )}
        <IconButton
          icon={GlyphIcon.LOGOUT}
          size={ButtonSize.SMALL}
          variant={ButtonVariant.SECONDARY}
        />
      </HStack>
    </VStack>
  );
}
