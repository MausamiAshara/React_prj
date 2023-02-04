import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import moment from 'moment';
import { toast } from 'react-toastify';
import { Button, Space, Table, Modal, Form, Input } from 'antd'
import { EyeOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import { toAbsoluteUrl } from '../../utils';
import { searchData } from '../../actions/dashboard';
import { formatPhoneNumber } from '../../utils/patterns';
import { BlockIcon, UnBlockIcon, PrefixSearch } from '../../svg';
import { postUserList, deleteUser, blockUser, verifyUser, userMetaList, } from '../../actions/UserAction';

import '../../components/common/scss/FormField.scss'
import { DebounceInput } from 'react-debounce-input';


const FunderManagement = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [initialUser, setInitialUser] = useState([]);
  const [userId, setUserId] = useState({});
  const [viewModalOpen, setViewModalOpen] = useState(false);

  useEffect(() => {
    funderListing()
  }, [])


  //Listing
  const funderListing = () => {
    dispatch(userMetaList())
      .then((response) => {
        setInitialUser(response?.data?.forum_data)
      }).catch((error) => error?.message)
  }
  //View Modal
  const showViewModal = (record) => {
    setViewModalOpen(true);
    setUserId(record)
  }
  const handleViewCancel = () => {
    setViewModalOpen(false)
  }

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
      sorter: (a, b) => a.username?.localeCompare(b.username),
      render: (row, record) => (
        <div>
          <div>{record?.username}</div>
        </div>
      )
    },
    {
      title: 'Category name',
      dataIndex: 'category_name',
      key: 'category_name',
      sorter: (a, b) => a.category_name?.localeCompare(b.category_name),
      render: (row, record) => (
        <div>
          <div>{record?.category_name}</div>
        </div>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description?.localeCompare(b.description),
      render: (row, record) => (
        <div>
          <div>{record?.description.length > 20 ? record?.description.slice(0, 20) + "..." : record?.description}</div>
        </div>
      )
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      className: 'action',
      render: (row, record) =>
        <Space>
          <Button className='action-btn'
            title='View'
            icon={<EyeOutlined />}
            onClick={() => showViewModal(record)}
          />
        </Space >
    },
  ];

  return (
    <>
      <div className='patients-search' style={{ display: 'flex', justifyContent: 'end' }}>
        <div className='btn-list'>
          <Button type="primary" htmlType="submit" onClick={() => navigate('/rejected-data')}>Reject Data</Button>
        </div>
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={initialUser || []}
        pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 50, 100] }}
        scroll={{ x: 1200 }}
        className='check-pad-30'
      />
      <Modal
        title="User Details"
        open={viewModalOpen}
        className='common-modal footer-none'
        width={650}
        centered
        onCancel={handleViewCancel}
      >
        <div className='funder-detail'>
          <ul>
            <li>
              <span className='left'>User name</span>
              <span className='right'>{userId?.username}</span>
            </li>
            <li>
              <span className='left'>Description</span>
              <span className='right'>{userId?.description}</span>
            </li>
            <li>
              <span className='left'>Category Name</span>
              <span className='right'>{userId?.category_name}</span>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};
export default FunderManagement;