'use client';

import * as s from './page.css';

import {
  Button,
  ButtonSize,
  colorVars,
  DataTable,
  Filter,
  FormField,
  GlyphIcon,
  HStack,
  Input,
  spacingVars,
  StackAlign,
  StackJustify,
  Typo,
  useToggle,
  VStack,
  Weight,
} from '@tapie-kr/inspire-react';
import MutateDialog from '@/components/dialog/mutate';
import Page from '@/components/page';

import { usePrivateCreateForm, usePrivateFormList } from '@tapie-kr/api-client';
import { getStatusFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useEffect, useState } from 'react';
import { path, pathMap } from '@/lib/pathmap';

export default function ApplicationPage() {
  const [searchValue, setSearchValue] = useState('');
  const { fetch, data } = usePrivateFormList();

  const {
    mutate,
    isPending,
    isSuccess,
  } = usePrivateCreateForm();

  const toggler = useToggle();
  const [_isModalOpen, toggle] = toggler;
  const [title, setTitle] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState<number>();

  useEffect(() => {
    fetch()
      .then(res => {
        console.log(res);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const router = useRouter();

  return (
    <Page
      hasSearch
      title='신청폼'
      count={2}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.jumbo}
        align={StackAlign.START}
      >
        <HStack
          fullWidth
          justify={StackJustify.BETWEEN}
          align={StackAlign.START}
        >
          <Filter filters={[getStatusFilterGroup()]} />
          <Button.Default
            size={ButtonSize.SMALL}
            leadingIcon={GlyphIcon.ADD}
            onClick={toggle}
          >신청폼 추가
          </Button.Default>
        </HStack>
        <DataTable
          showIndex
          data={data?.data ?? []}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: () => {
                setIsEdit(true);

                // setCurrentId(as.id);
              },
            },
            {
              icon:    GlyphIcon.LOCK_OPEN,
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
              width:      250,
              isSortable: true,
              cell:       (title, index) => {
                const handleNavigate = () => {
                  router.push(pathMap.resolvePath(path.application, index));
                };

                return (
                  <Typo.Petite
                    weight={Weight.MEDIUM}
                    className={s.title}
                    onClick={handleNavigate}
                  >
                    {title}
                  </Typo.Petite>
                );
              },
            },
            {
              key:        'startsAt',
              label:      '시작일',
              width:      150,
              isSortable: true,
              cell:       startsAt => <Typo.Tiny color={colorVars.content.default}>{getDatetimeString(startsAt, true)}</Typo.Tiny>,
            },
            {
              key:        'endsAt',
              label:      '종료일',
              width:      150,
              isSortable: true,
              cell:       endsAt => <Typo.Tiny color={colorVars.content.default}>{getDatetimeString(endsAt, true)}</Typo.Tiny>,
            },
          ]}
        />
      </VStack>
      <MutateDialog
        title='신청폼'
        type='create'
        toggler={toggler}
        isPending={isPending}
        isSuccess={isSuccess}
        onClick={async () => {
          await mutate({
            name:     title,
            startsAt: fromDate,
            endsAt:   toDate,
            active:   false,
          });
        }}
      >
        <FormField
          isEssential
          label='제목'
        >
          <Input.Text
            placeholder='제목 입력'
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </FormField>
        <HStack
          fullWidth
          spacing={spacingVars.micro}
        >
          <FormField
            isEssential
            label='시작일'
          >
            <Input.Text
              placeholder='날짜 선택'
              leadingIcon={GlyphIcon.CALENDAR_MONTH}
              value={fromDate}
              onChange={e => {
                setFromDate(e.target.value);
              }}
            />
          </FormField>
          <FormField
            isEssential
            label='마감일'
          >
            <Input.Text
              placeholder='날짜 선택'
              leadingIcon={GlyphIcon.CALENDAR_MONTH}
              value={toDate}
              onChange={e => {
                setToDate(e.target.value);
              }}
            />
          </FormField>
        </HStack>
      </MutateDialog>
    </Page>
  );
}
