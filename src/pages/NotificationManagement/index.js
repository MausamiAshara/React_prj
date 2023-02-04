import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { Button, Form, Input, Select } from 'antd'

import { pushNotification } from '../../actions/dashboard';


const NotificationManagement = () => {

  const dispatch = useDispatch();

  const { Option } = Select;
  const [form] = Form.useForm();
  const [chooseCategory, setChooseCategory] = useState();

  const selectcategory = (value) => setChooseCategory(value)

  const submitnotification = (value) => {
    const data = { user_type: chooseCategory, title: value?.title?.trim(), message: value?.message?.trim() }
    dispatch(pushNotification(data))
      .then((res) => {
        if (res?.status === 200) {
          form.resetFields();
          toast.success(res?.message);
        }
      }).catch((err) => (toast.error(err?.message)))
  }


  return (
    <>
      <div className='shadow-paper auto-height'>
        <Form form={form} onFinish={submitnotification}>
          <div className='row'>
            <div className='col-sm-12'>
              <Form.Item
                className='form-group'
                name="Role"
                rules={[{ required: true, message: 'Please Select Your Notification Role' }]}
              >
                <Select
                  placeholder="Select a Category"
                  onChange={selectcategory}
                  allowClear >
                  <Option value="FU">Funder</Option>
                  <Option value="BR">Broker</Option>
                  <Option value="ALL">All</Option>
                </Select>
              </Form.Item>
              <Form.Item
                className='form-group'
                name="title"
                rules={[{ required: true, message: 'Please Enter Your Notification Title' }]}
              >
                <Input placeholder="Notification Title" />
              </Form.Item>
              <Form.Item
                className='form-group'
                name="message"
                rules={[{ required: true, message: 'Please Enter Your Notification message!' }]}
              >
                <Input placeholder="Notification message" />
              </Form.Item>
              <Form.Item
                className='form-group'
              >
                <Button type="primary" htmlType="submit"> Send </Button>
              </Form.Item>
            </div>
          </div>
        </Form>

      </div>

    </>
  );
};

export default NotificationManagement;


