import { configureStore } from "@reduxjs/toolkit";
import quickReducer from "./quick";
import publishReducer from "./publish";
import notificationReducer from "./notification";
import shareReportReducer from "./sharereport";
import profileCardReducer from "./profilecard";
import toprofileReducer from "./toprofile";
import modalReducer from "./modal";
import editprofileReducer from "./editprofile";
import lpmpdalReducer from "./lpmodal";
import assistmodalReducer from "./asssitmodal";
export const store = configureStore({
  reducer: {
    quick: quickReducer,
    publish: publishReducer,
    notification: notificationReducer,
    sharereport: shareReportReducer,
    profilecard: profileCardReducer,
    toprofile: toprofileReducer,
    modal: modalReducer,
    editprofile: editprofileReducer,
    lpmodal: lpmpdalReducer,
    assistmodal: assistmodalReducer,
  },
});
