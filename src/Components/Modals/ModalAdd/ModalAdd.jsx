import React from "react";
import { Input, DatePicker, Select } from "../../FormComponents";
import { Button } from "../../FormComponents/Button";
import { Modal } from "../Modal";

export function ModalAdd({toggleModalAdd}) {
  return (
    <Modal title='add movie' onClose={toggleModalAdd}>
      <div className="inputs-section">
        <div className="inputs-section__left">
          <Input label='Title' placeholder='Title'/>
          <Input label='Movie URL' placeholder='Movie URL here'/>
          <Select label='Genre' placeholder='Select Genre'/>
        </div>
        <div className="inputs-section__right">
          <DatePicker label='Release date' placeholder='Select Date'/>
          <Input label='Rating' placeholder='Rating here'/>
          <Input label='Runtime' placeholder='Runtime here'/>
        </div>
      </div>
      <Input label='Overview' placeholder='Overvier Text goes here'/>

      <div className='button__modals-actions'>
        <Button label='Reset' className='primary' type='reset'/>
        <Button label='Save' className='secondary' type='submit'/>
      </div>
    </Modal>
  )
}