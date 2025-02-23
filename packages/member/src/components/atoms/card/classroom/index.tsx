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

import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface ClassroomCardProps {
  image:   string;
  title:   string;
  content: string;
}

export default function ClassroomCard(props: ClassroomCardProps) {
  const {
    image,
    title,
    content,
  } = props;

  const router = useRouter();

  const handleClick = () => {
    router.push(pathMap.resolvePath(path.classroom, 1));
  };

  return (
    <HStack
      spacing={spacingVars.base}
      className={s.base}
      onClick={handleClick}
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
        spacing={spacingVars.mini}
        align={StackAlign.START}
      >
        <Typo.Base weight={Weight.SEMIBOLD}>{title}</Typo.Base>
        <Typo.Tiny
          weight={Weight.MEDIUM}
          color={colorVars.content.default}
        >
          {content}
        </Typo.Tiny>
      </VStack>
    </HStack>
  );
}
