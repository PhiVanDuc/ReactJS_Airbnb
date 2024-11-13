import PropertyItem from "./PropertyItem";

export default function ListProperties() {
    return (
        <div className="grid max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-[2000px]:grid-cols-6 gap-x-[25px] gap-y-[35px] pb-[20px] pt-[15px]">
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
        </div>
    )
}
