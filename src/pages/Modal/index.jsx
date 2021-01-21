import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ModalComponent from '../../components/Modal/Modal'

const Modal =  props  => {
  const [visible, setvisible] = useState(false);
  const [text, settext] = useState('sbgs');
  const [title, settitle] = useState('zrdb');
  const showmodel = () =>{
    setvisible(true)
  }
  const confirm = () =>{
    setvisible(false)
  }
  const onClose = () =>{
    setvisible(false)
  }
  const closeModel = () =>{
    setvisible(false)
  }
  return (
    <PageHeaderWrapper>
      <Button onClick={showmodel}>显示</Button>
      <ModalComponent
      visible={visible} 
      title={title} 
      text={text}
      confirm={confirm}
      onClose={onClose}
      closeModel={closeModel}
      ></ModalComponent>
    </PageHeaderWrapper>
  )
}

export default Modal;
