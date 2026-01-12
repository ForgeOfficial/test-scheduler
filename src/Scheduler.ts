import {IPeriodicity} from "./periods/Periodicity";

interface Task {
    period: IPeriodicity;
    action: () => void;
}

export class Scheduler {
    private readonly _tasks: Map<string, Task> = new Map();

    setTask(name: string, period: IPeriodicity, action: () => void) {
        this._tasks.set(name, {period, action});
    }

    deleteTask(name: string) {
        this._tasks.delete(name);
    }

    update() {
        for (const task of this._tasks.values()) {
            if (task.period.shouldRun(new Date()))
                task.action();
        }
    }

    get tasks() {
        return this._tasks;
    }
}