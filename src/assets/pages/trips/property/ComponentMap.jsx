import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function ComponentMap({ coors }) {
    return (
        <div className='space-y-[20px]'>
            <div className='space-y-[5px]'>
                <h3 className='text-[22px] font-semibold'>Directional instructions</h3>
                <p className='text-[16px] text-neutral-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti libero voluptatibus nisi numquam, ullam eaque, iste cupiditate quae voluptate voluptatem temporibus ex rerum, quidem deleniti exercitationem nesciunt assumenda. Corporis, corrupti?</p>
            </div>

            <div className='w-full aspect-video rounded-[10px] overflow-hidden'>
                <Map
                    mapboxAccessToken={import.meta.env.VITE_MAPBOX_PUBLIC_TOKEN}
                    mapStyle={import.meta.env.VITE_MAPBOX_STYLE_URL}
                    initialViewState={{
                        longitude: -122.4,
                        latitude: 37.8,
                        zoom: 14
                    }}
                    style={{width: "100%", height: "100%"}}
                />
            </div>
        </div>
    )
}
