'use client';

import * as s from './style.css';

import {
  HStack,
  spacingVars,
  StackJustify,
  VStack,
} from '@tapie-kr/inspire-react';

import Header, { type HeaderProps } from '../header';

import { AnimatedVStack } from '~/lib/animate';

export interface PageTemplateProps extends HeaderProps {
  children: React.ReactNode;
}

export default function PageTemplate(props: PageTemplateProps) {
  const {
    title,
    count,
    hasSearch = true,
    hasCount = true,
    searchValue,
    pathMap,
    onChangeSearchValue: handleSearchValue,
  } = props;

  return (
    <AnimatedVStack
      fullWidth
      justify={StackJustify.START}
      className={s.base}
      transition={{ duration: 0.5 }}
      initial={{
        opacity: 0,
        y:       20,
      }}
      animate={{
        opacity: 1,
        y:       0,
      }}
    >
      <VStack
        fullWidth
        className={s.container}
        spacing={spacingVars.jumbo}
      >
        <HStack
          fullWidth
          justify={StackJustify.START}
        >
          <Header
            pathMap={pathMap}
            title={title}
            count={count}
            hasCount={hasCount}
            hasSearch={hasSearch}
            searchValue={searchValue}
            onChangeSearchValue={handleSearchValue}
          />
        </HStack>
        {props.children}
      </VStack>
    </AnimatedVStack>
  );
}
