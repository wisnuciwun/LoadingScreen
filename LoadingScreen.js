import swal from 'sweetalert'

export function LoadingScreen1() {

const loading = (`<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>`);

swal({
// swal fire modals loading
text: "Please wait..",
buttons: false,
closeOnClickOutside: false,
closeOnEsc: false,
content: {
        element: 'p',
        attributes: {
          innerHTML: `${loading}`,
        },
      }
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