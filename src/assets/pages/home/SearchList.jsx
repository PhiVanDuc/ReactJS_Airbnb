import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ListProperties from "./ListProperties";

const listSearchParams = ["country", "startDate", "endDate", "guests", "bedrooms", "beds", "bathrooms", "properties"];

export default function SearchList() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // Check valid search params
    useEffect(() => {
        const objSearchParams = Object.fromEntries(searchParams.entries());
        let exist = true;

        for (let i = 0; i < listSearchParams.length; i++) {
            if (!objSearchParams.hasOwnProperty(listSearchParams[i])) {
                exist = false;
                break;
            }
        }

        if (!exist) {
            navigate("/");
            return;
        }
    }, []);

    return (
        <div className="relative responsive-padding-x pb-[73px] lg:pb-0">
            <ListProperties />
        </div>
    )
}
