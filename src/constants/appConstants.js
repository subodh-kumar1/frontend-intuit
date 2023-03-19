const APP_CONSTANTS = {
  /**
     Defines constant value for http method that will be used by http service.
   */
  HTTP: {
    METHOD: {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
      DELETE: "DELETE",
      PATCH: "PATCH",
    },
  },
  /**
    Defines constant value for route type that will be used by route handler for authentication.
  */
  ROUTE_TYPES: {
    PUBLIC: "publicRoute",
    AUTHENTICATED: "authenticatedRoute",
    UNAUTHENTICATED: "unauthenticatedRoute",
  },
  BASE_URL: "http://localhost:5000/api",
  USER_TYPE: {
    CUSTOMER: "CUSTOMER",
    EXPERT: "EXPERT",
    NONE: "NONE",
  },
  ERROR: {
    LOGIN_FAILURE: "Login Failue",
  },
  TASKS_VIEW_TYPE: {
    CUSTOMER_VIEW: "CUSTOMER_VIEW",
    EXPERT_VIEW: "EXPERT_VIEW",
    EXPERT_IMPORTANT_VIEW: "EXPERT_IMPORTANT_VIEW",
    ALL_VIEW: "ALL_VIEW",
    QUEUED_VIEV: "QUEUED_VIEW",
  },
};
export default APP_CONSTANTS;
