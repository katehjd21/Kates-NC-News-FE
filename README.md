# Northcoders News Front-End

## Summary

This project is a social news aggregation, web content rating, and discussion platform. Northcoders News allows users to explore a list of articles which can be explored by topic, and can be sorted by comment count, creation date, or vote count. Sorting can also be displayed in ascending or descending order.

Users can add or delete comments on articles, and each article features user-curated ratings via upvotes and downvotes. This project utilizes the API I developed during the [NC News Back End Project ](https://github.com/katehjd21/Kates-NC-News "GitHub Kates-NC-News-Back-End Link").

You can view the hosted version of the NC News Front End Project here: [NC News Front End Project](https://kate-nc-news.netlify.app "GitHub Kates-NC-News-Front-End Link")

## Features

### Homepage

- Displays a list of all available articles, limited to 9 per page.

- Pagination: Navigate between pages using "Next" and "Previous" buttons.

- Navigation: Return to the homepage by clicking either "Home" in the navbar or the "NC News" header.

### Sorting

Articles can be sorted by:

- Date created (default: descending order)

- Votes

- Comment count

Sorting can be toggled between ascending and descending order.

### Topics

The "Topics" dropdown in the navbar displays available topics.

Selecting a topic filters the articles to display only those associated with the chosen topic.

### Article View

Clicking on an article navigates to a detailed view of the article.

Users can:

- Upvote or downvote the article.

- Add comments to the article.

- Delete their own comments (comments by other users cannot be deleted).

## Getting Started

Software Requirements:

This application requires Node.js to run locally. Ensure your local machine has the following minimum version:

`Node.js: v22.7.0`

## Cloning the Repository

To clone the repository to your local machine:

Navigate to the directory where you want to store the project.

Run the following command in your terminal:

`git clone https://github.com/katehjd21/Kates-NC-News-FE.git`

## About This Project

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)
