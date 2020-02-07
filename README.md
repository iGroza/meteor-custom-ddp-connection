# Setup custom backend server for Meteor app
## Quick start
- To install this package, just move those in `packages` folder in your project
- Add line `igroza:ddp-backend` to `your_project_folder/.meteor/package`
- Set the environment variable **BACKEND_URL** to the URL of the remote server

> Note!
> To creating a Mongo collection on the **client side** use the `Template.name.onRendered()` method

## Example

``` js
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

let AppCommands;

Template.mainLayout.onRendered(() => {
    AppCommands = new Mongo.Collection('commands');

    // Check your collection
    AppCommands.find({}).observeChanges({
        added(id, fields) {
            console.log('# commands added', id, fields);
        }
    })
});

Meteor.startup(() => {
    Tracker.autorun(() => {
        Meteor.subscribe('commands');
    })
})
```
run your project
``` bash
# linux example
export BACKEND_URL=http://some-server.com
meteor run

# windows cmd example
set BACKEND_URL=http://some-server.com
meteor run

# windows powershell example
$env:BACKEND_URL='http://some-server.com'
meteor run
```
