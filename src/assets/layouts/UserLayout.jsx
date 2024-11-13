import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import HomePageNavbar from '../components/navbars/HomePageNavbar'
import HomePageNavbarButtom from '../components/navbars/HomePageNavbarButtom'
import SuspenseLoading from '../components/loadings/SuspenseLoading'

export default function UserLayout() {
    const { pathname } = useLocation();

    return (
        <>
            <Suspense fallback={<SuspenseLoading />}>
                <div className='flex flex-col h-[100vh]'>
                    <HomePageNavbar pathname={pathname} />
                    
                    <div className='flex-grow overflow-y-auto'>
                        <Outlet />
                        {
                            !pathname.startsWith(import.meta.env.VITE_MESSAGES_URL) &&
                            <HomePageNavbarButtom pathname={pathname} />
                        }
                    </div>
                </div>
            </Suspense>
        </>
    )
}
