import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import moment from 'moment';
import { Pagination } from "swiper";
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Modal, Space, Table, Form, Input, Select } from 'antd'
import { DeleteOutlined, EyeOutlined, EditOutlined } from '@ant-design/icons';

import { toAbsoluteUrl } from '../../utils';
import { searchData } from '../../actions/dashboard';
import { addInformation, getCategoryList, getinformationCategory } from '../../actions/Category';
import { CommentIcon, LikeIcon, PrefixSearch } from '../../svg';
import { addForum, deleteForum, getForumInfo, getForumList, patchForum } from '../../actions/Forum';

import '../../utils/Upload.scss'
import '../PostManagement/Post.scss'
import '../../components/common/scss/FormField.scss'
import { DebounceInput } from 'react-debounce-input';



const AllForums = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const { Option } = Select;
  const [forumId, setForumId] = useState();
  const [forumList, setForumList] = useState([]);
  const [forumInfo, setForumInfo] = useState({});
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [categoryData, setCategoryData] = useState([])
  const [chooseCategory, setChooseCategory] = useState();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [editOldImages, setEditOldImages] = useState([]);
  const [deleteImageArray, setDeleteImageArray] = useState([]);
  const [information, setInformation] = useState({})

  // count duration by date
  let duration = moment(forumInfo?.posted_at).fromNow();


  //Forum Listing
  useEffect(() => {
    viewForum()
  }, [])


  //Forum Listing
  const viewForum = () => {
    dispatch(getCategoryList())
      .then((response) => {
        setForumList(response)
      }).catch((error) => error?.message)
  }


  //Forum Searching
  const searchForum = (value) => {
    const data = {
      search_data: value.trim(),
      modelname: "forum",
      app_name: 'allpost'
    }
    // dispatch(searchData(data)).then((res) => { setForumList(res?.data) }).catch(err => viewForum())
  }


  // View Model start
  const showViewModal = (record) => {
    setInformation(record)
    setViewModalOpen(true);
  };

  const handleViewCancel = () => { setViewModalOpen(false) };


  // Add Modal

  const onSelectFile = (event) => {
    let newFileArray = []
    let tmpFileArray = Object.values(event.target.files)
    for (let index = 0; index < tmpFileArray.length; index++) {
      const element = tmpFileArray[index];
      newFileArray = [...newFileArray, element]
    }
    setSelectedFiles([...selectedFiles, ...newFileArray])
  }

  const showAddModal = () => {
    setAddModalOpen(true);
    dispatch(getinformationCategory())
      .then((response) => {
        console.log('response', response)
        setCategoryData(response)
        setAddModalOpen(true);
      })
      .catch((error) => error?.message);
  };

  const handleAddOk = (values) => {
    const formData = new FormData();
    formData.append("category_name", chooseCategory)
    formData.append("description", values.description)

    // if (selectedFiles && selectedFiles.length > 0) {
    //   for (let i = 0; i < selectedFiles.length; i++) {
    //     let forumMedia = selectedFiles[i];
    //     formData.append("forum_media", forumMedia);
    //   }
    // }

    dispatch(addInformation(formData))
      .then((response) => {
        setAddModalOpen(false);
        toast.success(response?.message);
        setSelectedFiles([]);
        form.resetFields();
        viewForum()
      })
      .catch((error) => toast.error(error?.message))
  };

  const handleAddCancel = () => {
    setSelectedFiles([]);
    form.resetFields();
    setAddModalOpen(false);
  };


  // Edit Modal Start
  // const showEditModal = (record) => {
  //   dispatch(getCategoryList()).then(res => setCategoryData(res));
  //   setForumId(record?.forum_id)
  //   const data = { forum_id: record?.forum_id }
  //   setEditModalOpen(true)
  //   dispatch(getForumInfo(data))
  //     .then((response) => {
  //       setForumInfo(response?.data)
  //       setEditOldImages(response.data.forum_media?.map((item) => item))
  //       form.setFieldsValue({
  //         Category: response?.data?.forum_category_id,
  //         description: response?.data?.description,
  //       });
  //     })
  // }

  const handleEditOk = (values) => {

    const formData = new FormData();
    formData.append("forum_id", forumId)
    formData.append("forum_category_id", chooseCategory || values?.Category)
    formData.append("description", values.description)

    if (selectedFiles && selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        let forumMedia = selectedFiles[i];
        formData.append("forum_media", forumMedia);
      }
    }

    if (deleteImageArray.length > 0) {
      for (let i = 0; i < deleteImageArray.length; i++) {
        let removeImageId = deleteImageArray[i];
        formData.append("remove_media", removeImageId);
      }
    }
    dispatch(patchForum(formData))
      .then((response) => {
        form?.resetFields();
        setSelectedFiles([])
        setDeleteImageArray([])
        setEditModalOpen(false);
        toast.success(response?.message);
        viewForum();
      }).catch((error) => toast.error(error?.message))
  }

  const handleEditCancel = () => {
    form.resetFields();
    setSelectedFiles([])
    setDeleteImageArray([])
    setEditModalOpen(false)
  }



  //Delete Model start
  // const showDeleteModal = (record) => {
  //   setDeleteModalOpen(true);
  //   setForumId(record?.forum_id)
  // }

  // const handleDeleteOk = () => {
  //   const data = { forum_id: forumId }
  //   dispatch(deleteForum(data))
  //     .then((response) => {
  //       toast.success(response?.message)
  //       setDeleteModalOpen(false)
  //       viewForum()
  //     }).catch((error) => toast.error(error?.message))
  // }

  // const handleDeleteCancel = () => setDeleteModalOpen(false);

  const selectCategory = (value) => { console.log(value, 'vlaue'); setChooseCategory(value) }

  const handleDeleteOldImage = (data) => {
    setEditOldImages(editOldImages?.filter(val => val?.id !== data?.id) || [])
    setDeleteImageArray([...deleteImageArray, data?.id])
  }


  const columns = [
    {
      title: 'Category',
      dataIndex: 'category_name',
      key: 'category_name',
      sorter: (a, b) => a.category_name.localeCompare(b.category_name),
      render: (row, record) => <div>
        <div>{record?.category_name}</div>
      </div>
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
      sorter: (a, b) => a.username?.localeCompare(b.username),
      render: (row, record) => <div>
        <div>{record?.username}</div>
      </div>
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description.localeCompare(b.description),
      render: (row, record) => <div>
        <div> {record?.description.length > 20 ? record?.description.slice(0, 20) + "..." : record?.description}</div >
      </div>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      className: 'action',
      render: (row, record) =>
        <Space>
          <Button className='action-btn' icon={<EyeOutlined />} onClick={() => showViewModal(record)} />
          {/* <Button className='action-btn' icon={<EditOutlined />} onClick={() => showEditModal(record)} /> */}
          {/* <Button className='action-btn' icon={<DeleteOutlined />} onClick={() => showDeleteModal(record)} /> */}
        </Space>
    },
  ];

  return (
    <>

      <div className='patients-search'>
        <div className='custom-search'>
          {/* <span className='icon'>
            <PrefixSearch />
          </span>
          <DebounceInput
            className='searchBox'
            debounceTimeout={1000}
            placeholder="Search Here"
            onChange={(e) => searchForum(e.target.value)}
          /> */}
        </div>
        <div className='btn-list'>
          <Button type="primary" htmlType="submit" onClick={showAddModal}>Add Information</Button>
        </div>
      </div>

      <Table
        bordered
        columns={columns}
        dataSource={forumList || []}
        pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 50, 100] }}
        scroll={{ x: 1200 }}
        className='check-pad-30'
      />

      {/* View Modal */}
      <Modal
        title="Information Details"
        open={viewModalOpen}
        className='common-modal post-modal footer-none'
        width={'100%'}
        centered
        onCancel={handleViewCancel}
      >
        <div className='funder-detail'>
          <ul>
            <li>
              <span className='left'>Category Name</span>
              <span className='right'>{information?.category_name}</span>
            </li>
            <li>
              <span className='left'>User name</span>
              <span className='right'>{information?.username}</span>
            </li>
            <li>
              <span className='left'>Description</span>
              <span className='right'>{information?.description}</span>
            </li>
          </ul>
        </div>
      </Modal>

      {/* Add Modal */}
      <Modal
        title="Add Forum"
        open={addModalOpen}
        className='centered-text'
        width={650}
        centered
        onOk={form.submit}
        onCancel={handleAddCancel}
        footer={[]}
      >

        <Form form={form} onFinish={handleAddOk}>
          <div className='row'>
            <div className='col-sm-12'>

              {/* <Form.Item
                className='form-group'
                name="forum_media"
                rules={[{ required: true, message: 'Please choose Image' }]}
              >
                <div className='upload-wrapper'>
                  <div className='upload-ui' style={{ width: "100px", height: "100px", }}>
                    <span className='upload-span'><img src={toAbsoluteUrl('/images/upload-icon.svg')} alt="Upload" /><br />Upload</span>
                    <Input type='file' name='images' onChange={onSelectFile} multiple accept={"image/*, video/*"} />
                  </div>

                  {selectedFiles?.map((image, index) => (
                    <div key={index} className='upload-mul'>
                      {image?.type?.startsWith("image") ?
                        <a href={URL.createObjectURL(image)} alt="" target="_blank" rel="noreferrer">
                          <img src={URL.createObjectURL(image)} alt="Upload" />
                        </a> :
                        <a href={URL.createObjectURL(image)} alt="Upload" target="_blank" rel="noreferrer">
                          <video>
                            <source src={URL.createObjectURL(image)} />
                          </video>
                        </a>
                      }
                      <button type="button" onClick={() => setSelectedFiles(selectedFiles.filter((e, i) => i !== index))}><DeleteOutlined /></button>
                    </div>
                  ))}

                </div>
              </Form.Item> */}

              <Form.Item
                className='form-group'
                name="Category"
              // rules={[{ required: true, message: 'Please choose Category' }]}
              >
                <Select
                  placeholder="Select a Category"
                  onChange={selectCategory}
                  allowClear >
                  {categoryData?.map((item, i) => {
                    return (
                      <Option value={item?.category_name}>{item?.category_name}</Option>
                    )
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                className='form-group'
                name="description"
                rules={[{ required: true, message: 'Please enter description' }]}
              >
                <Input placeholder="Description" />
              </Form.Item>

              <Space size={10}>
                <Button type="default" onClick={handleAddCancel}>Cancel</Button>
                <Button type="primary" htmlType='submit'>Submit</Button>
              </Space>
            </div>
          </div>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Forum"
        open={editModalOpen}
        className='centered-text'
        width={650}
        centered
        onOk={form.submit}
        onCancel={handleEditCancel}
        footer={[]}
      >
        <Form form={form} onFinish={handleEditOk}>
          <div className='row'>
            <div className='col-sm-12'>

              <div className='upload-wrapper'>
                <div className='upload-ui' style={{ width: "100px", height: "100px", }}>
                  <span className='upload-span'><img src={toAbsoluteUrl('/images/upload-icon.svg')} alt="" /><br />Upload</span>
                  <Input type='file' name='images' onChange={onSelectFile} multiple accept={"image/*, video/*"} />
                </div>

                {(editOldImages?.map((image, index) => (
                  <div key={index} className='upload-mul'>
                    {image.media_type === "image" ?
                      <a href={image?.forum_media} target="_blank" rel="noreferrer">
                        <img src={image?.forum_media} alt="Media" />
                      </a>
                      :
                      <a href={image?.forum_media} target="_blank" rel="noreferrer">
                        <video poster={image?.thumbnail}>
                          <source src={image?.forum_media} />
                        </video>
                      </a>
                    }
                    <button type='button' onClick={() => handleDeleteOldImage(image)}><DeleteOutlined /></button>
                  </div>
                )))}

                {(selectedFiles?.map((image, index) => (
                  <div key={index} className='upload-mul'>
                    {image?.type?.startsWith("image") ?
                      <a href={URL.createObjectURL(image)} alt="" target="_blank" rel="noreferrer">
                        <img src={URL.createObjectURL(image)} alt="Upload" />
                      </a> :
                      <a href={URL.createObjectURL(image)} alt="" target="_blank" rel="noreferrer">
                        <video>
                          <source src={URL.createObjectURL(image)} />
                        </video>
                      </a>
                    }
                    <button type="button" onClick={() => setSelectedFiles(selectedFiles.filter((e, i) => i !== index))}><DeleteOutlined /></button>
                  </div>
                )))}

              </div>
              <br />

              <Form.Item
                className='form-group'
                name="Category"
                rules={[{ required: true, message: 'Please choose Category' }]}
              >
                <Select
                  name="Category"
                  placeholder="Select a Category"
                  onChange={selectCategory}
                  allowClear >
                  {categoryData?.data?.map((item) => { return (<Option value={item?.id}>{item?.category_name}</Option>) })}
                </Select>
              </Form.Item>
              <Form.Item
                className='form-group'
                name="description"
                rules={[{ required: true, message: 'Please enter description' }]}
              >
                <Input placeholder="Description" />
              </Form.Item>

              <Space size={10}>
                <Button type="default" onClick={handleEditCancel}>Cancel</Button>
                <Button type="primary" htmlType='submit'>Submit</Button>
              </Space>
            </div>
          </div>
        </Form>
      </Modal>

      {/* Delete Modal */}
      {/* <Modal
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
      </Modal> */}
    </>
  );
};

export default AllForums;