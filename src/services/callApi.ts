import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const callApi = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use(
    (res) => res,
    (err) => Promise.reject(err),
  );

  axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      //تمام ارور های یک درخواست مشخص که هربار یک چیز مشخص و جدا هست
      const originalConfig = err.config;
      //اینو میزاری که توی لوپ نیوفته
      let originalConfig_ritry;
      console.log(originalConfig);

      if (err.response.status === 401 && !!originalConfig_ritry) {
        originalConfig_ritry = true;
        console.log("chom");
        try {
          const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
            withCredentials: true,
          });

          if (data) return axiosInstance(originalConfig); //یبار دیگه نسبت به کانفیگ و اینکه از کدوم درخواست ارور داشته رو بهش پاس میدی که دوباره اجرا بشه درخواست.
        } catch (err) {
          return Promise.reject(err);
        }
      }

      return Promise.reject(err);
    },
  );

  return axiosInstance;
};

export default callApi;
