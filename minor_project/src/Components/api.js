import axios from "axios";

export async function AxiosRequest(url, method, header, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: header,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        method: method,
        headers: header,
        data: {},
        timeout: 1000,
      });
}

const PostLoginData = (data) => {
    const header = {
      "Content-Type": "application/json",
    };
    return AxiosRequest(
      "http://localhost:3000/emerContDetails",
      "POST",
      header,
      data
    );
  };

  export {PostLoginData}