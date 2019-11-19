#### How to Run

+ `npm install` ... will download the world, compile a bit
+ `npm start` will start the app, on a local machine
+ `node import_json.js` will prime the couchDB with fresh Data and purge the current content


##### Tech used

+ React
+ Redux
+ MaterialUI
+ PouchDB
+ CouchDB ( remote)
+ Parcel as Package Tool

No Scaffolding has been used 


##### Remarks

The Basic idea was to create a close to "real" solution for the given Task, with the twist of a Replication Database
I'm a huge fan of CouchDB and do not often have the chance to show it's power :)

I'm aware of that this solution might be completely over the top for a Coding Challenge but following the mission Statement 
i think a solution like this is what i would recommend in a Real Life Scenario 

The CouchDb is remotely hosted for the sole reason of keeping the scope limited.

Material UI was chosen for the ease of a out of the box pleasing look and feel, but as well follows the path of "real life"

Parcel was chosen as i wanted to give it a try for a while now.

The BLOCKED State is evaluated client site, in a real scenario i would use a Filtered Replication

Total Time invested ~ 5.5 Hours most of the Development Time was wasted with getting used to Parcel and choosing the right 
tool for connecting Redux to Pouch

