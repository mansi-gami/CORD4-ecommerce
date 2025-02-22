import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { route } from './routes'
import MainLayout from 'layout/main-layout'
import Login from 'view/login'
import Cart from 'view/cart/cart'

const Dashboard = lazy(() => import('../view/dashboard/dashboard'))

const AllRoute = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <div className='page-loading'>

                </div>
            }>
                <Routes>
                    <Route path={'/'} element={<MainLayout><Dashboard /></MainLayout>} />
                    <Route path={route.login} element={<Login />} />
                    <Route path={route.dashboard} element={<MainLayout> <Dashboard /> </MainLayout>} />
                    <Route path={route.cart} element={<MainLayout> <Cart /> </MainLayout>} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AllRoute