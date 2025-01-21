import * as s from './style.css';

import { colorVars, HStack, StackJustify, Typo, Weight } from '@tapie-kr/inspire-react';
import { usePathname, useRouter } from 'next/navigation';

interface SidebarSubItemProps {
  title: string;
  href: string;
}

export default function SidebarSubItem(props: SidebarSubItemProps) {
  const { title, href } = props;

  const router = useRouter();
  const currentPath = usePathname();

  const isActive = currentPath.startsWith(href);

  const handleClick = () => {
    router.push(href);
  };

  return (
    <HStack
      fullWidth
      className={s.base}
      justify={StackJustify.START}
      onClick={handleClick}
    >
      <Typo.Tiny
        weight={isActive ? Weight.MEDIUM : Weight.REGULAR}
        color={isActive ? colorVars.content.emphasized : colorVars.content.default}
      >
        {title}
      </Typo.Tiny>
    </HStack>
  );
}
