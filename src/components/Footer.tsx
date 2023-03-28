import { type ReactElement } from 'react'

const today = new Date()

export default function Footer(): ReactElement {
  return (
    <footer>
      <p className='text-center mt-4 mb-2 text-sm dark:text-white'>@{today.getFullYear()} 世の中の個人開発を紹介するメディア</p>
    </footer>
  )
}
