import React, { Suspense } from 'react'
import axios from 'axios'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import store from '../store'
import Routes from './routes'
import ScrollToTop from '../components/common/scroll'
import Loader from '../components/common/loader'
import { setupAxios } from '../utils'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

setupAxios(axios, store);

const AppContainer = () => (
    <>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        <Provider store={store}>
            <Suspense fallback={<Loader isSuspense />}>
                <Loader>
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <ScrollToTop>
                            <Routes />
                        </ScrollToTop>
                    </BrowserRouter>
                </Loader>
            </Suspense>
        </Provider>
    </>

)

export default AppContainer;    