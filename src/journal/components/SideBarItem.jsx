/* eslint-disable react/forbid-prop-types */
import { useDispatch } from 'react-redux'
import { TurnedInNot } from '@mui/icons-material'
import PropTypes from 'prop-types'
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SidebarItem = ({ title, body, id, date, imageUrls = [] }) => {
  const newTitle = useMemo(() => {
    return title.length > 17 ? `${title.substring(0, 17)}...` : title
  }, [title])

  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }))
  }

  return (
    <ListItem key={id} disablePadding onClick={() => onClickNote()}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={`${newTitle}`} sx={{ width: '100%' }} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  imageUrls: PropTypes.array,
}
