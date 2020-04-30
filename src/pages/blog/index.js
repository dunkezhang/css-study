import React from 'react'
import Header from '../../components/header'
import Profile from '../../components/profile-card'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BlogContent from './blogContent'
import BlogBriefItem from './blogBriefItem'
import blogs from '../../asset/markdown'
import './index.scss'

export default () => {
  let { url, path } = useRouteMatch()

  return (
    <div className="blog">
      <Header></Header>
      <div className="blog-container">
        <Switch>
          <Route exact path={path}>
            <div className="blog-slider">
              <Profile></Profile>
            </div>
            <div className="blog-main">
              {blogs.map(blog => (
                <BlogBriefItem {...blog} url={url} key={blog.title}></BlogBriefItem>
              ))}
            </div>
          </Route>
          <Route path={`${path}/:title`}>
            <BlogContent />
          </Route>
        </Switch>
      </div>
    </div>
  )
}