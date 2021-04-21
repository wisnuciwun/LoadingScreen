import swal from 'sweetalert'

export function LoadingHandling1() {
// swal fire modals loading
Swal.fire({
  title: "Please wait..",
  buttons: false,
  showConfirmButton: false,
  showCloseButton: false,
  html: '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>',
  allowOutsideClick: false,
  allowEscapeKey: false
  })
}

export function LoadingHandling2() {
// full screen loading
Swal.fire({
    title: 'Please wait',
    allowEscapeKey: false,
    allowOutsideClick: false,
    showConfirmButton: false,
    html: '<i class="fa fa-spinner fa-pulse fa-3x fa-fw loading-text-color"></i>',
    background: "transparent",
    customClass:{
      title: "loading-text-color"
    },
    backdrop: "rgba(0,0,0,0.6)"
  })
}
