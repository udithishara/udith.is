import React, { Component } from 'react';
import './css/App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import FetchData from './Components/FetchData';
import MarkdownIt from './Components/react-markdown-it';
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
    return (
      <div className="markdown-body">
        <Header />

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

        </Switch>
      </div>
    );
  }
}

const Posts = ({ Posts, handleData }) => {
  if (Posts == null) {
    return [
      <FetchData
        key="Posts"
        gQuery={`SELECT A,B,C WHERE E = 1`}
        onFetch={handleData}
        saveState={`posts`} />
    ]
  } else {
    return <pre key="Posts">{JSON.stringify(Posts, null, 2)}</pre>
  }
}

const Post = ({ Post, handleData, postID}) => {
  if (Post == null) {
    return [
      <FetchData
        key="Post"
        gQuery={`SELECT A,B,C,D,E,F WHERE B = '${postID}'`}
        onFetch={handleData}
        saveState={`post`} />
    ]
  } else {
    return <pre key="Post">{JSON.stringify(Post, null, 2)}</pre>
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
    return <pre key="Tags">{JSON.stringify(Tags, null, 2)}</pre>
  }
}

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/tag/cat2'>Tag</Link></li>
        <li><Link to='/post/post-slug-one'>post-slug-one</Link></li>
        <li><Link to='/post/post-slug-two'>post-slug-two</Link></li>
      </ul>
    </nav>
  </header>
);

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
};


export default App;
