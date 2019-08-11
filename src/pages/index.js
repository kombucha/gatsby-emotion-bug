import React from "react"
import { css, CacheProvider } from "@emotion/core"
import createCache from "@emotion/cache"

// This one will work
// const myCache = createCache({ key: "stl" })

const MyWrapper = ({ children, key = "stl" }) => {
  // This one won't work (if you comment out the other one)
  const myCache = createCache({ key })
  return <CacheProvider value={myCache}>{children}</CacheProvider>
}

export default () => (
  <MyWrapper>
    <div
      css={css`
        color: green;
      `}
    >
      Hello world!
    </div>
  </MyWrapper>
)
