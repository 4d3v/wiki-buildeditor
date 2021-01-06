export const CLI_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://elyondb.net';

export const S3_URL =
  process.env.NODE_ENV === 'development'
    ? '/images'
    : 'https://elyondb.s3.us-east-2.amazonaws.com/images';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:5000'
    : 'https://api.elyondb.net';

// export const BASE_URL = 'https://elyondbapi.herokuapp.com';

if (process.env.NODE_ENV === 'development') {
  console.log('Client: ', CLI_URL);
  console.log('ImageDir: ', S3_URL);
  console.log('API', BASE_URL);
}
