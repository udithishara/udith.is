import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import FetchData from './Components/FetchData';
import MarkdownIt from './Components/react-markdown-it';
import { Helmet } from 'react-helmet';
import ContentLoader from 'react-content-loader';
import './css/github-markdown.css';
import './css/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: null,
      post: null,
      tags: null
    }
  }

  handleData = (data, saveState) => {
    this.setState({
      [saveState]: data
    });
  }

  render() {
    return [
      <div key="markdown-body" className="markdown-body">
        <Header key="Header" />


        <Switch>

          <Route exact path="/" component={Home}/>

          <Route exact path="/posts" render={() => (
            <Posts
              handleData={this.handleData}
              Posts={this.state.posts}
            />
          )}/>

          <Route exact path="/post/:postID" render={({ match }) => (
            <Post
              handleData={this.handleData}
              Post={this.state.post}
              postID={match.params.postID}
            />
          )}/>

          <Route exact path="/tag/:tagID" render={({ match }) => (
            <Tags
              handleData={this.handleData}
              Tags={this.state.tags}
              tagID={match.params.tagID}
            />
          )}/>

          <Route exact path="/Tombstones" component={Tombstones} />

          <Route component={NoMatch} />

        </Switch>
      </div>,
      <Footer key="Footer" />
    ];
  }
}

const Posts = ({ Posts, handleData }) => {
  if (Posts === null) {
    return (
      <FetchData
        key="Posts"
        gQuery={`SELECT A,B,C,D,F,G,H WHERE E = 1`}
        onFetch={handleData}
        saveState={`posts`}
        tombstoneType={`list`} />
    )
  } else {
    return [
      <div key="PostsList">
        {
          Posts.map((item, i) => {
            return (
              <article className="post" key={item.id}>
                <h1 className="post__title">
                  <Link className="post__url" to={`/post/${item.slug}`}>
                    {item.title}
                  </Link>
                </h1>
                <p className="post__meta">
                  Published: <PublishedDate timestamp={item.publishedDate} />
                </p>

                <p className="post__digest">
                  {item.digest}
                  <Link className="post__more" to={`/post/${item.slug}`} title={item.title}>»</Link>
                </p>

              </article>
            );
          })
        }
      </div>,
      <Helmet key="postsListTitle">
        <title>Posts</title>
      </Helmet>
    ]
  }
}

const Post = ({ Post, handleData, postID}) => {
  if (Post == null || Post[0]['slug'] !== postID) {
    return [
      <FetchData
        key="Post"
        gQuery={`SELECT A,B,C,D,E,F,H WHERE B = '${postID}'`}
        onFetch={handleData}
        saveState={`post`}
        tombstoneType={`single`} />
    ]
  } else {
    return [
      <article className="post" key={Post[0].id}>
        <h1 className="post__title">
          {Post[0]['title']}
        </h1>
        <p className="post__meta">
          Published: <PublishedDate timestamp={Post[0].publishedDate} />
        </p>

        <div className="post_content">
          <MarkdownIt source={Post[0]['content']} />
        </div>
      </article>,
      <Helmet key="postTitle">
        <title>{Post[0]['title']}</title>
      </Helmet>
    ]
  }
}

const Tags = ({ Tags, handleData, tagID }) => {
  if (Tags == null) {
    return [
      <FetchData
        key="Tags"
        gQuery={`SELECT A,B,C WHERE D contains '${tagID}'`}
        onFetch={handleData}
        saveState={`tags`} />
    ]
  } else {
    return [
      <div>
        <h2>Tags</h2>

        <ul>
          {
            Tags.map((tag, i) => {
              return (
                <li key={tag.id}>
                  <Link to={`/post/${tag.slug}`}>
                    {tag.title}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>,
      <Helmet>
        <title>Tags</title>
      </Helmet>
    ]
  }
}

const Header = () => (
  <header>
    <nav>
      <ul className="primary-nav">
        <li><Link to='/'>Theme Name</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/post/creating-a-new-theme'>creating-a-new-theme</Link></li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    Copyright © {new Date().getFullYear()} Udith Ishara
  </footer>
);

const Home = () => {
  return [
    <div key="Home">
      <h2>Home</h2>
    </div>,
    <Helmet key="HomeTitle">
      <title>Home</title>
    </Helmet>
  ]
};

const NoMatch = ({ location }) => [
  <div key="Error">
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>,
  <Helmet key="ErrorTitle">
    <title>404</title>
  </Helmet>
]

const PublishedDate = ({ timestamp }) => {
  let publishedDate = new Date(timestamp * 1000);
  return (
    <span>
          {new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(publishedDate)
          }
    </span>
  )
}

const Tombstones = () => {
  return [
    <ContentLoader height={220}>
      <rect y="5" rx="1" ry="1" style={{ width: '40%', height: '13' }} preserveAspectRatio="none" />
      <rect y="25" rx="1" ry="1" style={{ width: '21%', height: '7' }} preserveAspectRatio="none" />
      <rect y="49" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
      <rect y="65" rx="1" ry="1" style={{ width: '30%', height: '10' }} preserveAspectRatio="none" />
      <rect x={'32%'} y="65" rx="1" ry="1" style={{ width: '68%', height: '10' }} preserveAspectRatio="none" />
      <rect y="81" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
      <rect y="96" rx="1" ry="1" style={{ width: '80%', height: '10' }} preserveAspectRatio="none" />
      <rect x={'82%'} y="96" rx="1" ry="1" style={{ width: '18%', height: '10' }} preserveAspectRatio="none" />

      <rect y="120" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
      <rect y="135" rx="1" ry="1" style={{ width: '70%', height: '10' }} preserveAspectRatio="none" />

      <rect y="160" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
      <rect y="175" rx="1" ry="1" style={{ width: '50%', height: '10' }} preserveAspectRatio="none" />
      <rect x={'52%'} y="175" rx="1" ry="1" style={{ width: '48%', height: '10' }} preserveAspectRatio="none" />
      <rect y="190" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
      <rect y="205" rx="1" ry="1" style={{ width: '90%', height: '10' }} preserveAspectRatio="none" />
    </ContentLoader>
  ]
}

export default App;
