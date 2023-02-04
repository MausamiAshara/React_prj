import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { Button, Space, Table, Modal, Form, Input } from 'antd'
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';

import { PrefixSearch } from '../../svg';
import { toAbsoluteUrl } from '../../utils'
import { searchData } from '../../actions/dashboard';
import { formatPhoneNumber } from '../../utils/patterns';
import { getCompanyList, deleteCompany } from '../../actions/CompanyAction';

import '../../components/common/scss/FormField.scss'
import { DebounceInput } from 'react-debounce-input';


const CompanyManagement = () => {

  const dispatch = useDispatch();

  const [initialCompany, setInitialCompany] = useState([]);
  const [companyId, setCompanyId] = useState();
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [viewModalData, setViewModalData] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);


  useEffect(() => {
    companyManagementListing()
  }, [companyId])


  //View All Records
  const companyManagementListing = () => {
    dispatch(getCompanyList())
      .then((response) => {
        setInitialCompany(response?.data)
      }).catch((error) => error?.message)
  }

  //View Modal
  const showViewModal = (record) => {
    setViewModalOpen(true)
    setViewModalData(record)
  }

  const handleViewCancel = () => {
    setViewModalOpen(false);
  }


  //Delete Modal
  const showDeleteModal = (record) => {
    setDeleteModalOpen(true);
    setCompanyId(record?.id)
  }

  const handleDeleteOk = () => {
    dispatch(deleteCompany(companyId))
      .then((response) => {
        companyManagementListing()
        setDeleteModalOpen(false)
        toast.success(response?.message)
      }).catch((error) => toast.error(error?.message))
  }

  const handleDeleteCancel = () => setDeleteModalOpen(false);


  const changeCompany = (value) => {
    const data = {
      search_data: value.trim(),
      modelname: "company",
      app_name: 'baseapp'
    }
    dispatch(searchData(data)).then(res => setInitialCompany(res?.data)).catch(err => companyManagementListing())
  }


  const columns = [
    {
      title: 'Company image',
      dataIndex: 'company_image',
      key: 'company_image',
      render: (row, record) => <div className='image'>
        <img src={record?.company_image ? record?.company_image : toAbsoluteUrl('/images/company_image.png')} alt="Company" title={record?.company_image ? "" : "not found"} />
      </div>
    },
    {
      title: 'Company name',
      dataIndex: 'company_name',
      key: 'company_name',
      sorter: (a, b) => a.company_name?.localeCompare(b.company_name),
      render: (row, record) => <div>
        <div>{record.company_name || "Company name not found"}</div>
      </div>
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address?.localeCompare(b.address),
      render: (row, record) => <div>
        <div> {record?.address.length > 30 ? record?.address.slice(0, 30) + "..." : record?.address}</div >
      </div>
    },
    {
      title: 'Phone number',
      dataIndex: 'phone_number',
      key: 'phone_number',
      sorter: (a, b) => a.phone_number - b.phone_number,
      render: (row, record) => <div>
        <div>{formatPhoneNumber(record.phone_number) || "Phone number not found"}</div>
      </div>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      className: 'action',
      render: (row, record) =>
        <Space>
          <Button className='action-btn' icon={<EyeOutlined />} onClick={() => showViewModal(record)} title="View" />
          <Button className='action-btn' icon={<DeleteOutlined />} onClick={() => showDeleteModal(record)} />
        </Space>
    },
  ];


  return (
    <>
      <div className='patients-search'>
        <div className='custom-search'>
          <span className='icon'>
            <PrefixSearch />
          </span>
          <DebounceInput
            className='searchBox'
            debounceTimeout={1000}
            placeholder="Search Here"
            onChange={(e) => changeCompany(e.target.value)}
          />
        </div>
      </div>

      <Table
        bordered
        columns={columns}
        dataSource={initialCompany || []}
        pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 50, 100] }}
        scroll={{ x: 1200 }}
        className='check-pad-30'
      />


      {/* View Modal Start */}
      <Modal
        title="Company Details"
        open={viewModalOpen}
        className='common-modal footer-none'
        width={650}
        centered
        onCancel={handleViewCancel}
      >
        <div className='funder-detail'>
          <div className='modal-image'>
            <img src={viewModalData?.company_image ? viewModalData?.company_image : toAbsoluteUrl('/images/company_image.png')} alt="Company" title={viewModalData?.company_image ? "" : "not found"} />
          </div>
          <ul>
            <li>
              <span className='left'>Company name</span>
              <span className='right'>{viewModalData?.company_name || "Name not found"}</span>
            </li>
            <li>
              <span className='left'>Address</span>
              <span className='right'>{viewModalData?.address || "Address not found"}</span>
            </li>
            <li>
              <span className='left'>Phone number</span>
              <span className='right' >{formatPhoneNumber(viewModalData?.phone_number) || "Phone number not found"}</span>
            </li>
            <li>
              <span className='left'>Description</span>
              <span className='right'>{viewModalData?.description || "Description not found"} </span>
            </li>
            <li>
              <span className='left'>Website</span>
              <span className='right'>
                {viewModalData?.website || "-"}
              </span>
            </li>
          </ul>
        </div>
      </Modal>


      {/* Delete Modal */}
      <Modal
        title="Delete"
        open={deleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
        okText="Delete"
        cancelText="Cancel"
        centered
        className='delete-modal'
      >
        <div className='text-center desc'>
          <DeleteOutlined />
          <p>Are you sure you want to delete ?</p>
        </div>
      </Modal>

    </>
  );
};

export default CompanyManagement;