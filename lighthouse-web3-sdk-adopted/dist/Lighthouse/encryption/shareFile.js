"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kavach_1 = require("@lighthouse-web3/kavach");
exports.default = async (publicKey, shareTo, cid, signedMessage) => {
    const { error } = await (0, kavach_1.shareToAddress)(publicKey, cid, signedMessage, shareTo);
    if (error) {
        throw error;
    }
    /*
      {
        data: {
          cid: 'QmUHDKv3NNL1mrg4NTW4WwJqetzwZbGNitdjr2G6Z5Xe6s',
          shareTo: [ '0x487fc2fE07c593EAb555729c3DD6dF85020B5160' ],
          status: "Success"
        }
      }
    */
    return { data: { cid, shareTo, status: 'Success' } };
};