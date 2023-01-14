console.log(`${__filename}:1`);

const cookeKeyUserId = 'UserId';
const cookeKeyUser = 'User';

module.exports = {
    extendReqRes: (req, res, next) => {
        res.signedCookieUserSet = user => {
            res.cookieSetSigned(cookeKeyUserId, user.user_id);
            res.cookieSetSigned(cookeKeyUser, JSON.stringify(user));
        };
        req.getUserSeq = () => req.signedCookies[cookeKeyUserId];
        req.getUser = () => {
            try {
                const userJson = req.signedCookies[cookeKeyUser];
                if(!userJson) {
                    res.signedCookieUserRemove();
                    return null;
                }
                return JSON.parse(userJson);
            } catch(err) {
                console.error(err);
                res.signedCookieUserRemove();
                return null;
            }
        };
        res.signedCookieUserRemove = () => {
            res.cookieRemove(cookeKeyUserId);
            res.cookieRemove(cookeKeyUser);
        };

        next();
    },

    checkRole: role => (req, res, next) => {
        const user = req.getUser();
        if(!user)
            return res.renderJson403({});

        if(role) {
            if(!user.role)
                return res.renderJson403({});

            if(!user.role.includes(role))
                return res.renderJson403({});
        }

        next();
    }
};
