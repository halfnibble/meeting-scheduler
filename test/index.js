import { assert } from 'chai';
import awesomeFunction from '../src';

describe('Awesome test.', () => {
    it('should test awesome function', () => {
        const expectedVal = 'I am just an Awesome Function'
        assert(awesomeFunction() === expectedVal, 'Named awesome :(');
    });
});