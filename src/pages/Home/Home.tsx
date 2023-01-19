import { Header } from '@components/Header'
import { TaskList } from '@components/TaskList'
import { TaskSummary } from '@components/TaskSummary'

import { TaskListContainer, TaskSummaryContainer } from './Home.styles'

export const Home = () => {
  return (
    <>
      <Header />

      <TaskSummaryContainer>
        <TaskSummary />
      </TaskSummaryContainer>

      <TaskListContainer>
        <TaskList />
      </TaskListContainer>
    </>
  )
}
