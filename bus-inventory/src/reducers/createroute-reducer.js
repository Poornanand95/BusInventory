import { v4 as uuid } from "uuid";

export const manageState = (state, action) => {
  switch (action.type) {
    case "ADD_COMPLETE_ROUTE":
      return [
        ...state,
        {
          ...action.payload.singleRoute,
          routeId: action.payload.singleRoute.routeId || uuid() 
        }
      ]
    case "DELETE_COMPLETE_ROUTE":
      let newRouteList = state.filter((eachRoute) => eachRoute.routeId != action.payload.routeId );;
      return [
        ...newRouteList
      ]
    case "SET_ROUTE_ID":
      return {
        ...state,
        route: { ...state.route, routeId: uuid() },
      };
    case "ENTER_ROUTE_NAME":
      return {
        ...state,
        route: { ...state.route, routeName: action.payload.value },
      };
    case "ENTER_ROUTE_DIRECTION":
      return {
        ...state,
        route: { ...state.route, direction: action.payload.value },
      };
    case "ENTER_ROUTE_STATUS":
      return {
        ...state,
        route: { ...state.route, status: action.payload.value },
      };
    case "ADD_NEW_STOP":
      return {
        ...state,
        route: {
          ...state.route,
          stops: [
            ...state.route.stops,
            {
              stopId: uuid(),
              stopName: "",
              latitude: "",
              longitude: "",
            },
          ],
        },
      };
    case "DELETE_STOP":
      return {
        ...state,
        route: {
          ...state.route,
          stops: state.route.stops.filter(
            ({ stopId }) => stopId !== action.payload.stopId
          ),
        },
      };
    default:
      return state;
  }
};
