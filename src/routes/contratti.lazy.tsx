import { createLazyFileRoute } from '@tanstack/react-router'
import NavHeader from '../HeaderNav'

export const Route = createLazyFileRoute('/contratti')({
  component: Contract,
})

function Contract() {
  return (
    <>
      <NavHeader />
    </>
  )
}

export default Contract
