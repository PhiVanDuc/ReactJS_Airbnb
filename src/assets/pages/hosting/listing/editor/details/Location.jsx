import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';

export default function Location() {
    return (
        <div className='h-full flex items-center justify-center'>
            <div className='w-full max-w-[800px] my-auto'>
                <h2 className='text-[30px] font-semibold mb-[60px]'>Location</h2>

                <div className='space-y-[10px]'>
                    <div className='w-full aspect-video overflow-hidden rounded-[8px]'>
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

                    <Input placeholder="Detail address..." />
                </div>
            </div>
        </div>
    )
}
