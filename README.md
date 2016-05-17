<img src="https://raw.githubusercontent.com/tombolaltd/tombola.tracking.client/master/logo.jpg?token=ALOSemPZ0bxHlcp8FbSe5_sz_QQDlfHNks5XRGn6wA%3D%3D" height="100" />

## Installation
`bower i git@github.com:tombolaltd/tombola.tracking.client.git --save`

## Example
```js
var tracker = new Tracker({
  apiEndpoint: 'https://dev-tracking.tombola.co.uk',
  formFactor: 'mobile',
  appName: 'ArcadeFlash',
  trackingId: window.localStorage.getItem('tombola.device-id'),
  userId: 12345,
  tenantId: 1010,
  bufferedLog: true,
  flushTimeout: 5000,
  localStorage: window.localStorage
});

tracker
  .log({
    eventName: Tracker.EventName.ValidationError,
    location: Tracker.Location.Login,
    object: 'username-textbox'
  })
  .addInteractions([
    {
      selector: '#password',
      event: 'blur',
      buildLog: function (element, e) {
        // TODO: Actually validate the input
        return {
          eventName: Tracker.EventName.ValidationError,
          location: Tracker.Location.Login,
          object: 'password-textbox',
          data: {
              message: 'Password is a required field'
          }
        };
      }
    }
  ]);


```

## Documentation
API Docs can be found [here](http://tombolaltd.github.io/tombola.tracking.client/)

***NOTE:*** Please refer to the docs for the different `Location` and `EventTypes` - do not just add new ones for the sake of it!

## Gulp Commands
- `gulp` (default): Compiles the typescript and loads the dev server index.html

- `gulp patch`: Prepares the repo for a new patch release

- `gulp minor`: Prepares the repo for a new minor release

- `gulp major`: Prepares the repo for a new major release

The release prep tasks will create a new git tag and will auto bump the bower/package.json file version numbers as well as generate and publish the latest version of the documentation.
