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
import Breadcrumb from '../breadcrumb';

interface HeaderProps {
  title: string;
  hasCount?: boolean;
  count?: number;
  hasSearch?: boolean;
  searchValue?: string;
  handleSearchValue?: ChangeEventHandler<HTMLInputElement>;
}

export default function Header(props: HeaderProps) {
  const { title, hasCount = true, count, hasSearch = true, searchValue, handleSearchValue } = props;

  return (
    <VStack
      spacing={spacingVars.medium}
      align={StackAlign.START}
    >
      <Breadcrumb />
      <VStack
        spacing={spacingVars.base}
        align={StackAlign.START}
      >
        <HStack spacing={spacingVars.micro}>
          <Typo.Medium weight={Weight.BOLD}>{title}</Typo.Medium>
          {hasCount && <Typo.Moderate weight={Weight.SEMIBOLD}>{count}</Typo.Moderate>}
        </HStack>
        {hasSearch && (
          <HStack spacing={spacingVars.mini}>
            <Box className={s.searchInput}>
              <Input.Text
                value={searchValue}
                onChange={handleSearchValue}
                placeholder={`${title} 검색`}
                size={InputSize.MEDIUM}
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
