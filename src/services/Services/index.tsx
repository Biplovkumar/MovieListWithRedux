/**
 *
 * @param {*} CheckNet for checking network is available or not.
 * @param {*} getApiService API Request function name.
 * @param {*} authOptions Param if data is to be sent.
 * @param {*} returnMethod callback to main component.
 * @param {*} type Method i.e. POST,GET,DELETE etc.
 * @param {*} handleErrors it is for catching the errors..
 */

//axios is a library for react native for API calling
import axios from 'axios';
//for host & Apis url
import Config from '../../utils/config/index';

import {CheckNet} from '../../utils/commonFun';

export default class Api {
  private _name: any;
  constructor(name: any) {
    this._name = name;
  }
} //end of class

export const getApiService = async (URL: any) => {
  let Conn = await CheckNet();
  if (!Conn) {
    throw 'No internet connection';
  } else {
    let Auth = {
      method: 'GET',
      url: URL,
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    };
    console.log('authOptions', Auth);
    return axios(Auth)
      .then(response => {
        console.log('axios response', response);
        return response.data;
      })
      .catch(error => {
        handleErrors(error);
      });
  }
};

function handleErrors(error: any) {
  console.log('Error====> :- ', error);
  if (!error.response) {
    // network error
    throw 'Please check your network connection.';
  } else {
    // http status code
    const code = error.response.status;
    // response data
    const response = error.response.data;
    console.log('code :- ' + code + ' response :- ', response);

    if (code >= 400 && code < 500) {
      throw 'Please Provide valid credential.';
    } else {
      //Server Errror > 500
      throw 'Oops server error occurred';
    }
  }
}
