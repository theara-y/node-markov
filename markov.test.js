
const MarkovMachine = require('./markov');


test('make chains', function() {
    const mm = new MarkovMachine('the cat in the hat');
    expect(mm.makeChains()).toEqual(
        {
            "the": ["cat", "hat"], 
            "cat": ["in"], 
            "in": ["the"], 
            "hat": [null]
        }
    );

    const mm2 = new MarkovMachine('a b c d a b c d');
    expect(mm2.makeChains()).toEqual(
        {
            "a": ["b"], 
            "b": ["c"], 
            "c": ["d"], 
            "d": ["a", null]
        }
    );
});

test('make text', function() {
    const mm = new MarkovMachine('the cat in the hat');
    for(let i = 0; i < 10; i++) {
        expect(mm.makeText()).toMatch(/hat$/);
    }
});