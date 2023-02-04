import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { Table, Tag, Form, Input } from 'antd'

import { PrefixSearch } from '../../svg';
import { getLoanList } from '../../actions/LoanAction';
import { searchLoanManagement } from '../../actions/dashboard';

import '../../components/common/scss/FormField.scss'
import { DebounceInput } from 'react-debounce-input';


const LoanManagement = () => {

  const dispatch = useDispatch();

  const [initialLoanDetails, setInitialLoanDetails] = useState([]);


  useEffect(() => {
    viewLoanManagement()
  }, [])


  const viewLoanManagement = () => {
    dispatch(getLoanList())
      .then((response) => {
        setInitialLoanDetails(response?.data);
      }).catch((error) => error?.message);
  }


  const changeLoan = (value) => {
    const data = {
      query: value.trim(),
    }
    dispatch(searchLoanManagement(data)).then(res => setInitialLoanDetails(res.data)).catch(err => viewLoanManagement())
  }

  const columns = [
    {
      title: 'Loan By',
      dataIndex: 'created_by',
      key: 'created_by',
      sorter: (a, b) => a.created_by?.full_name?.localeCompare(b.created_by?.full_name),
      render: (row, record) => <div>
        <div>{`${record?.created_by?.full_name} (${record?.created_by?.user_type})`}</div>
      </div>
    },
    {
      title: 'Loan amount',
      dataIndex: 'loan_amount',
      key: 'loan_amount',
      sorter: (a, b) => a.loan_amount - b.loan_amount,
      render: (row, record) => <div>
        <div>{"$"} {record?.loan_amount}</div>
      </div>
    },
    {
      title: 'Loan industry',
      dataIndex: 'loan_industries',
      key: 'loan_industries',
      sorter: (a, b) => a.loan_industries?.localeCompare(b.loan_industries),
      render: (row, record) => <div>
        <div>{record?.loan_industries}</div>
      </div>
    },
    {
      title: 'Loan For',
      dataIndex: 'funder_or_broker_name',
      key: 'funder_or_broker_name',
      sorter: (a, b) => a.funder_or_broker_name?.full_name?.localeCompare(b.funder_or_broker_name?.full_name),
      render: (row, record) => <div>
        <div>{`${record?.funder_or_broker_name?.full_name} (${record?.funder_or_broker_name?.user_type})`}</div>
      </div>
    },
    {
      title: 'Selected tag',
      dataIndex: 'select_tag',
      key: 'select_tag',
      render: (row, record) => (
        <>{record?.select_tag?.map((item, index) => {
          return (
            <Tag key={index} color="processing">{item?.tag_name}</Tag>
          )
        })}
        </>
      )
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
            onChange={(e) => changeLoan(e.target.value)}
          />
        </div>
      </div>

      <Table
        bordered
        columns={columns}
        dataSource={initialLoanDetails || []}
        scroll={{ x: 1200 }}
        className='check-pad-30'
      />

    </>
  );
};

export default LoanManagement;