"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kleur_1 = require("kleur");
const ethers_1 = require("ethers");
const getNetwork_1 = require("./utils/getNetwork");
const Lighthouse_1 = __importDefault(require("../Lighthouse"));
const auth_1 = require("./utils/auth");
const readInput_1 = __importDefault(require("./utils/readInput"));
async function default_1(cid, address) {
    try {
        if (!getNetwork_1.config.get('LIGHTHOUSE_GLOBAL_PUBLICKEY')) {
            throw new Error('Please import wallet first!');
        }
        // Get key
        const options = {
            prompt: 'Enter your password: ',
            silent: true,
            default: '',
        };
        const password = await (0, readInput_1.default)(options);
        const decryptedWallet = ethers_1.ethers.Wallet.fromEncryptedJsonSync(getNetwork_1.config.get('LIGHTHOUSE_GLOBAL_WALLET'), password.trim());
        if (!decryptedWallet) {
            throw new Error('Incorrect password!');
        }
        const signedMessage = await (0, auth_1.sign_auth_message)(decryptedWallet.privateKey);
        const revokeResponse = await Lighthouse_1.default.revokeFileAccess(decryptedWallet.address, address, cid, signedMessage);
        console.log((0, kleur_1.yellow)('revokeTo: ') +
            (0, kleur_1.white)(revokeResponse.data.revokeTo) +
            '\r\n' +
            (0, kleur_1.yellow)('cid: ') +
            (0, kleur_1.white)(revokeResponse.data.cid));
    }
    catch (error) {
        console.log((0, kleur_1.red)(error.message));
        process.exit(0);
    }
}
exports.default = default_1;