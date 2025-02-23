import * as s from './style.css';

import {
  AspectRatio,
  Badge,
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

import { useRouter } from 'next/navigation';
import { type Executive, type Unit } from '../../../lib/enum';
import { getExecutiveIcon, getExecutiveTheme, getUnitIcon } from '../../../lib/enum/utils';
import { resolvePath } from '../../../lib/pathmap';
import { pathMap } from '../../../lib/pathmap/map';
import { type Member } from '../../../lib/types';
import { getMemberString } from '../../../lib/types/utils';

interface MemberCardProps {
  profileImage: string;
  member: Member;
  executive?: Executive;
  unit: Unit;
  generation: number;
  isGraduated?: boolean;
}

export default function MemberCard(props: MemberCardProps) {
  const { profileImage, member, executive, unit, generation, isGraduated = false } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(resolvePath(pathMap.member, 5));
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
          src={profileImage}
          alt={member.name}
        />
      </AspectRatio>
      <VStack
        spacing={spacingVars.tiny}
        align={StackAlign.START}
      >
        <HStack spacing={spacingVars.mini}>
          <Typo.Base weight={Weight.SEMIBOLD}>{getMemberString(member)}</Typo.Base>
          <Icon
            name={GlyphIcon.ARROW_FORWARD}
            size={14}
            color={colorVars.content.default}
          />
        </HStack>
        <HStack spacing={spacingVars.tiny}>
          {executive && (
            <Badge.Default
              leadingIcon={getExecutiveIcon()}
              theme={getExecutiveTheme()}
              label={executive}
              size={BadgeSize.SMALL}
            />
          )}
          <Badge.Default
            leadingIcon={getUnitIcon(unit)}
            label={unit}
            size={BadgeSize.SMALL}
          />
          <Badge.Default
            leadingIcon={GlyphIcon.SCHOOL}
            label={`${generation}기${isGraduated ? ' (졸업)' : ''}`}
            size={BadgeSize.SMALL}
          />
        </HStack>
      </VStack>
    </HStack>
  );
}
