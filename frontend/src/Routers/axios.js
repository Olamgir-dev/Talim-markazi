import axios from "axios";
import Swal from "sweetalert2"

function PostData(res) {
  new Promise((resolve, reject) => {
    try {
      const data = axios
        .post(`http://localhost:5001/${res.path}`, res.data)
        .then((res) => {

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        })
        .catch((err) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'warning',
            title: err.response.data.msg
          })
          // alert(err.response.data.msg);
        })
      resolve({
        status: true,
        error: false,
        data: data,
      })
    } catch (error) {
      reject({
        status: false,
        error: true,
      })
    }
  })
}

function GetData(res) {
  //   new Promise((resolve, reject) => {
  //     try {
  //       const { data } = axios
  //         .post(`http://localhost:5001/${res.path}`, res.data)
  //         .then((res) => {
  //           console.log(res.data);
  //         })
  //         .catch((err) => {
  //           alert(err.response.data.msg);
  //         })
  //       resolve({
  //         status: true,
  //         error: false,
  //         data: data,
  //       })
  //     } catch (error) {
  //       reject({
  //         status: false,
  //         error: true,
  //       })
  //     }
  // })
}

export { PostData, GetData };