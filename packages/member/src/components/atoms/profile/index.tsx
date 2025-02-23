import {
  AspectRatio,
  HStack,
  Image,
  spacingVars,
  Typo,
  Weight,
} from '@tapie-kr/inspire-react';

interface ProfileProps {
  name:   string;
  avatar: string;
}

import * as s from './style.css';

export default function Profile(props: ProfileProps) {
  const { name, avatar } = props;

  return (
    <HStack spacing={spacingVars.micro}>
      <AspectRatio
        ratio={1 / 1}
        width={22}
        className={s.image}
      >
        <Image
          src={avatar}
          alt={name}
        />
      </AspectRatio>
      <Typo.Tiny weight={Weight.MEDIUM}>{name}</Typo.Tiny>
    </HStack>
  );
}
