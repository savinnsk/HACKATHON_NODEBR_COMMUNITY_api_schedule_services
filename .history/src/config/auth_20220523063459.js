require("dotenv/config");

Object.defineProperty(exports, "__esModule", {
  value: true,
});

const config = {
  user_secret_token: process.env.USER_SECRET_TOKEN,
  user_expires_in_token: "15m",
  user_secret_refresh_token: process.env.USER_SECRET_REFRESH_TOKEN,
  user_expires_in_refresh_token: "30d",
  user_expires_refresh_token_days: 30,

  service_provider_secret_token: process.env.SERVICE_PROVIDER_SECRET,
  service_provider_expires_in_token: "15m",
  service_provider_secret_refresh_token:
    process.env.SERVICE_PROVIDER_REFRESH_TOKEN,
  service_provider_expires_in_refresh_token: "30d",
  service_provider_expires_refresh_token_days: 30,
};

exports.default = config;
