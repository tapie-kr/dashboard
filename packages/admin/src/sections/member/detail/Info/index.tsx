'use client';

import {
  Badge,
  BadgeSize,
  BadgeTheme,
  Button,
  ButtonSize,
  DataTable,
  GlyphIcon,
  HStack,
  spacingVars,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import {
  getSkillIcon,
  type MemberInfoAwards,
  type MemberInfoHistory,
  type MemberInfoPortfolio,
  type MemberInfoProfileLink,
  type MemberInfoSkill,
} from './shared';

interface MemberDetailInfoSectionProps {
  profileLink: MemberInfoProfileLink[];
  awards:      MemberInfoAwards[];
  portfolio:   MemberInfoPortfolio[];
  skill:       MemberInfoSkill[];
  history:     MemberInfoHistory[];
}

export default function MemberDetailInfoSection(props: MemberDetailInfoSectionProps) {
  const {
    profileLink,
    awards,
    portfolio,
    skill,
    history,
  } = props;

  return (
    <VStack spacing={spacingVars.jumbo}>
      <InfoItem
        title='프로필 링크'
        buttonText='링크 추가'
      >
        <DataTable
          showIndex
          data={profileLink}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: () => {
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: () => {
              },
            },
          ]}
          columns={[
            {
              key:        'label',
              label:      '라벨',
              width:      150,
              isSortable: true,
            },
            {
              key:        'link',
              label:      '링크',
              width:      300,
              isSortable: true,
            },
            {
              key:        'icon',
              label:      '아이콘',
              width:      180,
              isSortable: true,
              cell:       (icon, _, data) => (
                <Badge.Default
                  leadingIcon={icon}
                  label={data.label}
                />
              ),
            },
          ]}
        />
      </InfoItem>
      <InfoItem
        title='수상실적'
        buttonText='수상실적 추가'
      >
        <DataTable
          showIndex
          data={awards}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: () => {
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: () => {
              },
            },
          ]}
          columns={[
            {
              key:        'contestName',
              label:      '대회 이름',
              width:      250,
              isSortable: true,
            },
            {
              key:        'gradeLabel',
              label:      '등급 이름',
              width:      130,
              isSortable: true,
            },
            {
              key:        'grade',
              label:      '등급',
              width:      100,
              isSortable: true,
            },
            {
              key:        'memberCount',
              label:      '참여 인원',
              width:      100,
              isSortable: true,
              cell:       memberCount => `${memberCount}명`,
            },
          ]}
        />
      </InfoItem>
      <InfoItem
        title='포트폴리오'
        buttonText='포트폴리오 추가'
      >
        <DataTable
          showIndex
          data={portfolio}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: () => {
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: () => {
              },
            },
          ]}
          columns={[
            {
              key:        'title',
              label:      '이름',
              width:      150,
              isSortable: true,
            },
            {
              key:        'tags',
              label:      '태그',
              width:      270,
              isSortable: true,
              cell:       tags => (
                <HStack spacing={spacingVars.tiny}>
                  {tags.map((tag, index) => (
                    <Badge.Default
                      key={index}
                      size={BadgeSize.SMALL}
                      label={tag.name}
                      leadingIcon={tag.icon}
                    />
                  ))}
                </HStack>
              ),
            },
            {
              key:        'memberCount',
              label:      '참여 인원',
              width:      100,
              isSortable: true,
              cell:       viewCount => `${viewCount}명`,
            },
            {
              key:        'viewCount',
              label:      '조회수',
              width:      100,
              isSortable: true,
            },
            {
              key:        'downloadCount',
              label:      '다운로드 횟수',
              width:      100,
              isSortable: true,
            },
          ]}
        />
      </InfoItem>
      <InfoItem
        title='기술'
        buttonText='기술 추가'
      >
        <DataTable
          showIndex
          data={skill}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: () => {
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: () => {
              },
            },
          ]}
          columns={[
            {
              key:        'name',
              label:      '이름',
              width:      200,
              isSortable: true,
            },
            {
              key:        'type',
              label:      '종류',
              width:      180,
              isSortable: true,
              cell:       type => (
                <Badge.Default
                  leadingIcon={getSkillIcon(type)}
                  label={type}
                />
              ),
            },
            {
              key:        'icon',
              label:      '아이콘',
              width:      100,
              isSortable: true,
              cell:       (icon, _, data) => (
                <Badge.Default
                  leadingIcon={icon}
                  label={data.name}
                />
              ),
            },
          ]}
        />
      </InfoItem>
      <InfoItem
        title='연혁'
        buttonText='연혁 추가'
      >
        <DataTable
          showIndex
          data={history}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: () => {
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: () => {
              },
            },
          ]}
          columns={[
            {
              key:        'label',
              label:      '라벨',
              width:      300,
              isSortable: true,
            },
            {
              key:        'link',
              label:      '링크',
              width:      200,
              isSortable: true,
            },
            {
              key:        'isImportant',
              label:      '중요',
              width:      180,
              isSortable: true,
              cell:       isImportant => isImportant && (
                <Badge.Default
                  leadingIcon={GlyphIcon.ASTERISK}
                  theme={BadgeTheme.RED}
                  label='중요'
                />
              ),
            },
          ]}
        />
      </InfoItem>
    </VStack>
  );
}

interface InfoItemProps {
  title:      string;
  buttonText: string;
  children:   React.ReactNode;
}

function InfoItem(props: InfoItemProps) {
  const {
    title,
    buttonText,
    children,
  } = props;

  return (
    <VStack spacing={spacingVars.mini}>
      <HStack
        fullWidth
        justify={StackJustify.BETWEEN}
      >
        <Typo.Moderate weight={Weight.SEMIBOLD}>{title}</Typo.Moderate>
        <Button.Default
          size={ButtonSize.SMALL}
          leadingIcon={GlyphIcon.ADD}
        >
          {buttonText}
        </Button.Default>
      </HStack>
      {children}
    </VStack>
  );
}
