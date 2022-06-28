import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalOpen = useCallback(() => setIsModalVisible(true), [isModalVisible]);
  const handleModalClose = useCallback(() => setIsModalVisible(false), [isModalVisible]);

  return [isModalVisible, handleModalOpen, handleModalClose];
}