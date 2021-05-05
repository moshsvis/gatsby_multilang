import styled from 'styled-components'
import Modal from 'react-bootstrap/Modal'

const StyledModal = styled(Modal)`
// Extra small devices (portrait phones, less than 576px)
// No media query for xs since this is the default in Bootstrap
.modal-content{
    background-color: transparent;
}

.modal-header{
    border-bottom: 0;
    padding: 0;
    margin-top: -10rem;
    background-color: transparent;
}

.close{
    color: white;
    font-size: 3em;
}

.modal-backdrop.show {
    opacity: 0.7 !important;
}

// Small devices (landscape phones, 576px and up, col-sm)
@media (min-width: 576px) {
    .modal-header{
        margin-top: -8rem;
    }

    .close{
        position: relative;
        top: 50vh; left: 60px;
    }
}
// Medium devices (tablets, 768px and up, col-md)
@media (min-width: 768px) {

}
// Large devices (desktops, 992px and up, col-lg)
@media (min-width: 992px) {
    .modal-xl {
    max-width: 65vw;
}

    .close{
    position: static !important;

    }
}
// Extra large devices (large desktops, 1200px and up, col-xl)
@media (min-width: 1200px) {

}
`

export default StyledModal