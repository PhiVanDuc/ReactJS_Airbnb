import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // Style cho component
import 'react-date-range/dist/theme/default.css'; // Chủ đề mặc định

export default function Calendar({ selectionRange, setSelectionRange, scope, setOpen }) {
    const handleSelect = (ranges) => {
        setSelectionRange(ranges.selection);
    };

    return (
        <div className={cn(
            scope === "single" ? "seperate-line-property space-y-[15px]" : "absolute w-[400px] right-[20px] top-[75px] h-fit p-[20px] rounded-[10px] border border-neutral-200 shadow-md bg-white"
        )}>
            {
                scope === "single" && (
                    <div className='space-y-[4px]'>
                        <h4 className='text-[22px] font-semibold'>Select check-in date</h4>
                        <p className='text-[14px] text-neutral-500'>Minimum stay: 3 nights</p>
                    </div>
                )
            }

            <DateRangePicker
                rangeColors={['rgb(255,56,92)']}
                ranges={[selectionRange]}
                onChange={handleSelect}
                minDate={new Date()}
                showMonthAndYearPickers={false}
                showDateDisplay={false}
                staticRanges={[]}
                inputRanges={[]}
            />

            {
                scope === "single" ? 
                (<p className='text-right underline text-[14px] font-medium text-neutral-500 cursor-pointer'>Clear date</p>) :
                (
                    <div className='flex items-center justify-between'>
                        <p className='text-right underline text-[14px] font-medium text-neutral-500 cursor-pointer'>Clear date</p>
                        <Button onClick={(event) => { event.stopPropagation(); setOpen(false); }}>Close</Button>
                    </div>
                )
            }
        </div>
    )
}