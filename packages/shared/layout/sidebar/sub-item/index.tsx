import * as s from './style.css';

import {
  colorVars,
  HStack,
  StackJustify,
  Typo,
  Weight,
} from '@tapie-kr/inspire-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarSubItemProps {
  title: string;
  href:  string;
}

export default function SidebarSubItem(props: SidebarSubItemProps) {
  const { title, href } = props;
  const currentPath = usePathname();
  const isActive = currentPath.startsWith(href);

  return (
    <Link
      href={href}
      style={{ width: '100%' }}
    >
      <HStack
        fullWidth
        className={s.base}
        justify={StackJustify.START}
      >
        <Typo.Tiny
          weight={isActive ? Weight.MEDIUM : Weight.REGULAR}
          color={isActive ? colorVars.content.emphasized : colorVars.content.default}
        >
          {title}
        </Typo.Tiny>
      </HStack>
    </Link>
  );
}
