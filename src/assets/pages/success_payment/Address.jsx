import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Address() {
    return (
        <div className='seperate-line-property space-y-[20px]'>
            <h3 className="text-[22px] font-semibold">Address</h3>

            <div className="space-y-[10px]">
                <p className="text-[14px]">1-D1, Tổ 5, P.Bạch Thái Bưởi, Hà Đông, Hà Nội, Phúc La, 12100, Hà Đông, Hanoi, Vietnam</p>

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
        </div>
    )
}
