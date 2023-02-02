import {Snackbar} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import * as Actions from '../../store/actions'

function Alert(props) {
  return <Alert elevation={6} variant="filled" {...props} />
}
function NotifySnackbar() {
  const dispatch = useDispatch()
  const {successSnackbarMessage, successSnackbarOpen, snackbarSeverity} =
    useSelector(state => state.snackbar)

  function handleClose() {
    dispatch(Actions.clearSnackbar())
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={successSnackbarOpen}
      autoHideDuration={1500}
      onClose={handleClose}
      aria-describedby="client-snackbar">
      <Alert severity={snackbarSeverity}>{successSnackbarMessage}</Alert>
    </Snackbar>
  )
}

export default NotifySnackbar
