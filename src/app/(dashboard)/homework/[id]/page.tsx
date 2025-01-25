'use client';

import * as s from './page.css';

import PageTemplate from '@/components/page-template';

import {
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { use, useEffect } from 'react';
import { homeworkData } from '../page';

export default function HomeworkDetailPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);

  useEffect(() => {
    console.log(id);
  }, [id]);

  const title = homeworkData.find(data => data.id === Number(id))?.title;

  return (
    <PageTemplate
      title={title || '과제 상세'}
      hasCount={false}
    >
      <VStack
        spacing={spacingVars.medium}
        align={StackAlign.START}
        fullWidth
      >
        <VStack
          spacing={spacingVars.petite}
          align={StackAlign.START}
        >
          <VStack
            spacing={spacingVars.base}
            className={s.detail}
            fullWidth
          >
            <VStack
              spacing={spacingVars.tiny}
              align={StackAlign.START}
              fullWidth
            >
              <Typo.Tiny
                weight={Weight.MEDIUM}
                color={colorVars.content.muted}
              >
                과제 내용
              </Typo.Tiny>
              <Typo.Micro weight={Weight.MEDIUM}>
                1. 기본 앱 구현
                <br />
                테스트입니다.
              </Typo.Micro>
            </VStack>
            <VStack
              spacing={spacingVars.tiny}
              align={StackAlign.START}
              fullWidth
            >
              <Typo.Tiny
                weight={Weight.MEDIUM}
                color={colorVars.content.muted}
              >
                첨부 파일
              </Typo.Tiny>
              <HStack spacing={spacingVars.tiny}>
                <Button.Default
                  leadingIcon={GlyphIcon.UPLOAD}
                  size={ButtonSize.SMALL}
                  variant={ButtonVariant.SECONDARY}
                >
                  첨부파일 업로드
                </Button.Default>
                {/* TODO SEGMENT */}
              </HStack>
            </VStack>
          </VStack>
          <HStack spacing={spacingVars.petite}>
            <Button.Default
              size={ButtonSize.SMALL}
              leadingIcon={GlyphIcon.CHECK}
            >
              과제 채점하기
            </Button.Default>
            <Button.Default
              size={ButtonSize.SMALL}
              variant={ButtonVariant.SECONDARY}
              leadingIcon={GlyphIcon.CLOSE}
            >
              과제 닫기
            </Button.Default>
          </HStack>
        </VStack>
      </VStack>
    </PageTemplate>
  );
}
