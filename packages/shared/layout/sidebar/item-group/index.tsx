import * as s from './style.css';

import {
  colorVars,
  HStack,
  spacingVars,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import React from 'react';

interface SidebarItemGroupProps {
  title:    string;
  children: React.ReactNode;
}

export default function SidebarItemGroup(props: SidebarItemGroupProps) {
  const { title } = props;

  return (
    <VStack
      fullWidth
      spacing={spacingVars.mini}
    >
      <HStack
        fullWidth
        justify={StackJustify.START}
        className={s.titleContainer}
      >
        <Typo.Mini
          weight={Weight.MEDIUM}
          color={colorVars.content.muted}
        >
          {title}
        </Typo.Mini>
      </HStack>
      {props.children}
    </VStack>
  );
}
