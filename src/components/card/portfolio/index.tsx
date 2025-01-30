import * as s from './style.css';

import {
  AspectRatio,
  Badge,
  BadgeSize,
  colorVars,
  HStack,
  type IconName,
  Image,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import { useRouter } from 'next/navigation';
import { resolvePath } from '@/lib/pathmap';
import { pathMap } from '@/lib/pathmap/map';

interface PortfolioCardProps {
  title: string;
  tags: { name: string; icon?: IconName }[];
  image: string;
  catchphrase: string;
}

export default function PortfolioCard(props: PortfolioCardProps) {
  const { title, tags, image, catchphrase } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(resolvePath(pathMap.portfolio, 3));
  };

  return (
    <VStack
      spacing={spacingVars.base}
      className={s.base}
      align={StackAlign.START}
      onClick={handleClick}
    >
      <AspectRatio
        ratio={16 / 9}
        fullWidth
        fullHeight
        className={s.image}
      >
        <Image
          src={image}
          alt={title}
          fullWidth
          fullHeight
        />
      </AspectRatio>
      <VStack
        spacing={spacingVars.optical}
        align={StackAlign.START}
      >
        <Typo.Petite weight={Weight.SEMIBOLD}>{title}</Typo.Petite>
        <Typo.Tiny color={colorVars.content.default}>{catchphrase}</Typo.Tiny>
      </VStack>
      <HStack spacing={spacingVars.tiny}>
        {tags.map((tag, index) => (
          <Badge.Default
            leadingIcon={tag.icon}
            key={index}
            label={tag.name}
            size={BadgeSize.SMALL}
          />
        ))}
      </HStack>
    </VStack>
  );
}
