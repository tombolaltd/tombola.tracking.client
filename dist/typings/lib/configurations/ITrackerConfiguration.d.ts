export interface ITrackerConfiguration {
    appName: string;
    trackingId: string;
    tenantId: number;
    formFactor: string;
    userId: number;
    bufferedLog: boolean;
    flushTimeout: number;
    apiEndpoint: string;
    localStorage: Storage;
}
