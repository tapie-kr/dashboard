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

import { MemberType } from '@tapie-kr/api-client';
import {
  getRoleIcon,
  getRoleTheme,
  getUnitIcon,
  isExecutive,
} from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface MemberCardProps extends MemberType {
}

export default function MemberCard(props: MemberCardProps) {
  const {
    name,
    uuid,
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
          <Typo.Base weight={Weight.SEMIBOLD}>10404 {name}</Typo.Base>
          <Icon
            name={GlyphIcon.ARROW_FORWARD}
            size={14}
            color={colorVars.content.default}
          />
        </HStack>
        <HStack spacing={spacingVars.tiny}>
          {isExecutive(role) && (
            <Badge.Default
              leadingIcon={getRoleIcon()}
              theme={getRoleTheme()}
              label={role}
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
            label={`${generation}기${false ? ' (졸업)' : ''}`}
            size={BadgeSize.SMALL}
          />
        </HStack>
      </VStack>
    </HStack>
  );
}
