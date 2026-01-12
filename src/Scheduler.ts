export class Scheduler {
    private readonly _tasks: Map<string, any> = new Map();

    setTask(name: string, period: any, action: () => void) {
        this._tasks.set(name, {period, action});
    }

    get tasks() {
        return this._tasks;
    }
}