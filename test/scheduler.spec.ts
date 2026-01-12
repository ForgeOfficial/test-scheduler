import {Scheduler} from "../src/Scheduler";

describe(Scheduler.name, () => {
    it('should can be instantiated', () => {
        const scheduler = new Scheduler();
        expect(scheduler).toBeDefined();
    });
})