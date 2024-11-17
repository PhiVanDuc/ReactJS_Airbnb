import { Button } from '@/components/ui/button';

import { HomeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-white z-50'>
            <div className='text-center space-y-[40px]'>
                <div className='space-y-[4px]'>
                    <h2 className='text-[24px] md:text-[30px] font-semibold text-neutral-300'>404: Page not found.</h2>
                    <p className='text-[14px] text-neutral-500'>Please turn back to home page!</p>
                </div>

                <Button
                    className="gap-x-[10px] bg-root"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <HomeIcon />
                    Home page
                </Button>
            </div>
        </div>
    )
}
