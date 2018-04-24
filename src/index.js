import React from "react";
import { render } from "react-dom";

import { fetchByLanguage } from "./utils/api";
import LanguagesList from "./LanguagesList";
import RepoInfo from "./RepoInfo";
import Loader from "./Loader";

class App extends React.Component {
  state = {
    languageData: {
      javascript: undefined,
      ruby: undefined,
      python: undefined,
      typescript: undefined
    },
    loading: true
  };

  static defaultProps = {
    languages: ["javascript", "ruby", "python", "typescript"]
  };

  componentDidMount() {
    const initialLanguage = this.props.languages[0];
    fetchByLanguage(this.props.languages[0]).then(repos => {
      this.setState({
        currentLanguage: initialLanguage,
        languageData: {
          [initialLanguage]: repos
        },
        loading: false
      });
    });
  }

  handleClick = lang => {
    if (this.state.languageData[lang] === undefined) {
      console.log(this.state.languageData);
      this.setState(
        {
          loading: true
        },
        () => {
          fetchByLanguage(lang).then(repos => {
            this.setState(prevState => ({
              currentLanguage: lang,
              languageData: {
                ...prevState.languageData,
                [lang]: repos
              },
              loading: false
            }));
          });
        }
      );
    } else {
      this.setState({
        currentLanguage: lang
      });
    }
  };

  showAllRepos = reposArray => reposArray.map(repo => <RepoInfo repo={repo} />);

  render() {
    const { loading, currentLanguage } = this.state;
    const repos = this.state.languageData[currentLanguage];

    return (
      <div>
        <LanguagesList
          handleClick={this.handleClick}
          languages={this.props.languages}
        />
        {loading ? <Loader /> : this.showAllRepos(repos)}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
