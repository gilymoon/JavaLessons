const baseUrl = "https://5e97372677f54300163394d5.mockapi.io/api/v1/USERS";

/* getUsersList code here */

export const getUsersList = () => {
  return fetch(baseUrl, {
    method: "GET",
  }).then(function (response) {
    return response.json();
  });
};

/* getUserById code here */

export const getUserById = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "GET",
  }).then(function (response) {
    return response.json();
  });
};

/* createUser code here */

export const createUser = (newUser) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newUser),
  });
};

/* updateUser code here */

export const updateUser = (updatedUser) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedUser),
  }).then(function (response) {
    return response.json();
  });
};

/* deleteUser code here */

export const deleteUser = () => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then(function (response) {
    return response.json();
  });
};
