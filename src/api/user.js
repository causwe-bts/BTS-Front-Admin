import Cookies from 'universal-cookie';
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
      var cookies = new Cookies();
      return cookies.set('auth', res.data.body.token);
    })
    .catch((err) => {
      reject(err);
    })
  });
};

export const token = () => {
  var cookies = new Cookies();
  return cookies.get('auth');
};
