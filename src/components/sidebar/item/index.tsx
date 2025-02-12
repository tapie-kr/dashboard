'use client';

import * as s from './style.css';

import {
  colorVars,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import cn from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatedVStack } from '@/lib/animate';
import { getPath, getSubItems } from '@/lib/pathmap';
import { type PathNode } from '@/lib/pathmap/types';
import SidebarSubItem from '../sub-item';

interface SidebarItemProps {
  href: PathNode;
}

export default function SidebarItem(props: SidebarItemProps) {
  const { href } = props;

  const title = href.index;
  const subItems = getSubItems(href);

  const currentPath = usePathname();
  const router = useRouter();

  const hrefPath = getPath(href);

  const handleClick = () => {
    router.push(hrefPath);
  };

  const isActive = hrefPath != '/' ? currentPath.startsWith(hrefPath) : currentPath === hrefPath;

  return (
    <VStack
      fullWidth
      className={s.base}
    >
      <HStack
        fullWidth
        onClick={handleClick}
        className={cn(s.button, isActive && s.active)}
      >
        <HStack
          fullWidth
          className={s.titleContainer}
          justify={StackJustify.START}
          align={StackAlign.CENTER}
        >
          <Typo.Petite
            weight={isActive ? Weight.MEDIUM : Weight.REGULAR}
            color={isActive ? colorVars.content.emphasized : colorVars.content.default}
          >
            {title}
          </Typo.Petite>
        </HStack>
      </HStack>
      <AnimatePresence>
        {isActive && subItems.length > 0 && (
          <AnimatedVStack
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            fullWidth
            className={s.subItems}
            spacing={spacingVars.optical}
          >
            {subItems.map(subItem => {
              const path = hrefPath + '/' + subItem.href;

              return (
                <SidebarSubItem
                  key={path}
                  title={subItem.title}
                  href={path}
                />
              );
            })}
          </AnimatedVStack>
        )}
      </AnimatePresence>
    </VStack>
  );
}
