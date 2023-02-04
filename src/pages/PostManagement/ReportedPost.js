import React, { useState } from 'react';

import { Pagination } from "swiper";
import { Button, Modal, Space, Table } from 'antd'
import { Swiper, SwiperSlide } from "swiper/react";
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import { toAbsoluteUrl } from '../../utils'
import { CommentIcon, LikeIcon } from '../../svg';
import { RenderSearchResponsive } from '../../utils/FormField';

import './Post.scss'

const ReportedPost = () => {

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const showViewModal = () => {
    setViewModalOpen(true);
  };
  const handleViewOk = () => {
    setViewModalOpen(false);
  };
  const handleViewCancel = () => {
    setViewModalOpen(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name?.localeCompare(b.name),
      render: (row) => <div>
        <div>{row.name}</div>
      </div>
    },
    {
      title: 'Reported  By',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.name?.localeCompare(b.name),
      render: (row) => <div>
        <div>{row.title}</div>
      </div>
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      className: 'action',
      render: (row) =>
        <Space>
          <Button className='action-btn' icon={<EyeOutlined />} onClick={showViewModal} />
          <Button className='action-btn' icon={<DeleteOutlined />} />
        </Space>
    },

  ];

  const data = [
    {
      key: '1',
      name: { name: 'Akshit' },
      title: { title: 'Mehul Sir' },
    },
  ];


  return (
    <>
      <div className='patients-search'>
        <RenderSearchResponsive />
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        scroll={{ x: 1200 }}
        className='check-pad-30'
      />

      <Modal
        title="Post Details"
        open={viewModalOpen}
        className='common-modal post-modal footer-none'
        width={450}
        centered
        onOk={handleViewOk}
        onCancel={handleViewCancel}
      >
        <div className='post-detail'>
          <div className='d-flex flex-wrap'>
            <div className='post-image'>
              <figure>
                <img src={toAbsoluteUrl('/images/company_image.png')} alt="user" />
              </figure>
            </div>
            <div className='post-desc'>
              <h2 className='title'>User Name</h2>
              <span>Company</span>
              <span className='time'>1 min</span>
            </div>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor in</p>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className='multiple-img'>
                <figure>
                  <img src={toAbsoluteUrl('/images/company_image.png')} alt="user" className='hi' />
                </figure>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className='multiple-img'>
                <figure>
                  <img src={toAbsoluteUrl('/images/company_image.png')} alt="user" />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='multiple-img'>
                <figure>
                  <img src={toAbsoluteUrl('/images/company_image.png')} alt="user" />
                </figure>
              </div>
            </SwiperSlide>

          </Swiper>
          <div className='footer-post'>
            <span className='like'><LikeIcon />50</span>
            <span className='comment'><CommentIcon />200 Comments</span>
          </div>
        </div>
      </Modal>

    </>
  );
};

export default ReportedPost;

