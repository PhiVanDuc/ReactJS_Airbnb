import PropertyItem from "./PropertyItem";

export default function PropertyList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-[15px]">
            <PropertyItem status="active" />
            <PropertyItem status="pending" />
            <PropertyItem status="off" />
        </div>
    )
}
