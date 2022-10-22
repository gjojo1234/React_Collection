export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, url: action.payload };
    case "CHANGE_ID":
      return { id: action.id, url: action.url };
    default:
      throw new Error("error");
  }
};
