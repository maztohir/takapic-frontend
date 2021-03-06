import camelCase from 'lodash/camelCase';

const initialState = {
  loading: false,
  loaded: false,
  location: {
    bounds: null,
    center: {
      lat: 47.6205588,
      lng: -122.3212725,
    },
    markers: [],
  },
};

const photographerServiceInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'BECOME_OUR_PHOTOGRAPHER_PLACES_CHANGED':
      const addressComponents = action.payload.places[0].address_components;
      let locationStructure = {};
      for (let i = addressComponents.length - 1; i >= 0; i--) {
        if (addressComponents[i].types[0] === 'locality') {
          continue;
        }
        if (addressComponents[i].types[0] === 'country') {
          locationStructure['country'] = addressComponents[i].long_name;
        } else {
          locationStructure[camelCase(addressComponents[i].types[0])] =
            addressComponents[i].long_name;
        }
      }

      return {
        ...state,
        location: {
          ...state.location,
          ...action.payload,
        },
        locationStructure,
      };
    case 'BECOME_OUR_PHOTOGRAPHER_SELF_INTRO':
      return { ...state, ...action.payload };
    case 'SUBMIT_CAMERA_EQUIPMENT':
      return { loading: true, loaded: false };
    case 'SUBMIT_CAMERA_EQUIPMENT_SUCCESS':
      delete state.error;
      return { ...state, loading: false, loaded: true, ...action.payload };
    case 'SUBMIT_CAMERA_EQUIPMENT_ERROR':
      return { loading: false, loaded: true, error: action.error };
    case 'SUBMIT_MEETING_POINT':
      return { loading: true, loaded: false };
    case 'SUBMIT_MEETING_POINT_SUCCESS':
      delete state.error;
      return { ...state, loading: false, loaded: true, data: action.payload };
    case 'SUBMIT_MEETING_POINT_ERROR':
      return { loading: false, loaded: true, error: action.payload };
    default:
      return state;
  }
};

export default photographerServiceInfo;
