export declare class LocalStoragePolyfill implements Storage {
    [key: string]: any;
    _store: any;
    constructor();
    length: number;
    getItem(key: string): any;
    setItem(key: string, val: any): void;
    removeItem(key: string): void;
    clear(): void;
    key(index: number): string;
}
