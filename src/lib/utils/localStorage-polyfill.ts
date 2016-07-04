export class LocalStoragePolyfill implements Storage {
    [key:string]: any;
    _store:any;

    constructor() {
        this._store = {};
    }

    get length(): number { return Object.keys(this._store).length; }

    getItem(key: string) {
        return this._store[key];
    }

    setItem(key: string, val: any) {
        this._store[key] = val
    }

    removeItem(key: string) {
        delete this._store[key];
    }

    clear() {
        this._store = {};
    }

    key(index: number): string {
        return Object.keys(this._store)[index];
    }
}
