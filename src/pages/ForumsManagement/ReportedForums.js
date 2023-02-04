import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import moment from 'moment';
import { Pagination } from "swiper";
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from "swiper/react";
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Table, Form, Input, } from 'antd'

import { toAbsoluteUrl } from '../../utils';
import { searchReportedForum } from '../../actions/dashboard';
import { CommentIcon, LikeIcon, PrefixSearch } from '../../svg';
import { deleteForum, getForumInfo, ReportedForumList } from '../../actions/Forum';

import '../PostManagement/Post.scss'
import '../../components/common/scss/FormField.scss'
import { DebounceInput } from 'react-debounce-input';


const ReportedForums = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [reportedForum, setReportedForum] = useState([]);
  const [reportedForumId, setReportedForumId] = useState();
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [reportedForumInfo, setReportedForumInfo] = useState({})
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);


  useEffect(() => {
    reportedForumList()
  }, [])


  //Reported Forum Listing
  const reportedForumList = () => {
    dispatch(ReportedForumList())
      .then((response) => {
        if (response.status === 200) {
          setReportedForum(response?.data?.forum_data)
        }
      }).catch((error) => (error?.message))
  }

  //Reported Forum Searching
  const searchForum = (value) => {
    // const data = { query: value, }
    dispatch(searchReportedForum({ query: value?.trim() }))
      .then((res) => {
        setReportedForum(res?.data?.forum_data)
      })
      .catch(err => reportedForumList())
  }

  //Find time duration
  let duration = moment(reportedForumInfo?.posted_at).fromNow();


  // View Model start
  const showViewModal = (record) => {
    const data = { forum_id: record?.forum_id }
    setViewModalOpen(true);
    dispatch(getForumInfo(data))
      .then((response) => {
        setReportedForumId(response?.id)
        setReportedForumInfo(response?.data)
      })
  };

  const handleViewCancel = () => {
    setViewModalOpen(false);
  };


  //Delete Model start
  const showDeleteModal = (record) => {
    setDeleteModalOpen(true);
    setReportedForumId(record?.forum_id)
  }

  const handleDeleteOk = () => {
    const data = { forum_id: reportedForumId }
    dispatch(deleteForum(data))
      .then((response) => {
        toast.success(response?.message)
        setDeleteModalOpen(false)
        reportedForumList()
      }).catch((error) => toast.error(error?.message))
  }

  const handleDeleteCancel = () => setDeleteModalOpen(false);

  const columns = [
    {
      title: 'User Image',
      dataIndex: 'company_image',
      key: 'company_image',
      render: (row, record) => <div className='image'>
        <img src={record?.user?.profile_img ? record?.user?.profile_img : toAbsoluteUrl('/images/user-img.svg')} alt="Profile" title={record?.user?.profile_img ? "" : "not found"} />
      </div>
    },
    {
      title: 'User Name',
      dataIndex: 'user',
      key: 'user',
      sorter: (a, b) => a.user?.first_name?.localeCompare(b.user?.first_name),
      render: (row, record) => <div>
        <div>{record?.user?.first_name}{" "}{record?.user?.last_name}</div>
      </div>
    },
    {
      title: 'Category',
      dataIndex: 'forum_category_name',
      key: 'forum_category_name',
      sorter: (a, b) => a.forum_category_name?.localeCompare(b.forum_category_name),
      render: (row, record) => <div>
        <div>{record?.forum_category_name}</div>
      </div>
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description?.localeCompare(b.description),
      render: (row, record) => <div>
        <div> {record?.description.length > 20 ? record?.description.slice(0, 20) + "..." : record?.description}</div >
      </div>
    },
    {
      title: 'Created At',
      dataIndex: 'posted_at',
      key: 'posted_at',
      sorter: (a, b) => a.posted_at?.localeCompare(b.posted_at),
      render: (row, record) => <div>
        <div>{moment.utc(record?.posted_at).format("MM-DD-YYYY")}</div>
      </div>
    },
    {
      title: 'Reported By',
      dataIndex: 'reported_by',
      key: 'reported_by',
      render: (row, record) => (
        <>
          {record?.reported_by?.length > 2 ? record?.reported_by[0].first_name + "..." :
            record?.reported_by?.map((item, index) => (
              <div key={index}>{item?.first_name}</div>
            ))}
        </>
      )
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      className: 'action',
      render: (row, record) =>
        <Space>
          <Button className='action-btn' icon={<EyeOutlined />} onClick={() => showViewModal(record)} />
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
            onChange={(e) => searchForum(e.target.value)}
          />
        </div>
      </div>

      <Table
        bordered
        columns={columns}
        //On Searching there is no forum_data
        dataSource={reportedForum || []}
        // dataSource={reportedForum?.forum_data?.length ? reportedForum?.forum_data : [] || reportedForum?.length ? reportedForum : []}
        pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 50, 100] }}
        scroll={{ x: 1200 }}
        className='check-pad-30'
      />

      {/* View Modal */}
      <Modal
        title="Forum Details"
        open={viewModalOpen}
        className='common-modal post-modal footer-none'
        width={500}
        centered
        onCancel={handleViewCancel}
      >
        <div className='post-detail'>
          <div className='d-flex flex-wrap'>
            <div className='post-image'>
              <figure>
                <img src={reportedForumInfo?.user?.profile_img ? reportedForumInfo?.user?.profile_img : toAbsoluteUrl('/images/user-img.svg')}
                  alt="Profile" title={reportedForumInfo?.user?.profile_img ? "" : "not found"} />
              </figure>
            </div>
            <div className='post-desc'>
              <h2 className='title'>{reportedForumInfo?.user?.first_name} {" "} {reportedForumInfo?.user?.last_name}</h2>
              <span>{reportedForumInfo?.forum_category_name}</span>
              <span className='time'>{duration}</span>
            </div>
          </div>
          <br />
          <div className='funder-detail'>
            <ul>
              <li>
                <span className='left'>Reported By</span>
                <span className='right'>
                  {reportedForumInfo?.reported_by?.length > 2 ?
                    <textarea cols={35} rows={3} value={reportedForumInfo?.reported_by.map((item) => " " + item?.first_name)} disabled />
                    :
                    reportedForumInfo?.reported_by?.map((item, index) => <div key={index}>{item?.first_name}</div>)
                  }
                </span>
              </li>
              <br />
              <li>
                {reportedForumInfo?.description?.length > 45 ?
                  <textarea className='right' cols={55} rows={3} value={reportedForumInfo?.description} disabled />
                  :
                  <div>{reportedForumInfo?.description}</div>
                }
              </li>
            </ul>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            loop='true'
            modules={[Pagination]}
            className="mySwiper"
          >
            {reportedForumInfo?.forum_media?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='multiple-img'>
                    {item?.media_type === 'video' ?
                      <a href={item.forum_media} target="_blank" rel='noreferrer'>
                        <video height="100%" width='100%' poster={item?.thumbnail} controls>
                          <source src={item?.forum_media} type="video/mp4" />
                          <source src={item?.forum_media} type="video/ogg" />
                          Your browser does not support the video tag.
                        </video>
                      </a>
                      :
                      <figure>
                        <a href={item?.forum_media} target="_blank" rel='noreferrer'>
                          <img src={item?.forum_media} alt="Media" className='hi' />
                        </a>
                      </figure>
                    }
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div className='footer-post'>
            <span className='like'><LikeIcon />{reportedForumInfo?.likes}</span>
            {reportedForumInfo?.comment === 0 ?
              <span className='comment'><CommentIcon />{reportedForumInfo?.comment}Comment</span>
              :
              <span className='comment' onClick={() => navigate(`/forums-management/all-forums/${reportedForumInfo?.forum_id}/forum-comment`)} ><CommentIcon />{reportedForumInfo?.comment} Comments</span>
            }
          </div>
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

export default ReportedForums;

