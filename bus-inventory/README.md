# Bus-Inventory Application

The application was built using ReactJs and for storing the data local Storage is used.

## The Application has following pages

- /: Home page
- /createroute: Create Route page
- /createroute?id=routeid: Edit Route page
- /mapView?id=routeid: map for a perticular route.

## The Application contains the following features

- Add a Route
- View all the Added Routes (in cards on home page)
- Edit the Routes
- Remove the Routes
- View A Particular Route  with the map view.
- Data is stored in local storage making it non-volatile

## Add Route Feature

- User can add a different routes with status and direction.
- User can add multiple stops for the route.
- User can not create route with less than one stop.
- User needs to fill all the details of the stops

## View Particular Route Feature in cards.

- User can get clean and compact details of a route in cards.
- Cards constain list of stops, count of stops, direction and status for a route.
- User can also see the Map with the direction by clicking "open in maps" button.

## Edit Route Feature

- User can edit the route by clicking on the edit icon on route card.
- It will update new route list in local storage
- User can edit any of the fields

## Remove Route Feature

- User can delete the route by clicking on the remove icon on route card.
- It will update new route list in local storage