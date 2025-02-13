import PageTemplate from '@/components/page-template';

import { spacingVars, StackAlign, VStack } from '@tapie-kr/inspire-react';
import { Unit } from '@/lib/enum';
import ApplicationDetailActionSection from '@/sections/application/detail/Action';
import ApplicationDetailInfoSection from '@/sections/application/detail/Info';

export default function ApplicationDetailResponsePage() {
  return (
    <PageTemplate title={'신청폼 상세'}>
      <VStack
        spacing={spacingVars.medium}
        fullWidth
        align={StackAlign.START}
      >
        <ApplicationDetailInfoSection
          personalInfo={{
            name: '권지원',
            studentId: 10404,
            googleEmail: '24sunrin064@sunrint.hs.kr',
            phoneNumber: '010-2310-4403',
          }}
          applicationInfo={{
            unit: Unit.DEVELOPER,
            introduction: `TAPIE 웹 동아리 지원서
1. 자기소개안녕하세요. 저는 [이름]입니다. 현재 [학년/반]에 재학 중이며, 웹 개발에 대한 열정을 가진 학생입니다. 새로운 기술과 창의적인 아이디어를 통해 웹 개발에 도전하고 성장하고 싶어 TAPIE에 지원하게 되었습니다.
2. 지원 동기저는 웹을 통해 세상과 소통하고, 유용한 도구를 만들어 사람들에게 도움을 주고 싶다는 꿈을 가지고 있습니다. TAPIE는 웹 개발의 기초부터 심화까지 배울 수 있는 훌륭한 환경이라고 생각하며, 동아리 활동을 통해 다양한 사람들과 협업하고, 더 나은 개발자가 되고 싶습니다.
3. 관심 분야 및 경험
관심 분야: 프론트엔드 개발 (HTML, CSS, JavaScript) 및 사용자 경험(UX) 디자인
경험:
[간단한 프로젝트 또는 학습 경험 기술 - 예: 개인 웹사이트 제작, HTML/CSS 기초 학습 등]
[학교에서 진행한 IT 관련 활동 또는 과제]
4. 동아리 활동 계획TAPIE의 일원으로서, 적극적으로 프로젝트에 참여하며 팀원들과 협력하겠습니다. 또한, 새로운 기술을 배우고 공유하며, 동아리의 성장에 기여하고 싶습니다. [특정 목표 - 예: 동아리 내에서 진행하는 공모전 참여, 독창적인 웹 프로젝트 기획 등]
5. 하고 싶은 말제가 TAPIE에 합류할 수 있다면, 열정을 가지고 배우고 성장하겠습니다. 동아리의 비전과 목표를 이루는 데 최선을 다할 자신이 있습니다. 꼭 좋은 기회를 주시면 감사하겠습니다.`,
            motivation: `저는 웹 기술이 세상과 소통하는 강력한 도구라고 생각하며, 이를 활용해 다양한 아이디어를 실현하고 싶다는 열정을 가지고 있습니다. TAPIE는 웹 개발의 기초부터 심화까지 체계적으로 배울 수 있는 동아리로, 저에게 훌륭한 성장의 기회를 제공할 것이라 믿습니다.
특히, TAPIE에서 협업 프로젝트를 통해 동아리 선후배들과 아이디어를 교환하고, 실제 웹 개발 경험을 쌓으며 제 역량을 키우고 싶습니다. 더불어, 제가 가진 창의적 아이디어와 학습 열정을 바탕으로 동아리 활동에 적극적으로 기여하고 싶습니다.
웹 개발자로서의 첫걸음을 TAPIE와 함께하며, 동아리와 함께 성장해 나가고 싶습니다.`,
            expectedActivities: `저는 웹 기술이 세상과 소통하는 강력한 도구라고 생각하며, 이를 활용해 다양한 아이디어를 실현하고 싶다는 열정을 가지고 있습니다. TAPIE는 웹 개발의 기초부터 심화까지 체계적으로 배울 수 있는 동아리로, 저에게 훌륭한 성장의 기회를 제공할 것이라 믿습니다.
특히, TAPIE에서 협업 프로젝트를 통해 동아리 선후배들과 아이디어를 교환하고, 실제 웹 개발 경험을 쌓으며 제 역량을 키우고 싶습니다. 더불어, 제가 가진 창의적 아이디어와 학습 열정을 바탕으로 동아리 활동에 적극적으로 기여하고 싶습니다.
웹 개발자로서의 첫걸음을 TAPIE와 함께하며, 동아리와 함께 성장해 나가고 싶습니다.`,
            reasonToChoose: `저는 웹 기술이 세상과 소통하는 강력한 도구라고 생각하며, 이를 활용해 다양한 아이디어를 실현하고 싶다는 열정을 가지고 있습니다. TAPIE는 웹 개발의 기초부터 심화까지 체계적으로 배울 수 있는 동아리로, 저에게 훌륭한 성장의 기회를 제공할 것이라 믿습니다.
특히, TAPIE에서 협업 프로젝트를 통해 동아리 선후배들과 아이디어를 교환하고, 실제 웹 개발 경험을 쌓으며 제 역량을 키우고 싶습니다. 더불어, 제가 가진 창의적 아이디어와 학습 열정을 바탕으로 동아리 활동에 적극적으로 기여하고 싶습니다.
웹 개발자로서의 첫걸음을 TAPIE와 함께하며, 동아리와 함께 성장해 나가고 싶습니다.`,
          }}
          portfolio={['TAPIE 포트폴리오 2025', 'ReactJS 사이트']}
        />
        <ApplicationDetailActionSection />
      </VStack>
    </PageTemplate>
  );
}
