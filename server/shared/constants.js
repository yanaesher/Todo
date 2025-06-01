export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

export const MESSAGES = {
  TODO_NOT_FOUND: "Todo item not found",
  TODO_CREATED: "Todo item successfully created",
  TODO_UPDATED: "Todo item successfully updated",
  TODO_DELETED: "Todo item successfully deleted",
  INVALID_REQUEST: "Invalid request data",
  UNAUTHORIZED: "You need to be logged in",
  FORBIDDEN: "You don't have permission",
};


export const TODO_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
};


export const LIMITS = {
  TITLE_MAX_LENGTH: 100,
  DESCRIPTION_MAX_LENGTH: 1000,
};


export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
};
