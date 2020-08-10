# simple-reddit-top-posts-viewer
Simple Reddit client that shows the top 50 entries from Reddit

# Run the app
`yarn start`

# Build the app
`yarn build`

# Demo

You can check the app running at: https://facundopomar.github.io/simple-reddit-top-posts-viewer/

# Development process

The app was made in two days, starting in incremental steps by first loading the API data (top posts) from reddit and then working around that listing the posts, showing more information and adding additional logic to:

* Show details of a post
* Show media of a post (both pictures and videos)
* Adding a simple pagination (Reddit does not work in a "page number" pagination system, but rather slices of information due the frequent change in the data)
* Added logic to handle "read/no-read" state of the posts.
* Added logic to dismiss each post and then to dismiss all of them.
* Modified layout to handle mobile and desktop views by using a material-drawer.

Between all of these main steps, I modified the existing code to extract logic and ui into different components to keep the code clean and to reuse it when possible.

I handle almost all states within Redux's store, the only expection was the state to control the drawer because it was no real need to have it in the global store. Because this was a challenge that required Redux, it was used, but due the size and low complexity of the aplication, using Context API would have been better, because the set-up is easier than a Redux store.