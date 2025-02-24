'use client';

import * as s from './style.css';

import {
  colorVars,
  HStack,
  spacingVars,
  StackAlign,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { useRouter } from 'next/navigation';
import { path, pathMap } from '@/lib/pathmap';

interface ClassroomCardProps {
  title:   string;
  content: string;
}

export default function ClassroomCard(props: ClassroomCardProps) {
  const { title, content } = props;
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
