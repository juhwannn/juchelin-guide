const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const fs = require("fs");

const bucket = process.env.AWS_BUCKET_NAME;

const s3 = new aws.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SCRET_KEY,
    s3ForcePathStyle: true,
});

module.exports = {
    s3Upload: (
        fileName,
        filePath,
    ) => {
        try {
            s3.upload({
                Bucket: bucket,
                Key: fileName,
                Body: filePath
            }, async (err, data) => {
                if (err) {
                    throw err;
                }

                console.log("S3 Upload Success!");
                console.log(data);
            });
        } catch (e) {
            console.log(e);
        } finally {
            fs.unlinkSync(filePath);
        }
    },
    s3getFile: (
        key = "1039983.jpg"
    ) => {
        try {
            s3.getObject({
                Bucket: bucket,
                Key: key
            }, (async (err, data) => {
                if (err) {
                    throw err;
                }

                console.log("!success ");
                console.log(data);
            }));
        } catch (e) {
            console.log(e);
        }
    }
};