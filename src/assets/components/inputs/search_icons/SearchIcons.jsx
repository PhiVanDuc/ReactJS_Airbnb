import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// // Các module icons
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

export default function SearchIcons({ isForm, form, setSelectedIcon }) {
    const [searchKey, setSearchKey] = useState("");
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    const handleTypeSearchKey = (event) => {
        setSearchKey(event.target.value.toLowerCase());
    };

    useEffect(() => {
        if (searchKey.trim() === "") {
            setResult([]);
            setDone(false);
            return;
        }

        const timeout = setTimeout(async () => {
            setLoading(true);

            const allIcons = [];
            for (const moduleKey in iconModules) {
                try {
                    const module = await (iconModules[moduleKey])();
                    const filteredIcons = Object.keys(module)
                        .filter((key) => key.toLowerCase().includes(searchKey))
                        .map((key) => ({ name: key, Icon: module[key] }));                   

                    allIcons.push(...filteredIcons);
                    setDone(true);
                } catch (error) {
                    setDone(true);
                    console.error(`Error loading module ${moduleKey}:`, error);
                }
            }

            setResult(allIcons);
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [searchKey]);

    const handleClickIcon = (name) => {
        if (!isForm) return;        
        form.setValue("icon", name);
        setSelectedIcon(name);
        toast.success("Successfully selected icon.");
    }

    return (
        <div>
            <Input
                type="text"
                value={searchKey}
                onChange={handleTypeSearchKey}
                placeholder="Search for icons..."
                className="mb-[20px]"
            />

            {loading && <p className="text-[15px] text-neutral-400">Loading icons...</p>}
            {!loading && !searchKey && <p className="text-[15px] text-neutral-400">Please search icons to select.</p>}
            {!loading && done && searchKey && result.length === 0 && <p className="text-[15px] text-neutral-400">Icon does not exist.</p>}

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-[10px]">
                {
                    result.map(({ name, Icon }, index) => (
                        <div
                            key={name + index}
                            className="flex flex-col items-center gap-y-[5px] p-[10px] text-neutral-600 bg-slate-100 rounded-[10px] cursor-pointer hover:bg-neutral-200 transition"
                            onClick={() => { handleClickIcon(name) }}
                        >
                            <Icon size={30} />
                            <p className="text-[12px]">{name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}