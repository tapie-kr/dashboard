import { spacingVars } from '@tapie-kr/inspire-react';

import SidebarItem from '../item';
import SidebarItemGroup from '../item-group';

import { AnimatedVStack } from '~/lib/animate';
import { PathMap } from '~/lib/pathmap';
import { PathNode } from '~/lib/pathmap/types';

interface SidebarContentProps {
  pathMap:    PathMap;
  sidebarMap: SidebarItemType[];
}

export type SidebarItemType =
  | PathNode
  | {
    title:    string;
    children: PathNode[];
  };

export default function SidebarContent(props: SidebarContentProps) {
  const { pathMap, sidebarMap } = props;

  return (
    <AnimatedVStack
      fullWidth
      spacing={spacingVars.base}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {sidebarMap.map((item, index) => 'title' in item && Array.isArray(item.children)
        ? (
          <SidebarItemGroup
            key={index}
            title={typeof item.title === 'string' ? item.title : ''}
          >
            {item.children.map((child, childIndex) => (
              <SidebarItem
                key={childIndex}
                pathMap={pathMap}
                href={child}
              />
            ))}
          </SidebarItemGroup>
        )
        :     (
          <SidebarItem
            key={index}
            pathMap={pathMap}
            href={item as PathNode}
          />
        ))}
    </AnimatedVStack>
  );
}
