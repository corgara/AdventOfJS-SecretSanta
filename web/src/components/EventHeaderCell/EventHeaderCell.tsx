import type {
  FindEventHeaderQuery,
  FindEventHeaderQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Icon from '../Icon/Icon'
import Button from '../Button/Button'
import { prettifyDate } from 'src/helpers/DateHelpers'

export const QUERY = gql`
  query FindEventHeaderQuery($id: String!) {
    event(id: $id) {
      id
      name
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEventHeaderQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  event,
}: CellSuccessProps<FindEventHeaderQuery, FindEventHeaderQueryVariables>) => {
  return (
    <>
      <h3 className="text-4x1 font-handwriting uppercase text-white">
        {prettifyDate(event.date)}
      </h3>
      <div className="flex items-center gap-3">
        <h1 className="m-0 flex-1 p-0 font-condensed text-[166px] uppercase leading-[0.8] text-white">
          {event.name}
        </h1>
      </div>
      <button className="text-black dark:text-white">
        <Icon id="edit" />
      </button>
      <Button size="small" className="bg-supernova text-black">
        Hello
      </Button>
    </>
  )
}
