import { spacingVars, VStack } from '@tapie-kr/inspire-react';
import SidebarItem from '../item';
import SidebarItemGroup from '../item-group';

export default function SidebarContent() {
  return (
    <VStack
      fullWidth
      spacing={spacingVars.base}
    >
      <SidebarItem
        title={'홈'}
        href={'/'}
      ></SidebarItem>
      <SidebarItemGroup title={'수업'}>
        <SidebarItem
          title='수업'
          href='/class'
          subItems={[
            {
              title: '게시글',
              href: '/board',
            },
            {
              title: '출석',
              href: '/attendance',
            },
          ]}
        />
        <SidebarItem
          title='과제'
          href='/homework'
        />
        <SidebarItem
          title='출석'
          href='/attendance'
        />
      </SidebarItemGroup>
      <SidebarItemGroup title={'관리'}>
        <SidebarItem
          title='부원'
          href='/member'
        />
        <SidebarItem
          title='포트폴리오'
          href='/portfolio'
        />
        <SidebarItem
          title='수상실적'
          href='/achievement'
        />
        <SidebarItem
          title='신청폼'
          href='/application'
        />
      </SidebarItemGroup>
      <SidebarItemGroup title={'기타'}>
        <SidebarItem
          title='공지사항'
          href='/announcement'
        />
        <SidebarItem
          title='통계'
          href='/statistics'
          subItems={[
            {
              title: '사이트',
              href: '/site',
            },
            {
              title: '포트폴리오',
              href: '/portfolio',
            },
            {
              title: '부원 프로필',
              href: '/profile',
            },
          ]}
        />
        <SidebarItem
          title='메타데이터'
          href='/metadata'
          subItems={[
            {
              title: '대회',
              href: '/contest',
            },
            {
              title: '에셋',
              href: '/asset',
            },
            {
              title: '기술',
              href: '/technology',
            },
          ]}
        />
      </SidebarItemGroup>
    </VStack>
  );
}
