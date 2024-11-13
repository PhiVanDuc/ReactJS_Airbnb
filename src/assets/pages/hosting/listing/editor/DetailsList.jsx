import { useNavigate } from "react-router-dom";
import { GrHomeOption } from "react-icons/gr";

import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function DetailsList({ setIsOpen }) {
    const navigate = useNavigate();

    const handleClick = (param) => {
        setIsOpen(false);
        navigate(param)
    }

    return (
        <div className="px-[40px] flex-grow w-full overflow-y-auto space-y-[20px] pb-[40px]">

            {/* Photo tour */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] space-y-[30px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("photo-tour") }}
            >
                <div className="space-y-[5px]">
                    <h2 className="text-[16px] font-semibold">Photo tour</h2>
                    <p className="text-[16px] text-neutral-500">1 bedroom - 2 beds - 1 bath</p>
                </div>

                <div className="flex items-center justify-center">
                    <div className="shrink-0 max-[420px]:w-[100px] w-[150px] aspect-square rounded-[8px] bg-slate-500 border border-neutral-600 scale-[0.8] rotate-[-2deg] max-[420px]:translate-x-[60px] translate-x-[80px]"></div>
                    <div className="shrink-0 relative z-[10] max-[420px]:w-[100px] w-[150px] aspect-square rounded-[8px] bg-slate-500 border border-neutral-600"></div>
                    <div className="shrink-0 max-[420px]:w-[100px] w-[150px] aspect-square rounded-[8px] bg-slate-500 border border-neutral-600 scale-[0.8] rotate-[2deg] max-[420px]:translate-x-[-60px] translate-x-[-80px]"></div>
                </div>
            </div>
            {/* End */}

            {/* Title */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] space-y-[10px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("title") }}
            >
                <h2 className="text-[16px] font-semibold">Title</h2>
                <p className="text-[20px] font-semibold text-neutral-500">This is title</p>
            </div>
            {/* End */}

            {/* Property Type */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] space-y-[5px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("property-type") }}
            >
                <h2 className="text-[16px] font-semibold">Property type</h2>
                <p className="text-[16px] font-medium text-neutral-500">Room - House</p>
            </div>
            {/* End */}

            {/* Pricing */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] space-y-[5px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("pricing") }}
            >
                <h2 className="text-[16px] font-semibold">Pricing</h2>
                
                <div className="space-y-[5px]">
                    <p className="text-[16px] text-neutral-500">$27 per night</p>
                    <p className="text-[16px] text-neutral-500">8% weekly discount</p>
                    <p className="text-[16px] text-neutral-500">15% monthly discount</p>
                </div>
            </div>
            {/* End */}

            {/* Description */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] space-y-[5px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("description") }}
            >
                <h2 className="text-[16px] font-semibold">Description</h2>
                
                <p className="text-[16px] text-neutral-500 overflow-hidden overflow-ellipsis line-clamp-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            {/* End */}

            {/* Utilities */}
            <div 
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] space-y-[10px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("utilities") }}
            >
                <h2 className="text-[16px] font-semibold">Utilities</h2>
                
                <div className="space-y-[5px]">
                    <div className="flex items-center gap-x-[10px] text-neutral-500">
                        <GrHomeOption className="text-[20px]"/>
                        <p className="text-[16px]">This is utility</p>
                    </div>

                    <div className="flex items-center gap-x-[10px] text-neutral-500">
                        <GrHomeOption className="text-[20px]"/>
                        <p className="text-[16px]">This is utility</p>
                    </div>

                    <div className="flex items-center gap-x-[10px] text-neutral-500">
                        <GrHomeOption className="text-[20px]"/>
                        <p className="text-[16px]">This is utility</p>
                    </div>
                </div>

                <p className="text-[14px] text-neutral-500">+5 more</p>
            </div>
            {/* End */}

            {/* Location */}
            <div
                className="p-[30px] border border-neutral-200 shadow-md rounded-[10px] space-y-[10px] cursor-pointer hover:bg-neutral-50 transition"
                onClick={() => { handleClick("location") }}
            >
                <h2 className="text-[16px] font-semibold">Location</h2>

                <div className="space-y-[10px]">
                    <div className='w-full aspect-8/6 overflow-hidden rounded-[8px]'>
                        <Map
                            mapboxAccessToken={import.meta.env.VITE_MAPBOX_PUBLIC_TOKEN}
                            mapStyle={import.meta.env.VITE_MAPBOX_STYLE_URL}
                            initialViewState={{
                                longitude: -122.4,
                                latitude: 37.8,
                                zoom: 10
                            }}
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                            attributionControl={false}
                            projection="globe"
                        >
                            <NavigationControl
                                position='bottom-right'
                                showCompass={false}
                            />
                        </Map>
                    </div>

                    <p className="text-[16px] text-neutral-500">Detail location right here</p>
                </div>
            </div>
            {/* End */}
        </div>
    )
}