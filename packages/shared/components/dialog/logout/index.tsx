'use client';

import * as s from './style.css';

import {
  Button,
  ButtonVariant,
  colorVars,
  Dialog,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  Theme,
  Toggler,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import React from 'react';

interface LogoutDialogProps {
  toggler: Toggler;
  onClick: () => void;
}

export default function LogoutDialog(props: LogoutDialogProps) {
  const { toggler, onClick } = props;

  const [
    _isModalOpen,
    _toggle,
    setIsModalOpen,
  ] = toggler;

  const handleCloseDialog = () => {
    setIsModalOpen(false);
  };

  return (
    <Dialog
      toggler={toggler}
    >
      <VStack
        spacing={spacingVars.medium}
        className={s.base}
      >
        <VStack
          fullWidth
          spacing={spacingVars.moderate}
        >
          <HStack
            fullWidth
            align={StackAlign.START}
          >
            <VStack
              fullWidth
              align={StackAlign.START}
            >
              <Typo.Moderate weight={Weight.SEMIBOLD}>로그아웃</Typo.Moderate>
              <Typo.Base
                weight={Weight.MEDIUM}
                color={colorVars.content.default}
              >정말로 로그아웃 하시겠습니까?
              </Typo.Base>
            </VStack>
            <Icon
              name={GlyphIcon.CLOSE}
              onClick={handleCloseDialog}
            />
          </HStack>
        </VStack>
        <HStack
          fullWidth
          spacing={spacingVars.micro}
        >
          <Button.Default
            fullWidth
            leadingIcon={GlyphIcon.DELETE}
            theme={Theme.RED}
            variant={ButtonVariant.SECONDARY}
            onClick={async () => {
              await onClick();

              handleCloseDialog();
            }}
          >로그아웃
          </Button.Default>
          <Button.Default
            fullWidth
            leadingIcon={GlyphIcon.CLOSE}
            variant={ButtonVariant.SECONDARY}
            onClick={handleCloseDialog}
          >취소
          </Button.Default>
        </HStack>
      </VStack>
    </Dialog>
  );
}
