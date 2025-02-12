'use client';

import * as s from './style.css';

import { HStack, spacingVars, StackJustify, VStack } from '@tapie-kr/inspire-react';
import { AnimatedVStack } from '@/lib/animate';
import Header, { type HeaderProps } from '../header';

interface PageTemplateProps extends HeaderProps {
  children: React.ReactNode;
}

export default function PageTemplate(props: PageTemplateProps) {
  const {
    title,
    count,
    hasSearch = true,
    hasCount = true,
    searchValue,
    onChangeSearchValue: handleSearchValue,
  } = props;

  return (
    <AnimatedVStack
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      fullWidth
      justify={StackJustify.START}
      className={s.base}
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
