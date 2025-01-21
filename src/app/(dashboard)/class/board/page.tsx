'use client';

import * as s from './page.css';

import {
  Badge,
  BadgeTheme,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  Table,
  Typo,
  Weight,
} from '@tapie-kr/inspire-react';

enum Unit {
  DEVELOPER = '개발자',
  DESIGNER = '디자이너',
}

enum Status {
  CONFIRMED = '완료',
  CANCELED = '취소',
  SCHEDULED = '예정',
  POSTPONED = '연기됨',
  IN_PROGRESS = '진행중',
}

interface DataType {
  title: string;
  status: Status;
  instructor: string;
  unit: Unit;
  date: string;
}

const data: DataType[] = [
  {
    title: 'React 작동 원리 및 최적화',
    status: Status.CONFIRMED,
    instructor: '성이름',
    unit: Unit.DEVELOPER,
    date: '2025-01-01',
  },
  {
    title: '수업 제목',
    status: Status.CANCELED,
    instructor: '성이름',
    unit: Unit.DESIGNER,
    date: '2025-01-01',
  },
  {
    title: '수업 제목',
    status: Status.SCHEDULED,
    instructor: '성이름',
    unit: Unit.DEVELOPER,
    date: '2025-01-01',
  },
  {
    title: '수업 제목',
    status: Status.POSTPONED,
    instructor: '성이름',
    unit: Unit.DEVELOPER,
    date: '2025-01-01',
  },
  {
    title: '수업 제목',
    status: Status.IN_PROGRESS,
    instructor: '성이름',
    unit: Unit.DEVELOPER,
    date: '2025-01-01',
  },
];

const statusIcon: {
  [key in Status]: GlyphIcon;
} = {
  [Status.CONFIRMED]: GlyphIcon.CHECK,
  [Status.CANCELED]: GlyphIcon.BLOCK,
  [Status.SCHEDULED]: GlyphIcon.FLAG,
  [Status.POSTPONED]: GlyphIcon.ERROR,
  [Status.IN_PROGRESS]: GlyphIcon.SCHOOL,
};

const statusColor: {
  [key in Status]: BadgeTheme;
} = {
  [Status.CONFIRMED]: BadgeTheme.GREEN,
  [Status.CANCELED]: BadgeTheme.RED,
  [Status.SCHEDULED]: BadgeTheme.MONOCHROME,
  [Status.POSTPONED]: BadgeTheme.YELLOW,
  [Status.IN_PROGRESS]: BadgeTheme.BLUE,
};

export default function ClassPage() {
  const handleClickAction = () => {};

  return (
    <Table>
      <Table.Head>
        <Table.Head.Cell width={40 + 16}>#</Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={250 + 16}
        >
          제목
        </Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={120 + 16}
        >
          상태
        </Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={120 + 16}
        >
          진행자
        </Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={120 + 16}
        >
          유닛
        </Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={100 + 16}
        >
          수업일
        </Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={100 + 16}
        >
          액션
        </Table.Head.Cell>
      </Table.Head>
      <Table.Body>
        {data.map((item, index) => (
          <Table.Body.Row key={index}>
            <Table.Body.Cell>{index + 1}</Table.Body.Cell>
            <Table.Body.Cell>
              <Typo.Petite
                weight={Weight.MEDIUM}
                nowrap
              >
                {item.title}
              </Typo.Petite>
            </Table.Body.Cell>
            <Table.Body.Cell>
              <Badge.Default
                label={item.status}
                leadingIcon={statusIcon[item.status]}
                theme={statusColor[item.status]}
              />
            </Table.Body.Cell>
            <Table.Body.Cell>
              <HStack spacing={spacingVars.micro}>
                <div className={s.circle} />
                <Typo.Tiny weight={Weight.MEDIUM}>{item.instructor}</Typo.Tiny>
              </HStack>
            </Table.Body.Cell>
            <Table.Body.Cell>{item.unit}</Table.Body.Cell>
            <Table.Body.Cell>{item.date}</Table.Body.Cell>
            <Table.Body.Cell>
              <HStack spacing={spacingVars.base}>
                <Icon
                  name={GlyphIcon.EDIT}
                  color={colorVars.content.default}
                  size={20}
                  onClick={handleClickAction}
                />
                <Icon
                  name={GlyphIcon.DELETE}
                  color={colorVars.content.default}
                  size={20}
                  onClick={handleClickAction}
                />
              </HStack>
            </Table.Body.Cell>
          </Table.Body.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
