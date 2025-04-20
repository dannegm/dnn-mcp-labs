import { makeResponse } from './helpers.js';

const getRandomFact = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
    if (!response.ok) {
        return makeResponse('Something wrong fetching the useless fact');
    }

    const data = await response.json();
    const fact = data?.text || 'Fact placeholder, dah, something wrong dude.';

    return makeResponse(fact);
};

const getTodayFact = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today');
    if (!response.ok) {
        return makeResponse('Something wrong fetching the useless fact of today');
    }

    const data = await response.json();
    const fact = data?.text || 'Fact placeholder, dah, something wrong dude.';

    return makeResponse(fact);
};

export const factsTools = [
    {
        key: 'get-random-fact',
        description: 'Get a random useless fact',
        handler: getRandomFact,
    },
    {
        key: 'get-today-fact',
        description: "Get the today's useless fact",
        handler: getTodayFact,
    },
];
