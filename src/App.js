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
      <Header key="Header" />,
        <div key="markdown-body" className="markdown-body">


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
        gQuery={`SELECT A,B,C,D,F,G WHERE E = 1`}
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
                  Published: {Date()}
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
        gQuery={`SELECT A,B,C,D,E,F WHERE B = '${postID}'`}
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
          Published: {Date()}
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
        <li><Link to='/'><span role="img" aria-label="laptop">💻</span> Theme Name</Link></li>
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

const Tombstones = () => {
  return [
    <ContentLoader height={200}>
      {/* Pure SVG */}
      <rect x="40" y="5" rx="1" ry="1" width="300" height="13" />
      <rect x="40" y="22" rx="1" ry="1" width="100" height="5" />
      <rect x="40" y="41" rx="1" ry="1" width="300" height="9" />
      <rect x="40" y="54" rx="1" ry="1" width="300" height="9" />
      <rect x="40" y="66" rx="1" ry="1" width="300" height="9" />
      <rect x="40" y="78" rx="1" ry="1" width="280" height="9" />

      <rect x="40" y="98" rx="1" ry="1" width="300" height="9" />
      <rect x="40" y="110" rx="1" ry="1" width="180" height="9" />

      <rect x="40" y="130" rx="1" ry="1" width="300" height="9" />
      <rect x="40" y="142" rx="1" ry="1" width="150" height="9" />
      <rect x="195" y="142" rx="1" ry="1" width="145" height="9" />
      <rect x="40" y="154" rx="1" ry="1" width="300" height="9" />
      <rect x="40" y="166" rx="1" ry="1" width="300" height="9" />
      <rect x="40" y="178" rx="1" ry="1" width="230" height="9" />
    </ContentLoader>
  ]
}

export default App;
