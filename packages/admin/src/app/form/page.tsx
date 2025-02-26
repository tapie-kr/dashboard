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
  usePrivateUpdateForm,
} from '@tapie-kr/api-client';
import { getStatusFilterGroup } from '@tapie-kr/dashboard-shared/lib/enum/utils';
import { formatDatetimeToISO, getDatetimeString, toTemporalDateTime } from '@tapie-kr/dashboard-shared/lib/utils/date';
import { useRouter } from 'next/navigation';
import { type ChangeEvent, useEffect, useState } from 'react';
import useDynamicDialog from '@/hooks/useDynamicDialog';
import { path, pathMap } from '@/lib/pathmap';

export default function ApplicationPage() {
  const [searchValue, setSearchValue] = useState('');

  const {
    fetch: fetchFormList,
    refetch: refetchFormList,
    data: formList,
  } = usePrivateFormList();

  const {
    mutate: createForm,
    isPending: isCreatePending,
    isSuccess: isCreateSuccess,
  } = usePrivateCreateForm();

  const {
    mutate: updateForm,
    isPending: isUpdatePending,
    isSuccess: isUpdateSuccess,
  } = usePrivateUpdateForm();

  const { mutate: deleteForm } = usePrivateDeleteForm();
  const createToggler = useToggle();
  const [_isCreateModalOpen, toggleCreate] = createToggler;
  const updateToggler = useToggle();
  const deleteToggler = useToggle();

  const { openModal: openUpdateModal, params: updateParams } = useDynamicDialog<{
    formId: number;
  }>(updateToggler);

  const { openModal: openDeleteModal, params: deleteParams } = useDynamicDialog<{
    formId: number;
  }>(deleteToggler);

  const [modalFormData, setModalFormData] = useState<{
    name:     string;
    startsAt: Temporal.PlainDateTime | undefined;
    endsAt:   Temporal.PlainDateTime | undefined;
  }>({
    name:     '',
    startsAt: undefined,
    endsAt:   undefined,
  });

  const { mutate: active } =
  usePrivateActivateForm();

  const { mutate: deactive } =
  usePrivateDeactivateForm();

  useEffect(() => {
    fetchFormList();
  }, []);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const router = useRouter();

  return (
    <Page
      hasSearch
      title='신청폼'
      count={formList?.data.length ?? 0}
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
            onClick={toggleCreate}
          >신청폼 추가
          </Button.Default>
        </HStack>
        <DataTable
          showIndex
          data={formList?.data.sort((a, b) => a.id - b.id) ?? []}
          actions={[
            {
              icon:    GlyphIcon.EDIT,
              onClick: async value => {
                setModalFormData({
                  name:     value.name,
                  startsAt: toTemporalDateTime(value.startsAt),
                  endsAt:   toTemporalDateTime(value.endsAt),
                });

                openUpdateModal({ formId: value.id });
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

                await refetchFormList();
              },
            },
            {
              icon:    GlyphIcon.DELETE,
              onClick: value => {
                openDeleteModal({ formId: value.id });
              },
            },
          ]}
          columns={[
            {
              key:        'name',
              label:      '이름',
              width:      250,
              isSortable: true,
              cell:       (title, _, data) => {
                const handleNavigate = () => {
                  router.push(pathMap.resolvePath(path.form, data.id));
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
        toggler={createToggler}
        isPending={isCreatePending}
        isSuccess={isCreateSuccess}
        onClick={async () => {
          const {
            name,
            startsAt,
            endsAt,
          } = modalFormData;

          if (name.trim() === '' || !startsAt || !endsAt) {
            return;
          }

          await createForm({
            name,
            startsAt: formatDatetimeToISO(startsAt),
            endsAt:   formatDatetimeToISO(endsAt),
            active:   false,
          });

          refetchFormList();
        }}
      >
        <FormField
          isEssential
          label='제목'
        >
          <Input.Text
            placeholder='제목 입력'
            value={modalFormData.name}
            onChange={e => {
              setModalFormData({
                ...modalFormData,
                name: e.target.value,
              });
            }}
          />
        </FormField>
        <FormField
          isEssential
          label='시작일'
        >
          <DatetimePicker
            value={modalFormData.startsAt}
            onChange={date => {
              setModalFormData({
                ...modalFormData,
                startsAt: date,
              });
            }}
          />
        </FormField>
        <FormField
          isEssential
          label='마감일'
        >
          <DatetimePicker
            value={modalFormData.endsAt}
            onChange={date => {
              setModalFormData({
                ...modalFormData,
                endsAt: date,
              });
            }}
          />
        </FormField>
      </MutateDialog>
      <MutateDialog
        title='신청폼'
        type='update'
        toggler={updateToggler}
        isPending={isUpdatePending}
        isSuccess={isUpdateSuccess}
        onClick={async () => {
          const {
            name,
            startsAt,
            endsAt,
          } = modalFormData;

          if (name.trim() === '' || !startsAt || !endsAt || !updateParams?.formId) {
            return;
          }

          await updateForm({
            param: { formId: updateParams?.formId },
            data:  {
              name,
              startsAt: formatDatetimeToISO(startsAt),
              endsAt:   formatDatetimeToISO(endsAt),
              active:   false,
            },
          });

          refetchFormList();
        }}
      >
        <FormField
          isEssential
          label='제목'
        >
          <Input.Text
            placeholder='제목 입력'
            value={modalFormData.name}
            onChange={e => {
              setModalFormData({
                ...modalFormData,
                name: e.target.value,
              });
            }}
          />
        </FormField>
        <FormField
          isEssential
          label='시작일'
        >
          <DatetimePicker
            value={modalFormData.startsAt}
            onChange={date => {
              setModalFormData({
                ...modalFormData,
                startsAt: date,
              });
            }}
          />
        </FormField>
        <FormField
          isEssential
          label='마감일'
        >
          <DatetimePicker
            value={modalFormData.endsAt}
            onChange={date => {
              setModalFormData({
                ...modalFormData,
                endsAt: date,
              });
            }}
          />
        </FormField>
      </MutateDialog>
      <DeleteDialog
        title='신청폼'
        toggler={deleteToggler}
        isPending={false}
        isSuccess={true}
        onClick={async () => {
          if (!deleteParams?.formId) {
            return;
          }

          await deleteForm({ param: { formId: deleteParams.formId } });

          await refetchFormList();
        }}
      />

    </Page>
  );
}
