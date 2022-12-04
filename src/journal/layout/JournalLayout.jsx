import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import NavBar from '../components/NavBar'

const drawerWidth = 240

export default function JournalLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  )
}

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
