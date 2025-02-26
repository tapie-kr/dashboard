'use client';

import * as s from './page.css';

import {
  Button,
  ButtonSize,
  colorVars,
  DataTable,
  DatetimePicker,
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
import DeleteDialog from '@/components/dialog/delete';
import MutateDialog from '@/components/dialog/mutate';
import Page from '@/components/page';

import { Temporal } from '@js-temporal/polyfill';
import {
  usePrivateActivateForm,
  usePrivateCreateForm,
  usePrivateDeactivateForm,
  usePrivateDeleteForm,
  usePrivateFormList,
} from '@tapie-kr/api-client';
import { getStatusFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { getDatetimeString } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useEffect, useState } from 'react';
import { path, pathMap } from '@/lib/pathmap';

export default function ApplicationPage() {
  const [searchValue, setSearchValue] = useState('');

  const {
    fetch,
    refetch,
    data,
  } = usePrivateFormList();

  const {
    mutate: createForm,
    isPending: isCreatePending,
    isSuccess: isCreateSuccess,
  } = usePrivateCreateForm();

  const {
    mutate: deleteForm,
    isPending: isDeletePending,
    isSuccess: isDeleteSuccess,
  } = usePrivateDeleteForm();

  const mutateToggler = useToggle();
  const [isMutateModalOpen, toggleMutate] = mutateToggler;
  const deleteToggler = useToggle();
  const [_isDeleteModalOpen, toggleDelete] = deleteToggler;
  const [title, setTitle] = useState('');
  const [fromDate, setFromDate] = useState<Temporal.PlainDateTime | undefined>(undefined);
  const [toDate, setToDate] = useState<Temporal.PlainDateTime | undefined>(undefined);
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState<number>();

  const { mutate: active } =
  usePrivateActivateForm();

  const { mutate: deactive } =
  usePrivateDeactivateForm();

  useEffect(() => {
    fetch();
  }, []);

  const formatToISO = (date?: Temporal.PlainDateTime) => {
    if (!date) return '';

    return date
      .toZonedDateTime('UTC')
      .toInstant()
      .toString();
  };

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const router = useRouter();

  return (
    <Page
      hasSearch
      title='신청폼'
      count={data?.data.length ?? 0}
      searchValue={searchValue}
      onChangeSearchValue={handleSearchValue}
    >
      <VStack
        fullWidth
        spacing={spacingVars.petite}
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
            onClick={toggleMutate}
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
              },
            },
            {
              icon: data => {
                return data.active ? GlyphIcon.LOCK_OPEN : GlyphIcon.LOCK;
              },
              onClick: async value => {
                if (value.active) {
                  await deactive({ param: { formId: value.id } });
                } else {
                  await active({ param: { formId: value.id } });
                }

                await refetch();
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: value => {
                setCurrentId(value.id);

                toggleDelete();
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
        toggler={mutateToggler}
        isPending={isCreatePending}
        isSuccess={isCreateSuccess}
        onClick={async () => {
          if (title.trim() === '' || !fromDate || !toDate) {
            return;
          }

          await createForm({
            name:     title,
            startsAt: formatToISO(fromDate),
            endsAt:   formatToISO(toDate),
            active:   false,
          });

          refetch();
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
            <DatetimePicker
              value={fromDate}
              onChange={setFromDate}
            />
          </FormField>
          <FormField
            isEssential
            label='마감일'
          >
            <DatetimePicker
              value={toDate}
              onChange={setToDate}
            />
          </FormField>
        </HStack>
      </MutateDialog>
      <DeleteDialog
        title='신청폼'
        toggler={deleteToggler}
        isPending={false}
        isSuccess={true}
        onClick={async () => {
          if (!currentId) return;

          await deleteForm({ param: { formId: currentId } });

          setCurrentId(undefined);

          refetch();
        }}
      />

    </Page>
  );
}
