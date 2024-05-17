import HttpService from "./HttpService";
import {
  GET_ALL_POSITION_MASTER_DATA,
  POST_POSITION_DATA,
} from "./endPointConstant";

import _ from "lodash";

// process.env.RECRUITMENTTOOLBACKEND define in next.config.mjs
const backendEndpoint = process.env.RECRUITMENTTOOLBACKEND || "";
const httpService = new HttpService(backendEndpoint);

const getToken = (): string | null => localStorage.getItem("token");

const getDefaultConfig = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

const headersContentType = () => ({
  "Content-Type": "application/json",
});

export const getPositionMasterData = () =>
  httpService.get(GET_ALL_POSITION_MASTER_DATA, {}, {});

export const postPositionData = (payload: {}) =>
  httpService.post(POST_POSITION_DATA, { ...payload }, {});
