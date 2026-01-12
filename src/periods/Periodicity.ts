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