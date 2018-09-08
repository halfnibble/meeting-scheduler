import { assert } from 'chai';
import MeetingScheduler from '../src/meeting-scheduler';

describe('Awesome test.', () => {
    it('should test awesome function', () => {
        const expectedVal = 'I am just an Awesome Function'
        assert(MeetingScheduler() === expectedVal, 'Named awesome :(');
    });
});