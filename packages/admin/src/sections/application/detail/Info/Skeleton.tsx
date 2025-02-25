import * as s from './style.css';

function SkeletonApplicationDetailArticle({ content, skeletonWidth = 100 }: {
  content:        string;
  skeletonWidth?: number;
}) {
  return (
    <HStack align={StackAlign.START}>
      <Typo.Micro
        weight={Weight.SEMIBOLD}
        className={s.label}
      >{content}
      </Typo.Micro>
      <Skeleton
        width={skeletonWidth}
        height={20}
        borderRadius={5}
      />
    </HStack>
  );
}

import {
  colorVars,
  HStack,
  Skeleton,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

export default function SkeletonApplicationDetailInfo() {
  return (
    <VStack
      spacing={spacingVars.moderate}
      className={s.base}
      align={StackAlign.START}
    >
      <VStack
        spacing={spacingVars.micro}
        align={StackAlign.START}
      >
        <Typo.Tiny color={colorVars.content.muted}>개인 정보</Typo.Tiny>
        <VStack
          spacing={spacingVars.petite}
          align={StackAlign.START}
        >
          <SkeletonApplicationDetailArticle
            content='이름'
            skeletonWidth={50}
          />
          <SkeletonApplicationDetailArticle
            content='학번'
            skeletonWidth={70}
          />
          <SkeletonApplicationDetailArticle
            content='구글 이메일'
            skeletonWidth={120}
          />
          <SkeletonApplicationDetailArticle
            content='전화번호'
            skeletonWidth={100}
          />
        </VStack>
      </VStack>
      <VStack
        spacing={spacingVars.micro}
        align={StackAlign.START}
      >
        <Typo.Tiny color={colorVars.content.muted}>개인 정보</Typo.Tiny>
        <VStack
          spacing={spacingVars.petite}
          align={StackAlign.START}
        >
          <SkeletonApplicationDetailArticle
            content='유닛'
            skeletonWidth={40}
          />
          <SkeletonApplicationDetailArticle
            content='자기소개'
            skeletonWidth={200}
          />
          <SkeletonApplicationDetailArticle
            content='지원 동기'
            skeletonWidth={220}
          />
          <SkeletonApplicationDetailArticle
            content='기대되는 활동'
            skeletonWidth={240}
          />
          <SkeletonApplicationDetailArticle
            content='뽑아야 하는 이유'
            skeletonWidth={170}
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
