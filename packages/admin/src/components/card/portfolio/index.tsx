import * as s from './style.css';

import {
  AspectRatio,
  colorVars,
  Image,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { MemberType } from '@tapie-kr/api-client';
import { formatParticipants } from '@tapie-kr/dashboard-shared/lib/utils/participants';
import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface PortfolioCardProps {
  title:       string;
  image:       string;
  catchphrase: string;
  members:     MemberType[];
}

export default function PortfolioCard(props: PortfolioCardProps) {
  const {
    title,
    image,
    catchphrase,
    members,
  } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(pathMap.resolvePath(path.portfolio, 3));
  };

  return (
    <VStack
      spacing={spacingVars.base}
      className={s.base}
      align={StackAlign.START}
      onClick={handleClick}
    >
      <AspectRatio
        fullWidth
        fullHeight
        ratio={16 / 9}
        className={s.image}
      >
        <Image
          fullWidth
          fullHeight
          src={image}
          alt={title}
        />
      </AspectRatio>
      <VStack
        spacing={spacingVars.optical}
        align={StackAlign.START}
      >
        <Typo.Mini
          weight={Weight.SEMIBOLD}
          color={colorVars.content.default}
        >{formatParticipants(members.map(member => member.name))}
        </Typo.Mini>
        <Typo.Base weight={Weight.SEMIBOLD}>{title}</Typo.Base>
        <Typo.Tiny color={colorVars.content.default}>{catchphrase}</Typo.Tiny>
      </VStack>
    </VStack>
  );
}
