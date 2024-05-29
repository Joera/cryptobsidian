"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lighthouse_config_1 = require("../../lighthouse.config");
exports.default = async (apiKey) => {
    try {
        const response = await axios_1.default.get(lighthouse_config_1.lighthouseConfig.lighthouseAPI +
            `/api/ipns/get_ipns_records`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });
        /*
          return:
            {
              data: [
                {
                  "ipnsName": "6cda213e3a534f8388665dee77a26458",
                  "ipnsId": "k51qzi5uqu5dm6uvby6428rfpcv1vcba6hxq6vcu52qtfsx3np4536jkr71gnu",
                  "publicKey": "0xc88c729ef2c18baf1074ea0df537d61a54a8ce7b",
                  "cid": "Qmd5MBBScDUV3Ly8qahXtZFqyRRfYSmUwEcxpYcV4hzKfW",
                  "lastUpdate": 1684855771773
                }
              ]
            }
        */
        return { data: response.data };
    }
    catch (error) {
        throw new Error(error.message);
    }
};