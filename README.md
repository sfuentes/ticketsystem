#### How to Run

+ `npm install` ... will download the world, compile a bit and hopeful provide a working dependency set
+ `npm start` will start the app, on a local machine
+ `node import_json.js` will prime the couchDB with fresh Data and purge the current content

##### What to Expect

If you open to WebInstances in different Browser Windows, 
the State of Documents is replicated via the couchDb Master -> Master Replication

CLOSED Tickets are visible but indicate their state,
BLOCKED Tickets will not be shown to the User

##### Tech used

+ React
+ Redux
+ MaterialUI
+ PouchDB
+ CouchDB ( remote)
+ Parcel as Package Tool

No Scaffolding has been used 

##### Security

Non at all


##### Tests

None as well

##### Remarks

The basic idea was to create a close to "real" solution for the given Task, with the twist of a replication Database.
I'm a huge fan of CouchDB and do not often have the chance to show it's power :)

I'm aware that this solution might be completely over the top for a Coding Challenge but following the mission Statement 
i thought of a solution which would be something what i would recommend in a Real Life Scenario 

The CouchDb is remotely hosted for the sole reason of keeping the scope limited.

Material UI was chosen for the ease of a out of the box pleasing look and feel, but as well follows the path of "real life"

Parcel was chosen as i wanted to give it a try for a while now.

The BLOCKED State is evaluated client site, in a real scenario i would use a Filtered Replication

Total Time invested ~ 5.5 Hours most of the Development Time was wasted with getting used to Parcel, choosing the right 
tool for connecting Redux to Pouch, and setting up the GC Instance which is running the CouchDb

