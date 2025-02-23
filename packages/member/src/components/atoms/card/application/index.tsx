'use client';

import * as s from './style.css';

import {
  AspectRatio,
  colorVars,
  HStack,
  Image,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

interface ApplicationCardProps {
  image:       string;
  type?:       string;
  title:       string;
  description: string;
}

export default function ApplicationCard(props: ApplicationCardProps) {
  const {
    image,
    type = 'EMERGENCY',
    title,
    description,
  } = props;

  return (
    <HStack
      className={s.base}
      spacing={spacingVars.base}
      align={StackAlign.START}
    >
      <AspectRatio
        ratio={1 / 1}
        width={40}
        className={s.image}
      >
        <Image
          src={image}
          alt={title}
        />
      </AspectRatio>
      <VStack
        fullWidth
        spacing={spacingVars.tiny}
      >
        <VStack
          fullWidth
          align={StackAlign.START}
        >
          <Typo.Mini color={colorVars.content.default}>{type}</Typo.Mini>
          <Typo.Base weight={Weight.SEMIBOLD}>{title}</Typo.Base>
        </VStack>
        <Typo.Tiny
          weight={Weight.MEDIUM}
          color={colorVars.content.default}
        >
          {description}
        </Typo.Tiny>
      </VStack>
    </HStack>
  );
}
