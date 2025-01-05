import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
// 他の atoms
export const handleState = atom('close');
export const clockSwitch = atomWithStorage('clockSwitch', false);
export const toDoSwitch = atomWithStorage('toDoSwitch',false);
export const setBreatheFinished = atom(false);
export const pomodoroSwitch = atom(false);
export const breatheSwitch = atom(false);
export const breatheWait = atom(true);
export const breatheWaitTime = atom(5);
export const breatheModalSwitch = atom(false);
export const pomodoroModalSwitch = atom(false);
export const breatheModalSwitchCounter = atom(0);
export const breatheType = atomWithStorage('breatheType',"Normal");
export const PomodoroType = atomWithStorage('PomodoroType', "Pomodoro");
export const settingType = atom("Setting");
export const timeAtom = atom(new Date());
export const todoName = atom("");
export const isClockSecondAtom = atom(false);
export const angleAtom = atom(0);
export const circleSizeAtom = atom(30);
export const ElapsedTimeAtom = atom(0);
export const isDraggingAtom = atom(false);
export const pomodoroTimeAtom = atomWithStorage('pomodoroTimeAtom',30);
export const breatheTimeAtom = atomWithStorage("breatheTimeAtom",1);
export const drumRollTimeAtom = atom(1);
export const startTimeAtom = atom(1);
export const endTimeAtom = atom(10);
export const timeIntervalAtom = atom(2);
export const DrumRollTagATom = atom("Setting");

type Task = {
    id: number;
    name: string;
};
export const todolist = atomWithStorage<Task[]>('todolist',[]);
