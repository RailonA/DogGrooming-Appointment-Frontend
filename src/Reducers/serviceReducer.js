const INITIAL_STATE = {
  serviceCollection: [],
};

const serviceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SERVICE_REQUEST': return {
      ...state,
    };
    case 'FETCH_SERVICE_SUCCESS': return {
      ...state,
      serviceCollection: action.data,
    };
    case 'FETCH_SERVICE_FAILURE': return {
      serviceCollection: [],
    };
    default: return state;
  }
};

export default serviceReducer;

// const serviceReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'FETCH_SERVICE_REQUEST': return {
//       ...state,
//     };
//     case 'FETCH_SERVICE_SUCCESS':
//       return action.data;
//     case 'FETCH_SERVICE_FAILURE': return {
//       serviceCollection: [],
//     };
//     default: return state;
//   }
// };

// export default serviceReducer;
