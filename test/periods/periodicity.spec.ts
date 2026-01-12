import {Always, Never} from "../../src/periods/Periodicity";

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
});