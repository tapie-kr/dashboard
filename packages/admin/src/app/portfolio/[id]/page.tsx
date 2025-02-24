import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { use } from 'react';
import PortfolioDetailBannerSection from '@/sections/portfolio/detail/Banner';
import PortfolioDetailFormSection from '@/sections/portfolio/detail/Form';
import PortfolioDetailInfoSection from '@/sections/portfolio/detail/Info';

export default function PortfolioDetailPage({ params }: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = use(params);

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
        <PortfolioDetailInfoSection info={[{ label: 'https://github.com/tapie-kr' }]} />
      </VStack>
    </Page>
  );
}
