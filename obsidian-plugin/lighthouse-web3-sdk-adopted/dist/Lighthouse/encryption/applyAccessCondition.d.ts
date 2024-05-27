import { ChainType } from '@lighthouse-web3/kavach/dist/types';
export type accessControlResponse = {
    data: {
        cid: string;
        status: string;
    };
};
declare const _default: (publicKey: string, cid: string, signedMessage: string, conditions: any, aggregator?: string | undefined, chainType?: ChainType) => Promise<accessControlResponse>;
export default _default;