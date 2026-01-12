interface Task {
    period: any;
    action: () => void;
}

export class Scheduler {
    private readonly _tasks: Map<string, Task> = new Map();

    setTask(name: string, period: any, action: () => void) {
        this._tasks.set(name, {period, action});
    }

    deleteTask(name: string) {
        this._tasks.delete(name);
    }

    update() {
        for (const task of this._tasks.values()) {
            task.action();
        }
    }

    get tasks() {
        return this._tasks;
    }
}