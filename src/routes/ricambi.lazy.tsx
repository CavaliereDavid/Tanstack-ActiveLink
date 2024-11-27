import { createLazyFileRoute } from '@tanstack/react-router'
import NavHeader from '../HeaderNav'

export const Route = createLazyFileRoute('/ricambi')({
  component: Spare,
})

function Spare() {
  return (
    <>
      <NavHeader />
    </>
  )
}

export default Spare
