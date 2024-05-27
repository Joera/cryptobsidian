type fileObject = {
    publicKey: string;
    fileName: string;
    mimeType: string;
    txHash: string;
    status: string;
    createdAt: number;
    fileSizeInBytes: string;
    cid: string;
    id: string;
    lastUpdate: number;
    encryption: boolean;
};
export type uploadsResponseType = {
    data: {
        fileList: fileObject[];
        totalFiles: number;
    };
};
declare const _default: (authToken: string, lastKey?: string | null) => Promise<uploadsResponseType>;
export default _default;