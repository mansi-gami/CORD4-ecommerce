import Header from 'component/header/header'
import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <div className='main-layout'>
            <Header />
            {children}
        </div>
    )
}

export default MainLayout