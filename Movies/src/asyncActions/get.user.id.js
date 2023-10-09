import { OPTIONS, URL_MOVIES } from "./data";
import { userId } from "../store/redusers/data.user.slise";
const store = require("store");

export const getUserId = () => {
  return async function (dispatch) {
    try {
      const response = await fetch(URL_MOVIES.ACCOUNT_ID, OPTIONS);
      if (response.status === 200 || response.status === 201) {
        const json = await response.json();
        dispatch(userId(json.id));
        store.set("accountId", json.id);
      } else {
        throw new Error("Failed to get user ID");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
