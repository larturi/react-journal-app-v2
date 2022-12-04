import { JournalLayout } from '../layout'
import { NoteView } from '../views'

const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}

export default JournalPage
