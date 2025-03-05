import * as s from './style.css';

import {
  BadgeSize,
  Button,
  ButtonSize,
  ButtonVariant,
  colorVars,
  GlyphIcon,
  HStack,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';

import { FormApplicationPortfolioType, usePrivateDownloadApplicationPortfolio } from '@tapie-kr/api-client';
import { MemberUnit } from '@tapie-kr/api-client/enum';
import UnitBadge from '@tapie-kr/dashboard-shared/components/atoms/badge/unit';
import { type JSX, useEffect } from 'react';

type PersonalInfo = {
  name:        string;
  studentId:   number;
  googleEmail: string;
  phoneNumber: string;
};

type ApplicationInfo = {
  unit:               MemberUnit;
  introduction:       string;
  motivation:         string;
  expectedActivities: string;
  reasonToChoose:     string;
};

interface ApplicationDetailInfoSectionProps {
  personalInfo:    PersonalInfo;
  applicationInfo: ApplicationInfo;
  portfolio:       FormApplicationPortfolioType;
  applicationUUID: string;
}

export default function ApplicationDetailInfoSection(props: ApplicationDetailInfoSectionProps) {
  const {
    personalInfo,
    applicationInfo,
    portfolio,
    applicationUUID,
  } = props;

  const { data: portfolioDownloadUrl, fetch: getPortfolioDownloadUrl } = usePrivateDownloadApplicationPortfolio();

  const redirectPortfolioDownloadUrl = () => {
    if (portfolioDownloadUrl) {
      window.open(portfolioDownloadUrl.data.downloadUrl, '_blank');
    }
  };

  useEffect(() => {
    getPortfolioDownloadUrl({ param: { applicationUUID } });
  }, []);

  return (
    <VStack
      spacing={spacingVars.moderate}
      className={s.base}
    >
      <InfoGroup
        title='개인 정보'
        spacing={spacingVars.petite}
        content={[
          {
            label: '이름',
            value: personalInfo.name,
          },
          {
            label: '학번',
            value: personalInfo.studentId.toString(),
          },
          {
            label: '구글 이메일',
            value: personalInfo.googleEmail,
          },
          {
            label: '전화번호',
            value: personalInfo.phoneNumber,
          },
        ]}
      />
      <InfoGroup
        title='지원 정보'
        spacing={spacingVars.moderate}
        content={[
          {
            label:  '유닛',
            value:  applicationInfo.unit,
            render: () => (
              <UnitBadge
                unit={applicationInfo.unit}
                size={BadgeSize.SMALL}
              />
            ),
          },
          {
            label: '자기소개',
            value: applicationInfo.introduction,
          },
          {
            label: '지원 동기',
            value: applicationInfo.motivation,
          },
          {
            label: '기대되는 활동',
            value: applicationInfo.expectedActivities,
          },
          {
            label: '뽑아야하는 이유',
            value: applicationInfo.reasonToChoose,
          },
        ]}
      />
      {portfolio !== null && (
        <VStack
          fullWidth
          spacing={spacingVars.tiny}
          align={StackAlign.START}
        >
          <Typo.Tiny
            weight={Weight.MEDIUM}
            color={colorVars.content.muted}
          >
            포트폴리오
          </Typo.Tiny>
          <HStack spacing={spacingVars.tiny}>
            <Button.Default
              size={ButtonSize.MEDIUM}
              variant={ButtonVariant.SECONDARY}
              leadingIcon={GlyphIcon.DOWNLOAD}
              onClick={redirectPortfolioDownloadUrl}
            >
              {portfolio.filename}
            </Button.Default>
          </HStack>
        </VStack>
      )}
    </VStack>
  );
}

type InfoGroupContent = {
  label:   string;
  value:   string;
  render?: () => JSX.Element;
};

interface InfoGroupProps {
  title:   string;
  content: InfoGroupContent[];
  spacing: string;
}

function InfoGroup(props: InfoGroupProps) {
  const {
    title,
    content,
    spacing,
  } = props;

  return (
    <VStack
      fullWidth
      spacing={spacingVars.micro}
      align={StackAlign.START}
    >
      <Typo.Tiny
        weight={Weight.MEDIUM}
        color={colorVars.content.muted}
      >
        {title}
      </Typo.Tiny>
      <VStack
        fullWidth
        spacing={spacing}
        align={StackAlign.START}
      >
        {content.map((item, index) => (
          <HStack
            key={index}
            fullWidth
            spacing={spacingVars.micro}
            align={StackAlign.START}
          >
            <HStack
              fullWidth
              justify={StackJustify.START}
              className={s.label}
              align={StackAlign.START}
            >
              <Typo.Micro
                weight={Weight.SEMIBOLD}
              >{item.label}
              </Typo.Micro>
            </HStack>
            <HStack
              fullWidth
              justify={StackJustify.START}
              align={StackAlign.START}
              className={s.content}
            >
              {item.render
                ? item.render()
                : (
                  <Typo.Micro
                    weight={Weight.MEDIUM}
                    color={colorVars.content.muted}
                    className={s.contentText}
                  >
                    {item.value}
                  </Typo.Micro>
                )}
            </HStack>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}
