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

import React from "react";

const NotFound = () =>
  <div className="text-center">
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
    <a href="/" className="btn btn-primary btn-lg">
      GO TO HOME
    </a>
  </div>;

export default NotFound;