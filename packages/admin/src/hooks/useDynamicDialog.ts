import { Toggler } from '@tapie-kr/inspire-react';

import { useCallback, useState } from 'react';

interface UseDynamicDialogReturn<T = {
}> {
  openModal:      (params?: T) => void;
  closeModal:     () => void;
  params:         T | null;
  isModalOpen:    boolean;
  toggleModal:    () => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

/**
 * A custom hook to manage a dynamic dialog's open state and parameters.
 *
 * @template T - The type of modal parameters.
 * @param {{ toggler: Toggler }} props - The props containing the toggler tuple.
 * @param {Toggler} props.toggler - A tuple containing the modal state, a toggle function, and a set state function.
 * @returns {UseDynamicDialogReturn<T>} An object containing modal state, toggling functions, and parameters.
 */
export default function useDynamicDialog<T = {
}>(toggler: Toggler): UseDynamicDialogReturn<T> {
  const [
    _isModalOpen,
    _toggle,
    _setIsModalOpen,
  ] = toggler;

  const [params, setParams] = useState<T | null>(null);

  const toggleModal = useCallback(() => {
    _setIsModalOpen(!_isModalOpen);
  }, []);

  const openModal = useCallback((modalParams?: T) => {
    if (modalParams) {
      setParams(modalParams);
    }

    _setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    _setIsModalOpen(false);
  }, []);

  return {
    isModalOpen:    _isModalOpen,
    setIsModalOpen: _setIsModalOpen,
    openModal,
    closeModal,
    toggleModal,
    params,
  };
}
