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
    return title.length > 30 ? `${title.substring(0, 30)}...` : title
  }, [title])

  const newBody = useMemo(() => {
    return body.length > 75 ? `${body.substring(0, 75)}...` : body
  }, [body])

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
          <ListItemText secondary={newBody} />
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
