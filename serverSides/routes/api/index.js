console.log(`${__filename}:1`);

const express = require('express');
const router = express.Router();

const RouterUtil = require('../../utils/RouterUtil');
const wrapTryCatch = RouterUtil.wrapTryCatch;

/**
 * @openapi
 * /api/test/{path}:
 *   get:
 *     description: some description
 *     parameters:
 *       - in: path
 *         name: path
 *         schema: {type: string}
 *         required: true
 *       - in: query
 *         name: k
 *         schema: {type: string}
 *         required: true
 *       - in: query
 *         name: v
 *         schema: {type: string}
 *         required: true
 *     responses: { 200: { description: something } }
 *   post:
 *     description: some description
 *     parameters:
 *       - in: path
 *         name: path
 *         schema: {type: string}
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               k: { type: string }
 *               v: { type: string, enum: [0, 1] }
 *             required: [ k, v ]
 *     responses: { 200: { description: something } }
 */
router.get('/test', wrapTryCatch(async (req, res) => {
    const q = req.get('q');
    res.renderJson({
        path: '/api/test',
        q,
    });
}));

router.use('/auth', require('./auth'));


module.exports = router;
