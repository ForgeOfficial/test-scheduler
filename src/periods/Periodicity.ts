export interface IPeriodicity {
    shouldRun(now: Date): boolean;
}

export class Always implements IPeriodicity {
    shouldRun(_now: Date): boolean {
        return true;
    }
}

export class Never implements IPeriodicity {
    shouldRun(_now: Date): boolean {
        return false;
    }
}

export class EveryMinute implements IPeriodicity {
    private lastRun: Date = new Date();
    shouldRun(now: Date): boolean {
        const currentMinute = now.getMinutes();
        const lastMinuteRun = this.lastRun.getMinutes();
        if (lastMinuteRun !== currentMinute) {
            this.lastRun = now;
            return true;
        }
        return false;
    }
}

export class EveryHourAt implements IPeriodicity {
    private lastRun: Date = new Date();
    constructor(private minute: number) {}

    shouldRun(now: Date): boolean {
        const hm = `${now.getHours()}:${now.getMinutes()}`;
        const lastRunHourMinute = `${this.lastRun.getHours()}:${this.lastRun.getMinutes()}`;
        if (now.getMinutes() === this.minute && lastRunHourMinute !== hm) {
            this.lastRun = now;
            return true;
        }
        return false;
    }
}
