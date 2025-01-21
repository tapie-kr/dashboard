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
import { usePathname, useRouter } from 'next/navigation';
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
      {isActive && subItems.length > 0 && (
        <VStack
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
        </VStack>
      )}
    </VStack>
  );
}
