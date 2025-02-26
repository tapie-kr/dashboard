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

import React, { useEffect } from 'react';

interface DeleteDialogProps {
  title:     string;
  toggler:   Toggler;
  isPending: boolean;
  isSuccess: boolean;
  onClick:   () => void;
}

export default function DeleteDialog(props: DeleteDialogProps) {
  const {
    title,
    toggler,
    isPending,
    isSuccess,
    onClick,
  } = props;

  const [
    _isModalOpen,
    _toggle,
    setIsModalOpen,
  ] = toggler;

  const handleCloseDialog = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      handleCloseDialog();
    }
  }, [isSuccess]);

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
              <Typo.Moderate weight={Weight.SEMIBOLD}>{title} 삭제</Typo.Moderate>
              <Typo.Base
                weight={Weight.MEDIUM}
                color={colorVars.content.default}
              >정말로 삭제하시겠습니까?
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
            disabled={isPending}
            theme={Theme.RED}
            variant={ButtonVariant.SECONDARY}
            onClick={async () => {
              await onClick();

              handleCloseDialog();
            }}
          >삭제
          </Button.Default>
          <Button.Default
            fullWidth
            leadingIcon={GlyphIcon.CLOSE}
            disabled={isPending}
            variant={ButtonVariant.SECONDARY}
            onClick={handleCloseDialog}
          >취소
          </Button.Default>
        </HStack>
      </VStack>
    </Dialog>
  );
}
