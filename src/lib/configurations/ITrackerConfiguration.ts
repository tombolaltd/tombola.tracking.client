export interface ITrackerConfiguration {
    appName: String;
    trackingId: String;
    tenantId: Number;
    formFactor: String;
    userId: Number;
    bufferedLog: Boolean;
    flushTimeout: Number;
    apiEndpoint: String;
}