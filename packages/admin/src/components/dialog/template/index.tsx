'use client';

import * as s from './style.css';

import {
  Button,
  colorVars,
  Dialog,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  StackAlign,
  Toggler,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import React, { useEffect } from 'react';

interface MutateDialogProps {
  title:     string;
  toggler:   Toggler;
  isPending: boolean;
  isSuccess: boolean;
  onClick:   () => void;
  children:  React.ReactNode;
}

export default function DialogTemplate(props: MutateDialogProps) {
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
              <Typo.Moderate weight={Weight.SEMIBOLD}>{title}</Typo.Moderate>
              <Typo.Base
                weight={Weight.MEDIUM}
                color={colorVars.content.default}
              >아래 필드를 채워주세요
              </Typo.Base>
            </VStack>
            <Icon
              name={GlyphIcon.CLOSE}
              onClick={handleCloseDialog}
            />
          </HStack>
        </VStack>
        <VStack
          fullWidth
          spacing={spacingVars.base}
        >
          {props.children}
        </VStack>
        <Button.Default
          fullWidth
          leadingIcon={GlyphIcon.INBOX}
          disabled={isPending}
          onClick={async () => {
            await onClick();

            handleCloseDialog();
          }}
        >저장
        </Button.Default>
      </VStack>
    </Dialog>
  );
}
