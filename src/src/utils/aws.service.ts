// import { Injectable } from '@nestjs/common';
// import { S3 } from 'aws-sdk';
// import { AWS_BUCKET, AWS_DEFAULT_REGION } from './env';
//
// @Injectable()
// export class S3Service {
//   private readonly s3: S3;
//
//   constructor() {
//     this.s3 = new S3({
//       region: AWS_DEFAULT_REGION, // AWS S3 manbasi mintaqasi
//     });
//   }
//
//   async generatePresignedUrl(key: string): Promise<string> {
//     const params = {
//       Bucket: AWS_BUCKET, // S3 ombori nomi
//       Key: key, // Fayl nomi yoki yo'li
//       Expires: 3600, // Faylni olish uchun URL amal qilish muddati (sekundda)
//     };
//
//     return this.s3.getSignedUrlPromise('getObject', params);
//   }
// }
