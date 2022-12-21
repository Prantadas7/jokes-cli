#!/usr/bin/env node

const { getDadjoke, getPunchLine } = require('random-jokes');


(async () => {
    const res = await getDadjoke();
    const punchLine = await getPunchLine();
    console.log(`\x1b[32mSetUp: ${punchLine.setup}\x1b[0m`);
    console.log(`\x1b[34mPunchLine: ${punchLine.punchline}\x1b[0m`);
})();
