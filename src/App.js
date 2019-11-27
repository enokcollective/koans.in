import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const languages = [
      {name: "Ruby", url: "https://github.com/edgecase/ruby_koans/"},
      {name: "JavaScript", url: "https://github.com/mrdavidlaing/javascript-koans"},
      {name: "Python", url: "https://github.com/gregmalcolm/python_koans"},
      {name: "Java", url: "https://github.com/matyb/java-koans"},
      {name: "Go", url: "https://github.com/cdarwin/go-koans"},
      {name: "Clojure", url: "https://github.com/functional-koans/clojure-koans"},
      {name: "Kotlin", url: "https://github.com/Kotlin/kotlin-koans"},
      {name: "Lisp", url: "https://github.com/google/lisp-koans"},
      {name: "Haskell", url: "https://github.com/HaskVan/HaskellKoans"},
      {name: "Elixir", url: "https://github.com/elixirkoans/elixir-koans"},
      {name: "Erlang", url: "https://github.com/patrickgombert/erlang-koans"},
      {name: "Scala", url: "https://github.com/rubbish/scala-koans"},
      {name: "F#", url: "https://github.com/ChrisMarinos/FSharpKoans"},
      {name: "Bash", url: "https://github.com/marcinbunsch/bash_koans"},
      {name: "CoffeeScript", url: "https://github.com/sleepyfox/coffeescript-koans"},
      {name: "Dart", url: "https://github.com/butlermatt/dart_koans"},
      {name: "C", url: "https://github.com/c-koans/c_koans"},
      {name: "Objective-C", url: "https://github.com/joecannatti/Objective-C-Koans"},
      {name: "SmallTalk", url: "https://github.com/sl4m/gnu_smalltalk_koans"},
      {name: "Rust", url: "https://github.com/crazymykl/rust-koans"},
      {name: "Swift", url: "https://github.com/mokagio/Swift-Koans"},
      {name: "R", url: "https://github.com/DASpringate/Rkoans"},
      {name: "Lua", url: "https://github.com/kikito/lua_missions"},
      {name: "Groovy", url: "https://github.com/nadavc/groovykoans"},
      {name: ".NET", url: "https://github.com/CoryFoy/DotNetKoans"},
      {name: "Regex", url: "https://github.com/frenchroasted/RegexKoans"}
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
