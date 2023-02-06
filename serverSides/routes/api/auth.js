console.log(`${__filename}:1`);

const express = require('express');
const jwt = require("jsonwebtoken-promisified");
const {expirationPeriodInSec} = require("../../logics/JwtLogic");
const {selectUserAll} = require("../../repositories/auth");
const {wrapTryCatch} = require("../../utils/RouterUtil");
const router = express.Router();

const employeeToAccessTokenPayload = employee => ({
    seq: employee.seq,
    id: employee.id,
    company: employee.company,
    name: employee.name,
});

const employeeToRefreshTokenPayload = employee => ({
    seq: employee.seq,
});

router.post('/join', wrapTryCatch(async (req, res) => {

}));

router.post('/login', wrapTryCatch(async (req, res) => {
    const {id, password} = req.getObjectRequired('id', 'password');
    const idReplaced = id.replace(/\s/g, '');
    const userFromDb = await authLogic.login(idReplaced, password);
    const userFromDb = await selectUserAll();
    console.log("userFromDb: ", userFromDb);
    if(!userFromDb)
        throw new Error('로그인 정보를 확인해 주세요.');

    const accessToken = await jwt.signAsync(employeeToAccessTokenPayload(userFromDb), process.env.JWT_SECRET, {
        expiresIn: expirationPeriodInSec.accessToken,
        issuer: 'juchelin-guide',
        subject: 'AccessToken',
    });

    const refreshToken = await jwt.signAsync(employeeToRefreshTokenPayload(userFromDb), process.env.JWT_SECRET, {
        expiresIn: expirationPeriodInSec.refreshToken,
        issuer: 'juchelin-guide',
        subject: 'RefreshToken',
    });

    res.signedCookieAccessTokenSet(accessToken);
    res.renderJson({
        accessToken,
        refreshToken,
    });
}));

router.get('/logout', wrapTryCatch(async (req, res) => {

}));

router.post('/logout', wrapTryCatch(async (req, res) => {

}));

module.exports = router;
