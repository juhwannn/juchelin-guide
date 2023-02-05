console.log(`${__filename}:1`);

const secsInMin = 60;
const minsInHour = 60;
const hoursInDay = 24;

// noinspection JSUnusedLocalSymbols
const secs = 1;
// noinspection UnnecessaryLocalVariableJS
const mins = secsInMin;
const hours = mins * minsInHour;
const days = hours * hoursInDay;

module.exports = {
    reissuePeriodInSec: {
        accessToken: 6 * hours,
        refreshToken: 7 * days,
    },
    expirationPeriodInSec: {
        accessToken: 36 * hours,
        refreshToken: 30 * days,
    },
};
