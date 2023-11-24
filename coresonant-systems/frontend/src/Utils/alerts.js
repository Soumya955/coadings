import Swal from 'sweetalert2';

export const alertTaskAddedSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Task Added!',
    text: 'New Task Added !',
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
export const alertdeleteSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Deletion Successful!',
    text: 'You have successfully Deleted Task.',
    timer: 1000, 
  });
};

export const alertupdateSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Updation Successful!',
    text: 'You have successfully updated Task.',
    timer: 1000, 
  });
};
