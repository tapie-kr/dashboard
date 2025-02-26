'use client';

import {
  Button,
  ButtonSize,
  ButtonVariant,
  GlyphIcon,
  HStack,
  spacingVars,
} from '@tapie-kr/inspire-react';

import { Temporal } from '@js-temporal/polyfill';
import { usePrivateCreateAward } from '@tapie-kr/api-client';
import { formatDateToISO } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';
import { AwardsCreateCompetitionType } from '../Form';
import { AwardsCreateMemberType } from '../Info';

interface AwardsCreateActionSectionProps {
  competition: AwardsCreateCompetitionType;
  members:     AwardsCreateMemberType[];
  grade:       number | undefined;
  gradeLabel:  string | undefined;
  title:       string;
  rewardedAt:  Temporal.PlainDate | undefined;
}

export default function AwardsCreateActionSection(props: AwardsCreateActionSectionProps) {
  const {
    competition,
    members,
    grade,
    gradeLabel,
    title,
    rewardedAt,
  } = props;

  const router = useRouter();
  const { mutate } = usePrivateCreateAward();

  return (
    <HStack spacing={spacingVars.petite}>
      {JSON.stringify({
        title:       title,
        competition: {
          name: competition.name || undefined,
          uuid: competition.uuid || undefined,
        },
        rewardedAt:  formatDateToISO(rewardedAt),
        grade:       grade || 0,
        gradeLabel:  gradeLabel || '',
        membersUUID: members.map(member => member.uuid),
      })}
      <Button.Default
        size={ButtonSize.SMALL}
        leadingIcon={GlyphIcon.ADD}
        onClick={async ()  => {
          if (!competition.uuid && !competition.name) {
            console.log('competition is not selected');

            return;
          }

          if (!grade || !gradeLabel) {
            console.log('grade is not selected');

            return;
          }

          if (members.length === 0) {
            console.log('members are not selected');

            return;
          }

          if (!rewardedAt) {
            console.log('rewardedAt is not selected');

            return;
          }

          if (!title) {
            console.log('title is not selected');

            return;
          }

          console.log('create award');

          await mutate({
            title:       title,
            competition: {
              name: competition.name || undefined,
              uuid: competition.uuid || undefined,
            },
            rewardedAt:  formatDateToISO(rewardedAt),
            grade:       grade || 0,
            gradeLabel:  gradeLabel || '',
            membersUUID: members.map(member => member.uuid),
          });

          router.push(pathMap.resolvePath(path.awards));
        }}
      >
        수상실적 등록하기
      </Button.Default>
      <Button.Default
        variant={ButtonVariant.SECONDARY}
        size={ButtonSize.SMALL}
        leadingIcon={GlyphIcon.CLOSE}
        onClick={() => {
          router.push(pathMap.resolvePath(path.awards));
        }}
      >
        취소하기
      </Button.Default>
    </HStack>
  );
}
