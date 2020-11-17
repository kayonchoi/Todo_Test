import React, { useState } from 'react';
import TodoModal from './TodoModal';
import { H2, Item } from './Styled';

function TodoItem({ item, title, titleId }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleClickModal = () => {
    setModalVisible(true);
  }

  const handleClose = () => {
    setModalVisible(false);
  }

  return (
    <>
      <Item onClick={handleClickModal}>
        <H2>{item.item_title}</H2>
      </Item>
      {
        modalVisible && <TodoModal
          titleId={titleId}
          title={title}
          item={item}
          handleClose={handleClose}
        />
      }
    </>
  )
}
export default TodoItem