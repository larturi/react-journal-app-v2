/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-cycle */

import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { SidebarItem } from '.'

export const SideBar = ({ drawerWidth = 350 }) => {
  const { displayName } = useSelector((state) => state.auth)
  const { notes, showSidebar } = useSelector((state) => state.journal)

  return (
    <Box
      component="nav"
      className={showSidebar ? 'showSidebar' : 'hideSidebar'}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => (
            <SidebarItem key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

SideBar.propTypes = {
  drawerWidth: PropTypes.node.isRequired,
}
