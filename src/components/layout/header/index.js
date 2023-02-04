import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doLogout } from '../../../actions/auth';
import './header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <>
            In Header{`       `}
            <button type="button" onClick={() => {
                navigate('/login')
                localStorage.clear()

            }}>Logout</button>
        </>
    );
}

export default Header;