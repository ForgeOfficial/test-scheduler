export class Scheduler {
    tasks: any[] = [];

    setTask(name: string, period: any, action: () => void) {
        this.tasks.push({name, period, action});
    }
}