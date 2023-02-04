import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import moment from 'moment';
import { Pagination } from "swiper";
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Modal, Space, Table, Form, Input } from 'antd'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import { toAbsoluteUrl } from '../../utils';
import { CommentIcon, Dollor, PrefixSearch } from '../../svg';
import { searchData, searchReportedPost } from '../../actions/dashboard';
import { deletePost, getPostInfo, getPostList, getReportedPostList } from '../../actions/Post';

import '../../components/common/scss/FormField.scss'
import './Post.scss'
import { DebounceInput } from 'react-debounce-input';


const AllPost = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [postId, setPostId] = useState(null)
  const [post, setPost] = useState([]);
  const [postInfo, setPostInfo] = useState({})
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);


  useEffect(() => {
    viewPost()
  }, [location.pathname])


  //View All Records
  const viewPost = () => {
    if (location.pathname === "/post-management/reported-post") {
      dispatch(getReportedPostList())
        .then((response) => {
          setPost(response?.data)
        }).catch((error) => error?.message)
    } else {
      dispatch(getPostList())
        .then((response) => {
          setPost(response?.data)
        }).catch((error) => error?.message)
    }
  }

  // View Model start
  const showViewModal = (record) => {
    const data = { post_id: record?.id }
    setViewModalOpen(true);
    dispatch(getPostInfo(data))
      .then((response) => {
        setPostId(response?.id)
        setPostInfo(response?.data)
      })
  };

  const handleViewCancel = () => {
    setViewModalOpen(false);
  };

  //Delete Model start
  const showDeleteModal = (record) => {
    setDeleteModalOpen(true);
    setPostId(record?.id)
  }

  const handleDeleteOk = () => {
    dispatch(deletePost(postId))
      .then((response) => {
        toast.success(response?.message)
        setDeleteModalOpen(false)
        viewPost()
      }).catch((error) => toast.error(error?.message))
  }

  const handleDeleteCancel = () => setDeleteModalOpen(false);

  let duration = moment(postInfo?.posted_at).fromNow()

  const changePost = (value) => {
    if (location?.pathname === '/post-management/reported-post') {
      const data = {
        query: value.trim(),
      }
      dispatch(searchReportedPost(data)).then(res => setPost(res.data)).catch(err => viewPost())
    } else {
      const data = {
        search_data: value.trim(),
        modelname: "feed",
        app_name: 'allpost'
      }
      dispatch(searchData(data)).then(res => setPost(res.data)).catch(err => viewPost())
    }
  }

  const columns = [
    {
      title: 'User Image',
      dataIndex: 'profile_img',
      key: 'profile_img',
      render: (row, record) => (
        <div className='image'>
          <img src={record?.profile_img ? record.profile_img : toAbsoluteUrl('/images/user-img.svg')}
            alt="Profile" title={record?.profile_img ? "" : "not found"} />
        </div>
      )
    },
    {
      title: 'User Name',
      dataIndex: 'user',
      key: 'user',
      sorter: (a, b) => a.user?.localeCompare(b.user),
      render: (row, record) => <div>
        {/* <div> {record?.user.length > 20 ? record?.user.slice(0, 20) + "..." : record?.user}</div > */}
        <div>{record?.user} {" "} {record?.last_name}</div >
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
      title: 'Posted date',
      dataIndex: 'posted_at',
      key: 'posted_at',
      sorter: (a, b) => moment(a.posted_at)?.unix() - moment(b.posted_at).unix(),
      render: (row, record) => <div>
        <div>{moment.utc(record.posted_at)?.format("MM-DD-YYYY")}</div>
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
            onChange={(e) => changePost(e.target.value)}
          />
        </div>
        <div className='btn-list'>
          {location.pathname === '/post-management/reported-post' ?
            <Button type="primary" htmlType="submit" onClick={() => navigate('/post-management/all-post')}>All post</Button>
            :
            <Button type="primary" htmlType="submit" onClick={() => navigate('/post-management/reported-post')}>Reported post</Button>
          }
        </div>
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={post || []}
        pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: [5, 10, 20, 50, 100] }}
        scroll={{ x: 1200 }}
        className='check-pad-30'
      />

      <Modal
        title="Post Details"
        open={viewModalOpen}
        className='common-modal post-modal footer-none'
        width={550}
        centered
        onCancel={handleViewCancel}
      >
        <div className='post-detail'>
          <div className='d-flex flex-wrap'>
            <div className='post-image'>
              <figure>
                <img src={postInfo?.profile_img ? postInfo.profile_img : toAbsoluteUrl('/images/user-img.svg')}
                  alt="Profile" title={postInfo?.profile_img ? "" : "not found"} />
              </figure>
            </div>
            <div className='post-desc'>
              <h2 className='title'>{postInfo?.user} {" "} {postInfo?.last_name}</h2>
              <span>{postInfo?.feed_category_id}</span>
              <span className='time'>{duration}</span>
            </div>
          </div>

          <br />

          <div className='funder-detail'>
            <ul>
              <li>
                {postInfo?.description?.length < 30 ? postInfo?.description : <textarea cols={42} value={postInfo?.description} disabled />}
              </li>


              {location.pathname === "/post-management/reported-post" ?
                <li>
                  <span className='left'>Reported By</span>
                  <span className='right'>
                    {postInfo?.reported_by?.length > 2 ?
                      <textarea cols={42} rows={3} value={postInfo?.reported_by?.map((item) => " " + item?.first_name)} disabled />
                      :
                      postInfo?.reported_by?.map((item, index) => <div key={index}>{item?.first_name}</div>)}
                  </span>
                </li>
                : <></>}
            </ul>
          </div>

          {postInfo?.feed_media?.length === 1 ?
            <div>
              {postInfo?.feed_media?.map((item, index) => {
                return (
                  <div key={index} className='multiple-img'>
                    {item?.media_type === 'video' ?
                      <a href={item.feed_media} target="_blank" rel='noreferrer'>
                        <video height="100%" width='100%' poster={item?.thumbnail} controls>
                          <source src={item.feed_media} type="video/mp4" />
                          <source src={item.feed_media} type="video/ogg" />
                          Your browser does not support the video tag.
                        </video>
                      </a>
                      :
                      <figure>
                        <a href={item.feed_media} target="_blank" rel='noreferrer'>
                          <img src={item.feed_media} alt="Media" className='hi' />
                        </a>
                      </figure>
                    }
                  </div>
                )
              })}
            </div>
            :
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
              {postInfo?.feed_media?.map((item, index) => {
                return (

                  <SwiperSlide key={index}>
                    <div className='multiple-img'>
                      {item?.media_type === 'video' ?
                        <a href={item.feed_media} target="_blank" rel='noreferrer'>
                          <video height="100%" width='100%' poster={item?.thumbnail} controls>
                            <source src={item.feed_media} type="video/mp4" />
                            <source src={item.feed_media} type="video/ogg" />
                            Your browser does not support the video tag.
                          </video>
                        </a>
                        :
                        <figure>
                          <a href={item.feed_media} target="_blank" rel='noreferrer'>
                            <img src={item.feed_media} alt="Media" className='hi' />
                          </a>
                        </figure>
                      }
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          }


          <div className='footer-post'>
            <span className='like'><Dollor />{postInfo?.like_by}</span>
            {postInfo?.comment === 0 ?
              <span className='comment'><CommentIcon />{postInfo?.comment} Comment</span>
              :
              <span className='comment' onClick={() => navigate(`/post-management/all-post/${postInfo?.id}/post-comment`)} ><CommentIcon />{postInfo?.comment} Comments</span>
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

export default AllPost;