import * as s from './style.css';

import { HStack, spacingVars, StackJustify, VStack } from '@tapie-kr/inspire-react';
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
    <VStack
      fullWidth
      fullHeight
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
    </VStack>
  );
}
