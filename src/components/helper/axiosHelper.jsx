import axios from "axios";

const apiEnd = "https://email-server-portfolio.herokuapp.com/api/v1/email";

export const getEmail = async (formObj) => {
  try {
    const { data } = await axios.post(apiEnd, formObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};