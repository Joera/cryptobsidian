"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lighthouse_config_1 = require("../../lighthouse.config");
exports.default = async (publicKey, signedMessage) => {
    try {
        const apiKey = (await axios_1.default.post(lighthouse_config_1.lighthouseConfig.lighthouseAPI + `/api/auth/create_api_key`, {
            publicKey: publicKey,
            signedMessage: signedMessage,
        })).data;
        /*
          return:
            { data: { apiKey: '489a497e-4e0c-4cb5-9522-ca07740f6dfb' } }
        */
        return { data: { apiKey } };
    }
    catch (error) {
        throw new Error(error.response.data);
    }
};