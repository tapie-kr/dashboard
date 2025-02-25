import {
  BrandIcon,
  GlyphIcon,
  spacingVars,
  StackAlign,
  VStack,
} from '@tapie-kr/inspire-react';
import Page from '@/components/page';

import { MemberType } from '@tapie-kr/api-client';
import { MemberRole, MemberUnit } from '@tapie-kr/api-client/enum';
import { use } from 'react';
import MemberDetailActionSection from '@/sections/member/detail/Action';
import MemberDetailBasicInfoSection from '@/sections/member/detail/BasicInfo';
import MemberDetailInfoSection from '@/sections/member/detail/Info';
import { Skill } from '@/sections/member/detail/Info/shared';
import MemberDetailSummarySection from '@/sections/member/detail/Summary';

export default function MemberDetailPage({ params }: {
  params: Promise<{
    id: number;
  }>;
}) {
  const { id } = use(params);

  const member: MemberType = {
    uuid:        '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    name:        'Jeewon Kwon',
    username:    'jeewonkwon',
    googleEmail: 'noreply@tapie.kr',
    role:        MemberRole.MANAGER,
    unit:        MemberUnit.DEVELOPER,
    generation:  119,
    profileUri:  'https://tapie.kr/profile.png',
  };

  return (
    <Page title='부원 상세'>
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <MemberDetailSummarySection
          {...member}
          stats={[
            46,
            46,
            46,
            46,
          ]}
        />
        <MemberDetailBasicInfoSection />
        <MemberDetailActionSection />
        <MemberDetailInfoSection
          profileLink={[
            {
              label: 'Github',
              link:  'https://github.com/tapie-kr',
              icon:  BrandIcon.GITHUB,
            },
          ]}
          awards={[
            {
              contestName: '1회 무슨무슨 대회',
              gradeLabel:  '우수상',
              grade:       2,
              memberCount: 5,
            },
          ]}
          portfolio={[
            {
              title: '선린투데이',
              tags:  [
                {
                  name: 'Badge',
                  icon: GlyphIcon.DEFAULT,
                },
                {
                  name: 'Badge',
                  icon: GlyphIcon.DEFAULT,
                },
                {
                  name: 'Badge',
                  icon: GlyphIcon.DEFAULT,
                },
                {
                  name: 'Badge',
                  icon: GlyphIcon.DEFAULT,
                },
              ],
              memberCount:   3,
              viewCount:     81,
              downloadCount: 52,
            },
          ]}
          skill={[
            {
              name: 'Github',
              type: Skill.DEVELOPMENT,
              icon: BrandIcon.GITHUB,
            },
          ]}
          history={[
            {
              label:       'Github',
              link:        'https://github.com/tapie-kr',
              isImportant: true,
            },
          ]}
        />
      </VStack>
    </Page>
  );
}
