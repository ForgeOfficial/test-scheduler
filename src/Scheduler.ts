export class Scheduler {
    private readonly _tasks: any[] = [];

    setTask(name: string, period: any, action: () => void) {
        this._tasks.push({name, period, action});
    }

    get tasks() {
        return this._tasks;
    }
}