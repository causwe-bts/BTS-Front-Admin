import axios from "../../node_modules/axios/index";

export const signin = (useremail, userpassword) => {
  return new Promise((resolve, reject) => {
    axios({
      method:"POST",
      url:"/api/store/signin",
      data:{
        username:useremail,
        password:userpassword
      }
    }).then((res) => {
      resolve(res.data.body.token)
    })
    .catch((err) => {
      reject(err);
    })
  });
};
