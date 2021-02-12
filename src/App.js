import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const languages = [
      {name: "JavaScript", url: "https://github.com/enokcollective/javascript-koans"},
      {name: "SQL", url: "https://github.com/enokcollective/sql-koans"},
      {name: "Python", url: "https://github.com/enokcollective/python-koans"},
      {name: "Java", url: "https://github.com/enokcollective/java-koans"},
      {name: "Bash", url: "https://github.com/enokcollective/bash-koans"},
      {name: "C#", url: "https://github.com/enokcollective/c-sharp-koans"},
      {name: "C++", url: "https://github.com/enokcollective/cpp-koans"},
      {name: "C", url: "https://github.com/enokcollective/c-koans"},
      {name: "Go", url: "https://github.com/enokcollective/go-koans"},
      {name: "Kotlin", url: "https://github.com/enokcollective/kotlin-koans"},
      {name: "Ruby", url: "https://github.com/enokcollective/ruby-koans"},
      {name: "Swift", url: "https://github.com/enokcollective/swift-koans"},
      {name: "R", url: "https://github.com/enokcollective/r-koans"},
      {name: "Rust", url: "https://github.com/enokcollective/rust-koans"},
      {name: "Objective-C", url: "https://github.com/enokcollective/objective-c-koans"},
      {name: "Scala", url: "https://github.com/enokcollective/scala-koans"},
      {name: "Haskell", url: "https://github.com/enokcollective/haskell-koans"},
      {name: "Regex", url: "https://github.com/enokcollective/regex-koans"},
      {name: "Solidity", url: "https://github.com/enokcollective/solidity-koans"},      
      {name: "Clojure", url: "https://github.com/enokcollective/clojure-koans"},
      {name: "Lisp", url: "https://github.com/enokcollective/lisp-koans"},
      {name: "Elixir", url: "https://github.com/enokcollective/elixir-koans"},
      {name: "Erlang", url: "https://github.com/enokcollective/erlang-koans"},
      {name: "F#", url: "https://github.com/enokcollective/f-sharp-koans"},
      {name: "CoffeeScript", url: "https://github.com/enokcollective/coffeescript-koans"},
      {name: "Dart", url: "https://github.com/enokcollective/dart-koans"},
      {name: "SmallTalk", url: "https://github.com/enokcollective/smalltalk-koans"},
      {name: "Lua", url: "https://github.com/enokcollective/lua-koans"},
      {name: "Groovy", url: "https://github.com/enokcollective/groovy-koans"},
    ];

    return (
      <div className="app">
        <header>
          <div className="logo-group">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="name">Koans</h1>
          </div>

          <p className="intro">A collection of Koans for {languages.length} different programming languages.</p>
        </header>

        <section className="languages">
          {languages.map((language, index) => <a key={index} href={language.url} className="language" target="_blank" rel="noopener noreferrer">{language.name}</a>)}
        </section>
      </div>
    );
  }
}

export default App;
