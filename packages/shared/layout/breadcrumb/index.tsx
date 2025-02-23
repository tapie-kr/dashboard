'use client';

import * as s from './style.css';

import {
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  Typo,
  Weight,
} from '@tapie-kr/inspire-react';

import { usePathname, useRouter } from 'next/navigation';

import { PathMap } from '~/lib/pathmap';

interface BreadcrumbProps {
  root?:           string;
  hasRootLabel?:   boolean;
  hasLeadingIcon?: boolean;
  leadingIcon?:    GlyphIcon;
  pathMap:         PathMap;
  className?:      string;
}

export default function Breadcrumb(props: BreadcrumbProps) {
  const {
    root = 'Root',
    hasRootLabel = false,
    hasLeadingIcon = true,
    pathMap,
    leadingIcon = GlyphIcon.HOME,
  } = props;

  const router = useRouter();
  const currentPath = usePathname();
  const items = pathMap.getPathList(currentPath);
  const hasOnlyRoot = items.length === 0;

  const handleClickRoot = () => {
    router.push('/');
  };

  return (
    <HStack
      spacing={spacingVars.tiny}
      align={StackAlign.CENTER}
      className={props.className}
    >
      <HStack
        spacing={spacingVars.tiny}
        align={StackAlign.CENTER}
        className={s.button}
        onClick={handleClickRoot}
      >
        {hasLeadingIcon && (
          <Icon
            name={leadingIcon}
            size={16}
            color={hasOnlyRoot ? colorVars.content.emphasized : colorVars.content.default}
          />
        )}
        {hasRootLabel && (
          <Typo.Petite
            weight={hasOnlyRoot ? Weight.SEMIBOLD : Weight.MEDIUM}
            color={hasOnlyRoot ? colorVars.content.emphasized : colorVars.content.default}
          >
            {root}
          </Typo.Petite>
        )}
      </HStack>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        const handleClick = () => {
          router.push(item.href);
        };

        return (
          <HStack
            key={index}
            spacing={spacingVars.tiny}
            align={StackAlign.CENTER}
          >
            <Icon
              name={GlyphIcon.CHEVRON_RIGHT}
              size={16}
              color={colorVars.content.muted}
            />
            <Typo.Petite
              className={s.button}
              weight={isLast ? Weight.SEMIBOLD : Weight.MEDIUM}
              color={isLast ? colorVars.content.emphasized : colorVars.content.default}
              onClick={handleClick}
            >
              {item.title}
            </Typo.Petite>
          </HStack>
        );
      })}
    </HStack>
  );
}
