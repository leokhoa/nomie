import regexs from '../../../src/utils/regex';

describe('utils/regex', function() {
	it('extract tags by regex', () => {
		let note = 'This is a #test my #friend(44) # taco';
		let exp = new RegExp(regexs.tag, 'gi');

		expect(note.match(exp)).to.include.members(['#test', '#friend(44)']);
	});
});
