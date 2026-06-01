import React, { Component } from "react";

const IMAGE_PLACEHOLDER =
  "https://via.placeholder.com/600x350?text=Image+Not+Available";

export default class NewsItem extends Component {
  render() {
    const { article } = this.props;
    const { title, description, urlToImage, url, source, publishedAt } =
      article;
    const imageUrl = urlToImage || IMAGE_PLACEHOLDER;
    const publishedDate = publishedAt
      ? new Date(publishedAt).toLocaleDateString()
      : "";

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <article className="card h-100 shadow-sm news-card">
          <img
            src={imageUrl}
            className="card-img-top news-card-image"
            alt={title || "News image"}
          />
          <div className="card-body d-flex flex-column">
            <div>
              <h5 className="card-title">{title || "Untitled story"}</h5>
              <p className="card-text">
                {description || "No summary available for this story."}
              </p>
            </div>

            <div className="mt-auto">
              <p className="news-meta text-muted mb-3">
                {source?.name || "Unknown source"}
                {publishedDate ? ` · ${publishedDate}` : ""}
              </p>
              <a
                href={url}
                className="btn btn-primary w-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Story
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
