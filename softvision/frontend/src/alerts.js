import Swal from 'sweetalert2';

export const alertdeleteSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Deletion Successful!',
    text: 'You have successfully Deleted User.',
  });
};

export const alertupdateSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Updation Successful!',
    text: 'You have successfully updated User.',
  });
};
export const alertCreateUserSuccess=()=>{
  Swal.fire({
      icon: 'success',
      title: 'User Created!',
      text: 'User is created !',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/path-to-your-blurred-background-image.jpg")
        left top
        no-repeat
      `,
      showConfirmButton: false,
      timer: 2000, 
    });
}

export const alertErrorcreateUser=(error)=>{
  Swal.fire({
      icon: 'error',
      title: 'User Creation Failed',
      text: `Invalid ${error}`,
      backdrop: `
        rgba(0,0,123,0.4)
        url("/path-to-your-blurred-background-image.jpg")
        left top
        no-repeat
      `,
    });
}
export const alertloginSuccess=()=>{
    Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome, !',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/path-to-your-blurred-background-image.jpg")
          left top
          no-repeat
        `,
        showConfirmButton: false,
        timer: 2000, // Auto-dismiss alert after 2 seconds
      });
}


export const alertinvalidloginCredentials=()=>{
    Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid username or password',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/path-to-your-blurred-background-image.jpg")
          left top
          no-repeat
        `,
      });
}

export const alertsomethingWentWrong = () => {
    Swal.fire({
      icon: 'error',
      title: 'Something Went Wrong',
      text: 'Please try again later.',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/path-to-your-blurred-background-image.jpg")
        left top
        no-repeat
      `,
    });
};

export const alertemailAlreadyExists = () => {
    Swal.fire({
      icon: 'error',
      title: 'Email Already Exists',
      text: 'Please try another email address.',
    });
};

export const alertsignupSuccess = () => {
    Swal.fire({
      icon: 'success',
      title: 'Signup Successful!',
      text: 'You have successfully signed up for our service.',
    });
  };