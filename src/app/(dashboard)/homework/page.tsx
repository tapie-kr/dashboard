'use client';

import {
  Badge,
  colorVars,
  GlyphIcon,
  HStack,
  Icon,
  spacingVars,
  Table,
  Typo,
  Weight,
} from '@tapie-kr/inspire-react';
import { Status, Unit } from '@/lib/enum';
import { getStatusIcon, getStatusTheme, getUnitIcon } from '@/lib/enum/util';
interface DataType {
  id: number;
  title: string;
  status: Status;
  unit: Unit;
  fromDate: string;
  toDate: string;
}

const data: DataType[] = [
  {
    id: 5,
    title: '리액트 성능 최적화',
    status: Status.IN_PROGRESS,
    unit: Unit.DEVELOPER,
    fromDate: '2025-01-01',
    toDate: '2025-01-01',
  },
  {
    id: 3,
    title: '리액트 라우터 기초 및 개념 정리',
    status: Status.CONFIRMED,
    unit: Unit.DESIGNER,
    fromDate: '2025-01-01',
    toDate: '2025-01-01',
  },
  {
    id: 3,
    title: '리액트 라우터 기초 및 개념 정리',
    status: Status.CONFIRMED,
    unit: Unit.DESIGNER,
    fromDate: '2025-01-01',
    toDate: '2025-01-01',
  },
];

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
          유닛
        </Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={120 + 16}
        >
          시작일
        </Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={100 + 16}
        >
          마감일
        </Table.Head.Cell>
        <Table.Head.Cell
          isSortable
          width={100 + 16}
        >
          액션
        </Table.Head.Cell>
      </Table.Head>
      <Table.Body>
        {data.map((item, index) => {
          return (
            <Table.Body.Row key={index}>
              <Table.Body.Cell>{item.id}</Table.Body.Cell>
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
                  leadingIcon={getStatusIcon(item.status)}
                  theme={getStatusTheme(item.status)}
                />
              </Table.Body.Cell>

              <Table.Body.Cell>
                <Badge.Default
                  label={item.unit}
                  leadingIcon={getUnitIcon(item.unit)}
                />
              </Table.Body.Cell>
              <Table.Body.Cell>
                <HStack spacing={spacingVars.micro}>
                  <Typo.Tiny color={colorVars.content.default}>{item.fromDate}</Typo.Tiny>
                </HStack>
              </Table.Body.Cell>
              <Table.Body.Cell>
                <HStack spacing={spacingVars.micro}>
                  <Typo.Tiny color={colorVars.content.default}>{item.toDate}</Typo.Tiny>
                </HStack>
              </Table.Body.Cell>
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
          );
        })}
      </Table.Body>
    </Table>
  );
}
