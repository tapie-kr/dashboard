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
import SidebarSubItem from '../sub-item';

export interface SubItemType {
  title: string;
  href: string;
}

interface SidebarItemProps {
  title: string;
  href: string;
  subItems?: SubItemType[];
}

export default function SidebarItem(props: SidebarItemProps) {
  const { title, href, subItems } = props;

  const currentPath = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  const isActive = href != '/' ? currentPath.startsWith(href) : currentPath === href;

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
      {isActive && subItems && (
        <VStack
          fullWidth
          className={s.subItems}
          spacing={spacingVars.optical}
        >
          {subItems.map(subItem => {
            const path = href + subItem.href;

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
