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
      post: null,
      posts: null,
    }
  }

  render() {
    return (
      //<div>
      <div className="markdown-body">
        <Header />

        <Switch>

          <Route exact path="/" component={Home}/>

          <Route exact path="/posts" render={() => (
            <Posts posts={this.state.posts} testProp={100} />
          )}/>

          <Route exact path="/post/:postID" render={({ match }) => (
            <Post postID={match.params.postID} />
          )}/>

          <Route exact path="/category/:categoryID" render={({ match }) => (
            <Category categoryID={match.params.categoryID} />
          )}/>


        </Switch>
      </div>
    );
  }
}

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
      </ul>
    </nav>
  </header>
);

const Home = (props) => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
};

const Posts = ( props ) => {
  return (
    <div>
      <h2>Posts</h2>

      <ul>
        <FetchData gQuery={`SELECT A,B,C`}>
          {content => (
            content.map((item, i) => {
              return (
                <li key={item.id}>
                  <Link to={`/post/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              );
            })

          )}
        </FetchData>
      </ul>
    </div>
  )
};


const Post = ( props ) => {
  return (
    <div>
      <h2>Post</h2>

      <FetchData gQuery={`SELECT A,B,C,D,E WHERE B = '${props.postID}'`}>
        {content => (
          <div key={content[0].id}>
            <h3>{content[0]['title']}</h3>

            {content[0]['category'].split(",").map((item, i) => {
                return (
                  <li key={i}>
                    <Link to={`/category/${item}`}>
                      {item}
                    </Link>
                  </li>
                )
             })}

            <MarkdownIt source={content[0]['content']} />

          </div>
        )}
      </FetchData>
    </div>
  )
};

const Category = ( props ) => {
  return (
    <div>
      <h2>Category</h2>

      <ul>
        <FetchData gQuery={`SELECT A,B,C WHERE D contains '${props.categoryID}'`}>
          {content => (
            content.map((item, i) => {
              return (
                <li key={item.id}>
                  <Link to={`/post/${item.slug}`}>
                    {item.title}
                  </Link>
                </li>
              );
            })

          )}
        </FetchData>
      </ul>
    </div>
  )
};

export default App;
