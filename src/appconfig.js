const environment = process.env.NODE_ENV;

const devEndpoints = {
    workUrl: "http://localhost:5001/api"
};

const endpointConfig = environment === "prod" ? prodEndpoints : devEndpoints;
const completeConfig = Object.assign({}, endpointConfig);

module.exports = completeConfig;