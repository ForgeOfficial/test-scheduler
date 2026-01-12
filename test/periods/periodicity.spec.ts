import {Always, EveryDayAt, EveryHourAt, EveryMinute, EveryWeekdayAt, Never} from "../../src/periods/Periodicity";

describe('Periodicity', () => {
    describe(Always.name, () => {
        it('should always run', () => {
            expect(new Always().shouldRun(new Date())).toEqual(true);
        });
    })

    describe(Never.name, () => {
        it('should never run', () => {
            expect(new Never().shouldRun(new Date())).toEqual(false);
        });
    })

    describe(EveryMinute.name, () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });
        afterEach(() => {
            jest.useRealTimers();
        });
        it.each([1, 2, 3, 4])('should run every minute', (minute: number) => {
            const periodicity = new EveryMinute();
            jest.setSystemTime(new Date(2026, 0, 1, 2, minute));
            expect(periodicity.shouldRun(new Date())).toEqual(true);
        });

        it.each([1, 2, 3, 4])('should not run every minute', (second: number) => {
            const periodicity = new EveryMinute();
            jest.setSystemTime(new Date(2026, 0, 1, 2, 1, second));
            expect(periodicity.shouldRun(new Date())).toEqual(true);
        });
    });

    describe(EveryHourAt.name, () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });
        afterEach(() => {
            jest.useRealTimers();
        });
        it.each([2, 3, 6])('should run every hour at', (hour: number) => {
            const periodicity = new EveryHourAt(5);
            jest.setSystemTime(new Date(2026, 0, 1, hour, 5));
            expect(periodicity.shouldRun(new Date())).toEqual(true);
        });

        it.each([2, 3, 6])('should not run every hour at', (minute: number) => {
            const periodicity = new EveryHourAt(5);
            jest.setSystemTime(new Date(2026, 0, 1, 2, minute));
            expect(periodicity.shouldRun(new Date())).toEqual(false);
        });
    });

    describe(EveryDayAt.name, () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });
        afterEach(() => {
            jest.useRealTimers();
        });
        it.each([2, 3, 6])('should run every day at', (day: number) => {
            const periodicity = new EveryDayAt(5, 3);
            jest.setSystemTime(new Date(2026, 0, day, 5, 3));
            expect(periodicity.shouldRun(new Date())).toEqual(true);
        });

        it.each([2, 3, 6])('should not run every day at', (day: number) => {
            const periodicity = new EveryDayAt(5, 3);
            jest.setSystemTime(new Date(2026, 0, day, 5, 40));
            expect(periodicity.shouldRun(new Date())).toEqual(false);
        });
    });

    describe(EveryWeekdayAt.name, () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });
        afterEach(() => {
            jest.useRealTimers();
        });
        it('should run every weekday at', () => {
            // Without 4 (Thursday)
            const periodicity = new EveryWeekdayAt([0, 1, 2, 3, 5, 6], 3, 3);

            // 21/01/2026 = Wednesday
            jest.setSystemTime(new Date(2026, 0, 21, 3, 3));
            expect(periodicity.shouldRun(new Date())).toEqual(true);

            // 22/01/2026 = Thursday
            jest.setSystemTime(new Date(2026, 0, 22, 3, 3));
            expect(periodicity.shouldRun(new Date())).toEqual(false);
        });

        it('should not run every weekday at', () => {
            // With 4 (Thursday)
            const periodicity = new EveryWeekdayAt([4], 3, 3);

            // 21/01/2026 = Wednesday
            jest.setSystemTime(new Date(2026, 0, 21, 3, 3));
            expect(periodicity.shouldRun(new Date())).toEqual(false);

            // 20/01/2026 = Tuesday
            jest.setSystemTime(new Date(2026, 0, 20, 3, 3));
            expect(periodicity.shouldRun(new Date())).toEqual(false);
        });
    });
});