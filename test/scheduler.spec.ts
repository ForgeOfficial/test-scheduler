import {Scheduler} from "../src/Scheduler";

describe('scheduler', () => {
    it('should can be instantiated', () => {
        const scheduler = new Scheduler();
        expect(scheduler).toBeDefined();
    });
})