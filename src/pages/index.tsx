import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main> 
      <img      
        src={'/gh_banner_sm.png'}
      />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>M² Consulting</title>
