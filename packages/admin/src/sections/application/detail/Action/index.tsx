import {
  Button,
  ButtonSize,
  ButtonVariant,
  GlyphIcon,
  HStack,
  spacingVars,
  Theme,
  useToggle,
} from '@tapie-kr/inspire-react';
import DeleteDialog from '@/components/dialog/delete';

import { usePrivateDeleteFormApplication } from '@tapie-kr/api-client';
import { useRouter } from 'next/navigation';

interface ApplicationDetailActionSectionProps {
  responseId: number;
}

export default function ApplicationDetailActionSection(props: ApplicationDetailActionSectionProps) {
  const { responseId } = props;
  const router = useRouter();

  const {
    mutate,
    isPending,
    isSuccess,
  } = usePrivateDeleteFormApplication();

  const toggler = useToggle();
  const [_isModalOpen, toggle] = toggler;

  return (
    <HStack spacing={spacingVars.petite}>
      <Button.Default
        size={ButtonSize.MEDIUM}
        leadingIcon={GlyphIcon.CHECK}
      >
        합격 처리
      </Button.Default>
      <Button.Default
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.MEDIUM}
        theme={Theme.RED}
        leadingIcon={GlyphIcon.DELETE}
        onClick={toggle}
      >
        삭제
      </Button.Default>
      <DeleteDialog
        title='신청폼 응답'
        toggler={toggler}
        isPending={isPending}
        isSuccess={isSuccess}
        onClick={async () => {
          await mutate({ param: { applicationUUID: responseId } });

          router.back();
        }}
      />
    </HStack>
  );
}
