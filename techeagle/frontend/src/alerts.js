import Swal from 'sweetalert2';

export const alertProductRemovedFromCart=()=>{
  Swal.fire({
      icon: 'success',
      title: 'Removed!',
      text: 'Product is removed from the Cart, !',
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
export const alertProductAlreadyExists=()=>{
  Swal.fire({
      icon: 'warning',
      title: 'Exists!',
      text: 'Product is Already exists in Cart, !',
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

export const alertAddedToCart=()=>{
  Swal.fire({
      icon: 'success',
      title: 'Added To Cart!',
      text: 'Product added to , !',
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

export const alertProductDeleted=()=>{
  Swal.fire({
      icon: 'success',
      title: 'deleted!',
      text: 'Product Deleted, !',
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

export const alertProductEdited=()=>{
  Swal.fire({
      icon: 'success',
      title: 'Edited!',
      text: 'Product Edited, !',
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

export const alertProductAdded=()=>{
  Swal.fire({
      icon: 'success',
      title: 'Placed!',
      text: 'Product Added, !',
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

export const alertOrderPlaced=()=>{
  Swal.fire({
      icon: 'success',
      title: 'Placed!',
      text: 'Order Placed Successfully, !',
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
export const alertEnterValidEmailOrPhone=()=>{
  Swal.fire({
      icon: 'warning',
      title: 'warning',
      text: 'Please Enter Valid Email and Phone',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/path-to-your-blurred-background-image.jpg")
        left top
        no-repeat
      `,
    });
}

export const alertFillAllInputField=()=>{
  Swal.fire({
      icon: 'warning',
      title: 'warning',
      text: 'Please fill in all required fields',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/path-to-your-blurred-background-image.jpg")
        left top
        no-repeat
      `,
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