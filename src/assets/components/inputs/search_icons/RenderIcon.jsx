import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const iconModules = {
    ai: () => import('react-icons/ai'),
    bs: () => import('react-icons/bs'),
    bi: () => import('react-icons/bi'),
    ci: () => import('react-icons/ci'),
    cg: () => import('react-icons/cg'),
    di: () => import('react-icons/di'),
    fi: () => import('react-icons/fi'),
    fc: () => import('react-icons/fc'),
    fa: () => import('react-icons/fa'),
    fa6: () => import('react-icons/fa6'),
    gi: () => import('react-icons/gi'),
    go: () => import('react-icons/go'),
    gr: () => import('react-icons/gr'),
    hi: () => import('react-icons/hi'),
    hi2: () => import('react-icons/hi2'),
    im: () => import('react-icons/im'),
    lia: () => import('react-icons/lia'),
    io: () => import('react-icons/io'),
    io5: () => import('react-icons/io5'),
    lu: () => import('react-icons/lu'),
    md: () => import('react-icons/md'),
    pi: () => import('react-icons/pi'),
    rx: () => import('react-icons/rx'),
    ri: () => import('react-icons/ri'),
    si: () => import('react-icons/si'),
    sl: () => import('react-icons/sl'),
    tb: () => import('react-icons/tb'),
    tfi: () => import('react-icons/tfi'),
    ti: () => import('react-icons/ti'),
    vsc: () => import('react-icons/vsc'),
    wi: () => import('react-icons/wi')
};

export default function RenderIcon({ nameIcon, propsIcon }) {
    const [Component, setComponent] = useState({
        icon: null
    });

    useEffect(() => {
        const lib = nameIcon.replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ")[0].toLowerCase();

        async function loadIcon() {
            const icons = await iconModules[lib]();
            setComponent({
                icon: icons[nameIcon],
            });
        };

        loadIcon();
    }, [nameIcon, propsIcon]);

    return (
        <>
            {
                Component.icon ? <Component.icon {...propsIcon} /> : <Skeleton className={`w-[${propsIcon.size}px] h-[${propsIcon.size}px] rounded-[3px] bg-slate-300`} />
            }
        </>
    )
}