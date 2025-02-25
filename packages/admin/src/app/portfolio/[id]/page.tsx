'use client';

import {
  BrandIcon,
  Button,
  GlyphIcon,
  Icon,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { use, useEffect } from 'react';
import { PortfolioStackCategory } from '@/lib/types/portfolio/stack';
import PortfolioDetailAwardSection from '@/sections/portfolio/detail/Award';
import PortfolioDetailBannerSection from '@/sections/portfolio/detail/Banner';
import PortfolioDetailFormSection from '@/sections/portfolio/detail/Form';
import { PortfolioDetailTable } from '@/sections/portfolio/detail/table';

export default function PortfolioDetailPage({ params }: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = use(params);

  useEffect(() => {
    id;
  }, []);

  return (
    <Page title='포트폴리오 상세'>
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <PortfolioDetailBannerSection
          title='선린투데이'
          catchphrase='선린투데이는 선린인터넷고등학교 학생들을 위한 정보 제공 플랫폼입니다.'
          image='https://tapie.kr/thumbnails/sunrin_today.webp'
        />
        <PortfolioDetailFormSection />
        <PortfolioDetailAwardSection />
        <PortfolioDetailTable.member member={[
          {
            name:       '한유찬',
            studentId:  '10404',
            role:       '프론트엔드',
            roleDetail: 'Figma를 활용한 디자인에 참여했습니다',
          },
          {
            name: '신유준', studentId: '10417', role: '백엔드', roleDetail: '백엔드 개발을 담당했습니다',
          },
        ]}
        />
        <PortfolioDetailTable.stack stack={[
          {
            icon:     <Icon name={BrandIcon.CLOUDFLARE} />,
            name:     'Cloudflare',
            category: PortfolioStackCategory.OPERATION,
          },
        ]}
        />
        <PortfolioDetailTable.tag tag={[
          { label: '앱' },
          { label: '해커톤' },
          { label: '출품작' },
        ]}
        />
        <Button.Default
          disabled
          leadingIcon={GlyphIcon.CHECK}
        >
          저장하기
        </Button.Default>
      </VStack>
    </Page>
  );
}
