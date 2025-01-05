import { breatheModalSwitch, breatheTimeAtom, DrumRollTagATom, endTimeAtom, handleState, pomodoroModalSwitch, pomodoroTimeAtom, PomodoroType, settingType, startTimeAtom, timeIntervalAtom } from "@/globalStateAtoms/atoms";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { IoIosArrowForward } from "react-icons/io";
import { SiStagetimer } from "react-icons/si";
import CircleButton from "./circleButton";
import { PiInfinityBold, PiTimerBold } from "react-icons/pi";
import CircleContext from "./circleContext";

export default function SettingPomodoro() {
    const pomodoroTime = useAtomValue(pomodoroTimeAtom)
    const startTime = useSetAtom(startTimeAtom)
    const endTime = useSetAtom(endTimeAtom)
    const timeInterval = useSetAtom(timeIntervalAtom)
    const tag = useSetAtom(DrumRollTagATom)
    const [isSetPomodoroModal, setPomodoroModal] = useAtom(pomodoroModalSwitch)
    const [isHandleModal, setHandleModal] = useAtom(handleState);
    const setSettingType= useSetAtom(settingType);
    const [isPomodoroType,setIsPomodoroType] = useAtom(PomodoroType);

    const handleClick = () => {
        setSettingType("Setting");
        setHandleModal(isHandleModal === 'close' ? 'open' : 'close');
    };

    const handleToggle = () => {
        setSettingType("DrumRoll");
        startTime(30)
        endTime(180)
        timeInterval(5)
        tag("Pomodoro")
    };
    const startPomodoro = () => {
        setPomodoroModal(!isSetPomodoroModal);
    }
    return (
        <div className=" divide-gray-400 divide-y-2">
            <div className="mt-6">
                <div className="flex items-center cursor-pointer hover:bg-snow-300 p-2 my-2 relative w-full" onClick={handleToggle}>
                    <p className="text-center ml-2 text-lg font-bold">
                        Time
                    </p>
                    <p className="text-center ml-auto text-base text-snow-600 font-bold">
                        {pomodoroTime} 分
                    </p>
                    <div className="">
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
            <div className="my-5 pt-4 justify-center gap-[5%]">
                <button className={`px-4 py-2 ${isPomodoroType === "Pomodoro" ? "bg-snow-300 rounded-2xl" : ""}`} onClick={() => setIsPomodoroType("Pomodoro")}>
                    <CircleContext
                        title={"Pomodoro"}
                        icon={<SiStagetimer />} //7-0-7
                        subTitle={""}                    />
                </button>
                <button className={`px-4 py-2 ${(isPomodoroType === "Sleep") ? "bg-snow-300 rounded-2xl" : ""}`} onClick={() => setIsPomodoroType("Sleep")}>
                    <CircleContext
                        title={"Timer"}
                        icon={<PiTimerBold />} //4-7-8
                        subTitle={""}                    />
                </button>
                <button className={`px-4 py-2 ${(isPomodoroType ==="Focus") ? "bg-snow-300 rounded-2xl" :""}`}  onClick={() => setIsPomodoroType("Focus")}>
                    <CircleContext
                        title={"CountUp"}
                        icon={<PiInfinityBold />} //5-5-5-5
                        subTitle={""}                    />
                </button>
            </div>
            
            <div>
                <button className="flex items-center bg-snow-50 w-full rounded-lg py-2 mt-2 relative" onClick={() => { startPomodoro(); handleClick(); }}>
                    <div className="font-bold text-center w-full">
                        START
                    </div>
                </button>
            </div>
        </div>
    );
}