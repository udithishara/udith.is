import React, { Component, Fragment } from 'react';
import Markdown from 'markdown-it';

// https://stackoverflow.com/a/31880193/5485114
//https://github.com/sunflowerdeath/react-markdown-it
class MarkdownIt extends Component {
  static defaultProps = {
    container: 'div',
    options: {
      html: true,
      linkify: true,
      typographer: true,
      langPrefix:   'code-',
    }
  }

  render() {
    // let Container = this.props.container;
    return <Fragment>{this.content()}</Fragment>
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextProps.options !== this.props.options) {
      this.md = new Markdown(nextProps.options)
    }
  }

  content() {
    if (this.props.source) {
      return <span dangerouslySetInnerHTML={{__html: this.renderMarkdown(this.props.source)}}/>
    } else {
      return React.Children.map(this.props.children, child => {
        if (typeof child === 'string') {
          return <span dangerouslySetInnerHTML={{__html: this.renderMarkdown(child)}}/>
        } else {
          return child
        }
      })
    }
  }

  renderMarkdown(source) {
    if (!this.md) {
      this.md = new Markdown(this.props.options)
    }
    return this.md.render(source)
  }
}

export default MarkdownIt;