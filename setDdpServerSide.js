var backendUrl = process.env.BACKEND_URL;

if (backendUrl) {
    __meteor_runtime_config__.BACKEND_URL = backendUrl;
    __meteor_runtime_config__.ACCOUNTS_CONNECTION_URL = backendUrl;

    console.log(' ### BACKEND_URL successfully connected', __meteor_runtime_config__);
}