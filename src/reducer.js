export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        url: action.payload,
      };
    default:
      throw new Error("error");
  }
};
