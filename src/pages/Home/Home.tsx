import { Header } from '@components/Header'
import { TaskSummary } from '@components/TaskSummary'

import { TaskSummaryContainer } from './Home.styles'

export const Home = () => {
  return (
    <>
      <Header />

      <TaskSummaryContainer>
        <TaskSummary />
      </TaskSummaryContainer>
    </>
  )
}
