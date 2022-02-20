import * as axios from "axios";

export default class Api {
  constructor() {
    this.client = null;
    this.api_url = "https://5f6d939160cf97001641b049.mockapi.io/tkn/";
  }

  init = () => {
    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getHotelList = (params) => {
    return this.init().get("/hotels", { params: params });
  };
  getHotelDetails = (params) => {
    return this.init().get("/hotel-details", { params: params });
  };
}
