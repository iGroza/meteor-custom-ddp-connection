# Setup custom backend server for Meteor app
## Quick start
- To install this package, just move those in `packages` folder in your project
- Run `meteor add xneon:ddp-backend`
- Set the environment variable **BACKEND_URL** to the URL of the remote server

> Note!
> To creating a Mongo collection on the **client side** use the [`onReady` callback](https://docs.meteor.com/api/pubsub.html#Meteor-subscribe)

## Example

``` js
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

let AppCommands;

Meteor.startup(() => {
    Meteor.subscribe('commands', {
        onReady() {
            AppCommands = new Mongo.Collection('commands');

            // Check your collection
            AppCommands.find({}).observeChanges({
                added(id, fields) {
                    console.log('# commands added', id, fields);
                }
            });
        }
    });
});
```
run your project
``` bash
# linux example
export BACKEND_URL=http://some-server.com
meteor run
```
``` bash
# windows cmd example
set BACKEND_URL=http://some-server.com
meteor run
```
``` powershell
# windows powershell example
$env:BACKEND_URL='http://some-server.com'
meteor run
```
