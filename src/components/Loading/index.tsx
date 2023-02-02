import React from 'react'
import {Dialog, DialogContent, CircularProgress} from '@mui/material'

type MenuListButtonProps = {
  isLoading: boolean
}

const MenuListButton = ({isLoading}: MenuListButtonProps) => {
  return (
    <Dialog
      open={isLoading}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </Dialog>
  )
}

export default MenuListButton
