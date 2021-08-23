import React from 'react'

const BlogContext = React.createContext()

const BlogProvider = props => {
  return <BlogContext.Provider {...props} value={5} />
}

export {BlogContext, BlogProvider}
