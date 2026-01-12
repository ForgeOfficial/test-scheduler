import {Always, Never} from "../../src/periods/Periodicity";

describe('Periodicity', () => {
    it('should always run', () => {
        expect(new Always().shouldRun(new Date())).toEqual(true);
    });

    it('should never run', () => {
        expect(new Never().shouldRun(new Date())).toEqual(false);
    });
});