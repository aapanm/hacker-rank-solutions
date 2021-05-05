import React from "react";

function Articles({ articles }) {
  const articleTable = articles.map((art, idx) => {
    return (
      <tbody key={idx}>
        <tr data-testid="article" key="article-index">
          <td data-testid="article-title">{art.title}</td>
          <td data-testid="article-upvotes">{art.upvotes}</td>
          <td data-testid="article-date">{art.date}</td>
        </tr>
      </tbody>
    );
  });
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
          {articleTable}
        </thead>
      </table>
    </div>
  );
}

export default Articles;
