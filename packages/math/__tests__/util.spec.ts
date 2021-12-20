import { expect } from 'chai';
import { distance } from '../src/util';

describe('util test', () => {
	it('distance', () => {
		expect(distance(1, 1, 10, 1)).to.eqls(9);
	});
});
