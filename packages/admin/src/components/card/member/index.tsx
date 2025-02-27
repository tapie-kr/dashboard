import * as s from './style.css';

import {
  AspectRatio,
  BadgeSize,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  Image,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { MemberType } from '@tapie-kr/api-client';
import GenerationBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/generation';
import RoleBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/role';
import UnitBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/unit';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface MemberCardProps extends Omit<MemberType, 'awards' | 'skills' | 'permissions' | 'history' | 'links' | 'isGraduated'> {
}

/*
 *uuid: string;
 *    username: string;
 *    googleEmail: string;
 *    unit: MemberUnit;
 *    role: MemberRole;
 *    generation: number;
 *    studentID: number;
 *    profileUri: string;
 */

export default function MemberCard(props: MemberCardProps) {
  const {
    name,
    uuid,
    studentID,
    username,
    unit,
    role,
    generation,
    profileUri,
  } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(pathMap.resolvePath(path.member, uuid));
  };

  return (
    <HStack
      spacing={spacingVars.base}
      className={s.base}
      justify={StackJustify.START}
      onClick={handleClick}
    >
      <AspectRatio
        ratio={1 / 1}
        width={60}
        className={s.image}
      >
        <Image
          fullWidth
          fullHeight
          src={profileUri}
          alt={username}
        />
      </AspectRatio>
      <VStack
        spacing={spacingVars.tiny}
        align={StackAlign.START}
      >
        <HStack spacing={spacingVars.mini}>
          <Typo.Base weight={Weight.SEMIBOLD}>{studentID} {name}</Typo.Base>
          <Icon
            name={GlyphIcon.ARROW_FORWARD}
            size={14}
            color={colorVars.content.default}
          />
        </HStack>
        <HStack spacing={spacingVars.tiny}>
          <RoleBadge
            role={role}
            size={BadgeSize.SMALL}
          />
          <UnitBadge
            unit={unit}
            size={BadgeSize.SMALL}
          />
          <GenerationBadge
            generation={generation}
            size={BadgeSize.SMALL}
          />
        </HStack>
      </VStack>
    </HStack>
  );
}
