import React, { useState, useEffect } from 'react';
import styles from './index.less';
const ModalComponent = props => {
  const { dispatch,visible,title,text,onClose,confirm,closeModel } = props;
  
const onCloseCom =()=>{
    onClose()
  }

  const confirmCom =()=>{
    confirm()
  }

  const closeModelCom =()=>{
    closeModel()
  }

  const drag = () =>{

  }

  return (
    visible && 
  <section className={styles.modalbox} onClick={drag}>
    <section className={styles.modals}>
      <section className={styles.title}>{title}</section>
      <section className={styles.content}>{text}</section>
      <section className={styles.operator}>
        <button onClick={onCloseCom} className={styles.operatorclose}>取消</button>
        <section className={styles.wire}></section>
        <button onClick={confirmCom} className={styles.operatorconfirm}>确认</button>
      </section>
    </section>
        <section className={styles.mask} onClick={closeModelCom}></section>
  </section>
  )
}
export default ModalComponent
