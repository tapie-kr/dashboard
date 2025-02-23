import * as s from './style.css';

import {
  Box,
  ButtonSize,
  GlyphIcon,
  HStack,
  IconButton,
  Input,
  InputSize,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { type ChangeEventHandler } from 'react';

import Breadcrumb from '~/layout/breadcrumb';
import { PathMap } from '~/lib/pathmap';

export interface HeaderProps {
  title:                string;
  hasCount?:            boolean;
  count?:               number;
  hasSearch?:           boolean;
  searchValue?:         string;
  pathMap:              PathMap;
  onChangeSearchValue?: ChangeEventHandler<HTMLInputElement>;
}

export default function Header(props: HeaderProps) {
  const {
    title,
    hasCount = true,
    count,
    hasSearch = true,
    searchValue,
    pathMap,
    onChangeSearchValue: handleSearchValue,
  } = props;

  return (
    <VStack
      spacing={spacingVars.medium}
      align={StackAlign.START}
    >
      <Breadcrumb pathMap={pathMap} />
      <VStack
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <HStack spacing={spacingVars.micro}>
          <Typo.Medium weight={Weight.BOLD}>{title}</Typo.Medium>
          {hasCount && <Typo.Moderate weight={Weight.SEMIBOLD}>{count}</Typo.Moderate>}
        </HStack>
        {hasSearch && handleSearchValue && (
          <HStack spacing={spacingVars.mini}>
            <Box className={s.searchInput}>
              <Input.Text
                value={searchValue}
                placeholder={`${title} 검색`}
                size={InputSize.MEDIUM}
                onChange={handleSearchValue}
              />
            </Box>
            <IconButton
              icon={GlyphIcon.ARROW_FORWARD}
              size={ButtonSize.MEDIUM}
            />
          </HStack>
        )}
      </VStack>
    </VStack>
  );
}
