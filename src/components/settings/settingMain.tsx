import Sound from "@/components/settings/sound";
import Function from "@/components/settings/function";
import ButtonFunction from "@/components/settings/buttonFunction";
import { CgEditNoise, CgTimer } from "react-icons/cg";
import { FiClock } from 'react-icons/fi';
import { FaTasks } from 'react-icons/fa';
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { BsCloudRain } from "react-icons/bs";
import { LuLeaf } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";


export default function SettingMain() {

    return (
        <div
            className="bg-gray-200 p-5 absolute right-5 top-5 w-[15%] min-w-64 rounded-xl shadow-lg divide-gray-400 divide-y-2"
            onClick={(e) => e.stopPropagation()} // 子要素クリックで背景イベントを止める
        >
            <div >
                <p className='font-bold'>
                    Sound
                </p>
                <div className='flex my-5'>
                    <Sound title="Rain" icon={<BsCloudRain />} />
                    <Sound title="Noise" icon={<CgEditNoise />} />
                    <Sound title="Fire" icon={<MdOutlineLocalFireDepartment />} />
                </div>
            </div>
            <div >
                <p className='font-bold mt-4'>
                    Function
                </p>
                <div className='flex my-5 justify-center gap-[10%]'>
                    <Function title="Pomodoro" icon={<CgTimer />} type='Pomodoro' />
                    <Function title="Breath" icon={<LuLeaf />} type='Breath' />
                </div>
            </div>
            <div >
                <p className='font-bold mt-4'>
                    Modal
                </p>
                <div className='my-5 relative grid-row-2 grid gap-[10%]'>
                    <ButtonFunction title="Clock" icon={<FiClock />} type='clock' />
                    <ButtonFunction title="ToDo List" icon={<FaTasks />} type='todo' />
                </div>
            </div>
            <div className="flex pt-4 items-center">
                <p className='text-xl font-bold'>
                    Source
                </p>
                <div className="ml-auto">
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
}
