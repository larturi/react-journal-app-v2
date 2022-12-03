import PropTypes from 'prop-types'
import { Box } from '@mui/system'

// const drawerWidth = 240

export default function JournalLayout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}

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
