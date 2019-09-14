import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true, //
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repoRes, issuesRes] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open', // item status
          per_page: 10, // item per page
        },
      }),
    ]);

    this.setState({
      repository: repoRes.data,
      issues: issuesRes.data,
      loading: false,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;
    return <div>Repo</div>;
  }
}
