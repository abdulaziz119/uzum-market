import * as dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST || ''; // To'g'ri qiymat olish
const DB_PORT = parseInt(process.env.DB_PORT || '5432', 10); // Portni son sifatida olish
const DB_USER = process.env.DB_USERNAME || '';
const DB_DB = process.env.DB_DATABASE || '';
const DB_PASS = process.env.DB_PASSWORD || '';
const DB_UZUM_MARKET_SCHEMA = process.env.DB_UZUM_MARKET_SCHEMA || ''; // To'g'ri qiymat olish

export { DB_HOST, DB_PORT, DB_USER, DB_DB, DB_PASS, DB_UZUM_MARKET_SCHEMA };
