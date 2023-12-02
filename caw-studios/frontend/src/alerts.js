import Swal from 'sweetalert2';

export const alertOrderAddedSuccess=()=>{
  Swal.fire({
      icon: 'success',
      title: 'Order Added!',
      text: 'Order created !',
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
