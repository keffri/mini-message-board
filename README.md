<h1>Mini Message Board</h1>

This Mini Message Board was built using NodeJS, Express, and PUG for the template language.

## How It Works

This page has two paths ("/" and "/new"). The index page displays the messages, and the new page contains the form to create new messages.

<ul>
    <li>The first router.get() gets the index path, and renders it to the index.pug view with the title and images.</li>
    <li>The second router.get() gets the new path, and renders it to the form.pug view along with the title.</li>
    <li>The router.post() takes the input information from the form submission on the /new path, and pushes it to the messages array. It then redirects to the index to show the updated message board.</li>
</ul>

Give it a try here: https://blooming-earth-14314.herokuapp.com/

<p align="center">
  <img src="/public/images/miniMessageBoardPreview.png" width="1000" title="Mini Message Board Preview">
</p>

## Author

👤 **Keffri Neal**

- LinkedIn: [@keffri](https://www.linkedin.com/in/keffri/)
- Github: [@keffri](https://github.com/keffri)
