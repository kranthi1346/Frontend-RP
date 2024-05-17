import HttpService from './HttpService';
import {
  GET_ALL_POST,
} from './endPointConstant';
import {
  X_API_KEY,
} from '../utils/constants';
// import {
//   getSelectedNPI,
// } from '../utils/common/helpers';
import _ from 'lodash';

const getToken = () => localStorage.getItem('token');

const getDefaultConfig = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

const getAPIKeyConfig = () => ({
  'Content-Type': 'application/json',
  'x-api-key': `${X_API_KEY}`,
});

const headersContentType = () => ({
  'Content-Type': 'application/json',
});

//For PostFiles starts
const getDefaultFileConfig = () => ({
  Authorization: `Bearer ${token}`,
});
const getOCP_API_KeyConfig = () => ({
  // 'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-Key': `${OCP_APIM_SUBSCRIPTION_KEY}`,
  Consumer: `${CONSUMER}`,
});

const getOCP_API_KeyConfig_for_SEP = () => ({
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
  'Ocp-Apim-Subscription-Key': `${OCP_APIM_SUBSCRIPTION_KEY}`,
  Consumer: `${CONSUMER}`,
});

//For PostFiles ends

export const getPostlist = () => HttpService.get(GET_ALL_POST, {}, {});


export const getSepElectionType = (sepDataObj) =>
  HttpService.get(`${GET_SEP_ELECTION_TYPE}`, sepDataObj, getOCP_API_KeyConfig_for_SEP());
