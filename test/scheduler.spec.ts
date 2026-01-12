import {Scheduler} from "../src/Scheduler";

describe(Scheduler.name, () => {
    it('should can be instantiated', () => {
        const scheduler = new Scheduler();
        expect(scheduler).toBeDefined();
    });

    describe('setTask', () => {
        it('should add task', () => {
            const scheduler = new Scheduler();
            scheduler.setTask("task1", null, () => {});
            expect(scheduler.tasks.length).toEqual(1);
            expect(scheduler.tasks[0].name).toEqual("task1");
        });

        it('should edit task if name already exist', () => {
            const scheduler = new Scheduler();
            scheduler.setTask("task1", null, () => {});
            scheduler.setTask("task1", undefined, () => {});
            expect(scheduler.tasks.length).toEqual(1);
            expect(scheduler.tasks[0].name).toEqual("task1");
            expect(scheduler.tasks[0].period).toEqual(undefined);
        });
    })
});