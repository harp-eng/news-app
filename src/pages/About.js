import React, { Component } from "react";

export class About extends Component {
  render() {
    const features = [
      {
        title: "Latest Headlines",
        description:
          "Browse current top stories from a trusted news API, updated live for U.S. headlines.",
      },
      {
        title: "Responsive Cards",
        description:
          "News articles display in bootstrap cards with images, summaries, and quick access to the full story.",
      },
      {
        title: "Easy Navigation",
        description:
          "Use the navigation bar and About page to move smoothly between the news feed and app details.",
      },
      {
        title: "Client-side Pagination",
        description:
          "Load more stories with Previous/Next controls while keeping the interface simple and lightweight.",
      },
      {
        title: "External Story Links",
        description:
          "Open full articles in a new tab with secure external links for fast reading.",
      },
      {
        title: "Built with React",
        description:
          "This app is implemented using class-based React components and modern React Router routing.",
      },
      {
        title: "Bootstrap Styling",
        description:
          "A responsive layout and polished UI are provided by Bootstrap styles and components.",
      },
      {
        title: "Simple Setup",
        description:
          "Run the app locally with standard Create React App scripts for development or production build.",
      },
    ];

    return (
      <div className="about-page">
        <section className="about-hero">
          <span className="about-kicker">News made easy</span>
          <h1>About News App</h1>
          <p>
            News App delivers a streamlined feed of current headlines in a
            clean, responsive interface. It is designed for quick browsing, easy
            navigation, and fast access to full articles from trusted sources.
          </p>
        </section>

        <section className="about-grid" aria-label="News App features">
          {features.map((feature, index) => (
            <article className="about-feature" key={feature.title}>
              <span className="about-number">{index + 1}</span>
              <div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }
}
