import {Scheduler} from "../src/Scheduler";
import {Always, Never} from "../src/periods/Periodicity";

describe(Scheduler.name, () => {
    it('should can be instantiated', () => {
        const scheduler = new Scheduler();
        expect(scheduler).toBeDefined();
    });

    describe('setTask', () => {
        it('should add task', () => {
            const scheduler = new Scheduler();
            scheduler.setTask("task1", new Always(), () => {});
            expect(scheduler.tasks.size).toEqual(1);
            expect(scheduler.tasks.has('task1')).toBeTruthy();
            expect(scheduler.tasks.get('task1')?.period).toBeInstanceOf(Always);
        });

        it('should edit task if name already exist', () => {
            const scheduler = new Scheduler();
            scheduler.setTask("task1", new Always(), () => {});
            scheduler.setTask("task1", new Never(), () => {});
            expect(scheduler.tasks.get('task1')?.period).toBeInstanceOf(Never);
        });
    });

    describe('deleteTask', () => {
        it('should remove task', () => {
            const scheduler = new Scheduler();
            scheduler.setTask("task1", new Always(), () => {});
            scheduler.deleteTask('task1');
            expect(scheduler.tasks.has('task1')).toBeFalsy();
        })
    });

    describe('update', () => {
        it('should executes all tasks', () => {
            const scheduler = new Scheduler();
            const mockAction = jest.fn();
            scheduler.setTask("task1", new Always(), mockAction);
            scheduler.update();
            expect(mockAction).toHaveBeenCalled();
        });
    })
});