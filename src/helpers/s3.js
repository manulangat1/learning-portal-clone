import S3 from 'aws-sdk/clients/s3'
import fs from 'fs'
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const secretKeyId = process.env.AWS_SECRET_KEY
const accessKeyId = process.env.AWS_ACCESS_KEY


const s3 = new S3({
    region,
    secretKeyId,
    accessKeyId,
    acl: 'public-read'
})

class AWS3 {
    static async uploadsFile(file){
        const fileStream = fs.createReadStream(file.path);
        const uploadParams = {
            Bucket:bucketName,
            Body: fileStream,
            Key: file.filename,
            acl: 'public-read',
        }
        return s3.upload(uploadParams).promise()
    }
}
export default AWS3
