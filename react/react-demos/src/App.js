import React, { Component } from 'react';
import './App.css';

class RepoList extends Component {
  state = {
    loading: true,
    error: null,
    data: null
  }
  componentDidMount () {
    this.props.promise.then(data => data.json())
      .then(data => {
        
        this.setState({
          loading:false,
          data: data
        })
      })
      .catch(error => {
        this.setState({
          loading:false,
          error: '请求失败'
        })
      })
  }
  render () {
    if (this.state.loading) {
      return <span>Loading...</span>;
    } else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    } else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo, index) {
        return (
          <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }

  }
}

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <RepoList promise={fetch('https://api.github.com/search/repositories?q=javascript&sort=stars')} />
      </div>
    );
  }
}

export default App;
