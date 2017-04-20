//
// Last.Backend LLC CONFIDENTIAL
// __________________
//
// [2014] - [2017] Last.Backend LLC
// All Rights Reserved.
//
// NOTICE:  All information contained herein is, and remains
// the property of Last.Backend LLC and its suppliers,
// if any.  The intellectual and technical concepts contained
// herein are proprietary to Last.Backend LLC
// and its suppliers and may be covered by Russian Federation and Foreign Patents,
// patents in process, and are protected by trade secret or copyright law.
// Dissemination of this information or reproduction of this material
// is strictly forbidden unless prior written permission is obtained
// from Last.Backend LLC.
//

import * as api from "./../../api/spec";
import {SERVICE_SPEC_CREATE_FAILURE, SERVICE_SPEC_CREATE_REQUEST, SERVICE_SPEC_CREATE_SUCCESS} from "../../constants";

export const RequestAction = {
  type: SERVICE_SPEC_CREATE_REQUEST
};

export const SuccessAction = (payload) => ({
  type: SERVICE_SPEC_CREATE_SUCCESS,
  payload
});

export const FailureAction = (payload) => ({
  type: SERVICE_SPEC_CREATE_FAILURE,
  payload
});

export const CreateActionCreators = (service, spec) => (dispatch) => {

  dispatch(RequestAction);

  return new Promise((resolve, reject) => {
    api.create(service.meta.namespace, service.meta.name, spec)
      .then(() => {
        dispatch(SuccessAction(service));
        resolve(service)
      })
      .catch(error => {
        dispatch(FailureAction(error));
        reject(error);
      });
  });
};

export default {RequestAction, SuccessAction, FailureAction, CreateActionCreators}