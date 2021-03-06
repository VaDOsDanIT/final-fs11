import api from "@utils/api";
import { catchError } from "../../utils";

export const houseMaintainService = () => (dispatch) => {
    dispatch({ type: "HOUSE_MAINTAIN_REQUEST" });
    api({
        method: 'post',
        url: 'houseMaintenance',
        data,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
        .then((data) => {
            console.log("Post house maintain : ", data);
            dispatch({ type: "HOUSE_MAINTAIN_SUCCESS", payload: data });
        })
        .catch(err => {
            catchError(err);
            dispatch({ type: "HOUSE_MAINTAIN_ERROR" });
        });
};