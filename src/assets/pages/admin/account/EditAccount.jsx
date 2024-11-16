import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditAccount() {
    const params = useParams();
    const navigate = useNavigate();

    const [missingParams, setMissingParams] = useState(() => {
        if (!params?.userId) return true;
        else return false;
    })

    useEffect(() => {
        if (missingParams) navigate("/admin/accounts");
    }, [params]);

    return (
        <>
            {
                missingParams ?
                (
                    <div>Redirecting...</div>
                ) :
                (
                    <div>EditAccount</div>
                )
            }
        </>
    )
}