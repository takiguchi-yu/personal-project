import { ReactElement } from 'react'

export default function Header(): ReactElement {
  return (
    <header className="w-full p-2">
      <div className="container mx-auto">
        <nav className="flex items-center gap-3 text-base">
          <a href="/">
            <h2 className="font-semibold tracking-wide p-2 text-lg dark:text-white">
              世の中の個人開発を紹介するメディア
            </h2>
          </a>
        </nav>
      </div>
    </header >
  )
}
