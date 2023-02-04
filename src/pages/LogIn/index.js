import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { toast } from "react-toastify"
import { Button, Form, Input } from 'antd'

import { RightIcon } from '../../svg'
import patterns from '../../utils/patterns'
import { doLogin } from '../../actions/auth'
import LoginHeader from '../../components/common/LoginHeader'

import './LogIn.scss'

const LogIn = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onFinish = (values) => {
		const data = {
			email: values.email,
			password: values.password
		}

		dispatch(doLogin(data))
			.then((response) => {
				if (response?.status === 200) {
					toast.success(response?.message);
					navigate("/dashboard");
				}
			})
			.catch(
				(error) =>
					toast.error(error?.message)
			);
	}

	return (
		<>
			<LoginHeader />
			<div className='login-wrap'>
				<div className='login-detail'>
					<div className='bg'>
						<h1 className='title'>Login</h1>
						<Form
							onFinish={onFinish}
							className='login-form'
						>
							<div className='row'>
								<div className='col-sm-12'>
									<Form.Item
										className='form-group'
										name="email"
										rules={[
											{ required: true, message: 'Please enter email ' },
											{ pattern: patterns.email, message: "Please enter valid email" }
										]}
									>
										<Input placeholder="Email" />
									</Form.Item>
								</div>
								<div className='col-sm-12'>
									<Form.Item
										className='form-group'
										name="password"
									>
										<Input.Password placeholder="Password" />
									</Form.Item>
								</div>
								<div className='col-sm-12'>
									<Form.Item className='form-group'>
										<Button type="primary" htmlType="submit"> Login<RightIcon /></Button>
										<Link to='/signup' className='f-pwd'> Signup </Link>
									</Form.Item>
								</div>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}

export default LogIn;