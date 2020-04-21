const baseUrl = "https://5e97372677f54300163394d5.mockapi.io/api/v1/users";

/* getUsersList code here */

export const getUsersList = () => {
  return fetch(baseUrl).then(function (response) {
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

export const updateUser = (id, updatedUser) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedUser),
  })
};

/* deleteUser code here */

export const deleteUser = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  })
};
