import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hosting() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/hosting/listing");
    }, []);

    return (
        <div>Redirect to listing...</div>
    )
}
