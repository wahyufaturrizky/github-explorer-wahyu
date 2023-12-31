import axios from "axios";

export async function client(
  endpoint: string | string[],
  {
    data,
    method = "GET",
    params,
    headers: customHeaders,
    ...customConfig
  }: any = {}
) {
  const apiURL = process.env.REACT_APP_URL;

  const config = {
    url: `${apiURL}${endpoint}`,
    method: method || (data ? "POST" : "GET"),
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  if (params) {
    config.params = params;
    config.method = "GET";
  }

  if (data) {
    config.data = data;
  }

  return axios(config)
    .then(async (response: any) => {
      return response;
    })
    .catch((e: any) => {
      console.log("Error Client", e.response);
    });
}
