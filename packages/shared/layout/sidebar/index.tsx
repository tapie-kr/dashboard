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
  StackDirection,
  StackJustify,
  TAPIESymbol,
  TAPIESymbolSize,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import SidebarContent, { SidebarItemType } from './content';

import { AnimatedHStack, AnimatedStack, AnimatedVStack } from '~/lib/animate';
import { PathMap } from '~/lib/pathmap';
import { PathNode } from '~/lib/pathmap/types';

interface SidebarProps {
  pathMap: {
    [key: string]: PathNode;
  };
  sidebarMap: SidebarItemType[];
}

export default function Sidebar(props: SidebarProps) {
  const { pathMap, sidebarMap } = props;
  const map = new PathMap(pathMap);
  const [collapsed, setCollapsed] = useState(false);

  const handleTogglePanel = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AnimatedVStack
      layout
      fullWidth
      initial={{ width: 250 }}
      animate={{ width: collapsed ? 60 : 250 }}
      transition={{ duration: 0.24 }}
      className={s.base}
      justify={StackJustify.BETWEEN}
    >
      <VStack
        fullWidth
        fullHeight
        justify={StackJustify.START}
        spacing={spacingVars.moderate}
      >
        <AnimatedStack
          fullWidth
          className={s.header}
          animate={{ flexDirection: collapsed ? StackDirection.COLUMN : StackDirection.ROW }}
          style={{ gap: collapsed ? spacingVars.base : 0 }}
          justify={StackJustify.BETWEEN}
          transition={{
            delay:    collapsed ? 0.2 : 0,
            duration: 0.3,
          }}
        >
          <Link href={map.getPath(pathMap.home)}>
            <TAPIESymbol size={TAPIESymbolSize._24} />
          </Link>
          <Icon
            name={collapsed ? GlyphIcon.LEFT_PANEL_OPEN : GlyphIcon.LEFT_PANEL_CLOSE}
            size={20}
            color={colorVars.content.default}
            onClick={handleTogglePanel}
          />
        </AnimatedStack>
        <AnimatePresence>{!collapsed && (
          <SidebarContent
            pathMap={map}
            sidebarMap={sidebarMap}
          />
        )}
        </AnimatePresence>
      </VStack>
      <HStack
        fullWidth
        justify={StackJustify.BETWEEN}
        className={s.footer}
      >
        {!collapsed && (
          <AnimatedHStack
            className={s.info}
            spacing={spacingVars.tiny}
            align={StackAlign.CENTER}
            transition={{ duration: 0.24 }}
            initial={{
              opacity: 0,
              y:       20,
            }}
            animate={{
              opacity: 1,
              y:       0,
            }}
          >
            <Typo.Giant weight={Weight.MEDIUM}>관리자님</Typo.Giant>
            <Badge.Default
              size={BadgeSize.SMALL}
              label='역할'
            />
          </AnimatedHStack>
        )}
        <IconButton
          icon={GlyphIcon.LOGOUT}
          size={ButtonSize.SMALL}
          variant={ButtonVariant.SECONDARY}
        />
      </HStack>
    </AnimatedVStack>
  );
}
