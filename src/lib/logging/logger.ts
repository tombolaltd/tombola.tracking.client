import {CONSTANTS} from '../constants';
import {ITrackerConfiguration} from '../configurations/ITrackerConfiguration';
import {ILog} from "./ILog";
import {IEvent} from './IEvent';
import {EventPayload} from './EventPayload';
import {Location, EventName} from '../enums';
import {LocalStoragePolyfill} from '../utils/localStorage-polyfill';

export class Logger {
    events:Array<IEvent>;
    url:string;
    configuration:ITrackerConfiguration;

    constructor(configuration:ITrackerConfiguration) {
        this.configuration = configuration;
        this.url = this.configuration.apiEndpoint + '/event';
        this.configuration.localStorage = this.configuration.localStorage || new LocalStoragePolyfill();
        this.events = JSON.parse(this.configuration.localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY) || '[]');

        if (this.configuration.bufferedLog) {
            if (this.configuration.localStorage === void 0) {
                throw new Error('Tombola Events: "localStorage" is required when using a buffered log');
            }

            window.setInterval(() => this.flushLogs(), this.configuration.flushTimeout);
        }

        if (this.events.length > 0) {
            this.flushLogs();
        }
    }

    push(event:IEvent) {
        event.clientTime = Date.now();
        this.events.push(event);

        if (!this.configuration.bufferedLog) {
            this.flushLogs();
        } else {
            this.configuration.localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(this.events));
        }
    }

    flushLogs() {
        try {
            let xhr = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0'),
                eventsToSend = this.events.splice(0);

            if (eventsToSend.length > 0) {
                xhr.open('POST', this.url, 1);
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                xhr.setRequestHeader('Content-type', 'application/json');
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 400 ||
                            xhr.status >= 500) {
                            this.events = this.events.concat(eventsToSend);
                            console.error('Tombola Events: Failed to send tracking events:', xhr);
                        }

                        this.configuration.localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(this.events));
                    }
                };

                let payload = Object.assign({}, {
                    appName: this.configuration.appName,
                    trackingId: this.configuration.trackingId,
                    tenantId: this.configuration.tenantId,
                    formFactor: this.configuration.formFactor,
                    userId: this.configuration.userId,
                    userAgent: window.navigator.userAgent
                }, {
                    events: eventsToSend.map((event) => {
                        return new EventPayload(
                            Location.getStringValue(event.location),
                            EventName.getStringValue(event.eventName),
                            event.clientTime,
                            event.object,
                            event.data
                        );
                    })
                });

                xhr.send(JSON.stringify(payload));
            }
        } catch (e) {
            console.error('Tombola Events: Failed to send tracking events:', e);
        }
    }
}
