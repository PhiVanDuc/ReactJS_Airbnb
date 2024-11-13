import CloudinaryUploadWidget from "@/assets/components/libs/CloudinaryUploadWidget";
import { Button } from "@/components/ui/button";

export default function Test() {
    return (
        <div>
            <CloudinaryUploadWidget folder="airbnb_property">
                <Button>Upload Image</Button>
            </CloudinaryUploadWidget>
        </div>
    )
}