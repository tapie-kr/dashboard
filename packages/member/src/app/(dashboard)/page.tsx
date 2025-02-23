import { HStack, spacingVars } from '@tapie-kr/inspire-react';
import HomeworkCardGroup from '@/components/organisms/card-group/homework';
import Page from '@/components/page';

export default function IndexPage() {
  return (
    <Page title='한유찬님 환영합니다!'>
      <HStack
        fullWidth
        spacing={spacingVars.medium}
      >
        <HomeworkCardGroup />
      </HStack>
    </Page>
  );
}
