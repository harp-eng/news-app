import React, { Component } from "react";
import NewsItem from "../components/NewsItem";
import { fetchTopHeadlines } from "../services/newsService";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      pageSize: 12,
      totalResults: 0,
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await fetchTopHeadlines(
        this.state.page,
        this.state.pageSize,
      );
      this.setState({
        articles: data.articles || [],
        totalResults: data.totalResults || 0,
      });
    } catch (error) {
      this.setState({
        error: error.message || "Unable to load news articles.",
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  changePage = (direction) => {
    this.setState(
      (prevState) => ({
        page: Math.max(1, prevState.page + direction),
      }),
      this.loadArticles,
    );
  };

  render() {
    const { articles, loading, error, page, pageSize, totalResults } =
      this.state;
    const maxPage = Math.max(1, Math.ceil(totalResults / pageSize));

    return (
      <>
        <header className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <p className="subtitle">Top headlines</p>
                <h1>Today's Breaking News</h1>
                <p className="lead">
                  Browse the latest United States headlines in a clean,
                  responsive trending news layout.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="news-section py-5">
          <div className="container">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
              <div>
                <h2 className="section-title">Top stories</h2>
                <p className="articles-status">
                  Showing {articles.length} of {totalResults} articles
                </p>
              </div>

              <div className="btn-group">
                <button
                  className="btn btn-outline-primary"
                  disabled={loading || page === 1}
                  onClick={() => this.changePage(-1)}
                >
                  Previous
                </button>
                <button
                  className="btn btn-primary"
                  disabled={loading || page >= maxPage}
                  onClick={() => this.changePage(1)}
                >
                  Next
                </button>
              </div>
            </div>

            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : error ? (
              <div className="alert alert-danger text-center" role="alert">
                {error}
              </div>
            ) : articles.length === 0 ? (
              <div className="alert alert-secondary text-center" role="alert">
                No articles are available right now. Please try again later.
              </div>
            ) : (
              <div className="row gy-4">
                {articles.map((article) => (
                  <NewsItem key={article.url} article={article} />
                ))}
              </div>
            )}
          </div>
        </section>
      </>
    );
  }
}
