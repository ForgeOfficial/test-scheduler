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
            expect(scheduler.tasks.size).toEqual(1);
            expect(scheduler.tasks.has('task1')).toBeTruthy();
            expect(scheduler.tasks.get('task1')?.period).toEqual(null);
        });

        it('should edit task if name already exist', () => {
            const scheduler = new Scheduler();
            scheduler.setTask("task1", null, () => {});
            scheduler.setTask("task1", undefined, () => {});
            expect(scheduler.tasks.get('task1')?.period).toEqual(undefined);
        });
    });

    describe('deleteTask', () => {
        it('should remove task', () => {
            const scheduler = new Scheduler();
            scheduler.setTask("task1", null, () => {});
            scheduler.deleteTask('task1');
            expect(scheduler.tasks.has('task1')).toBeFalsy();
        })
    })
});