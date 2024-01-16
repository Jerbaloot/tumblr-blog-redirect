function redirectIfMatchingUrl(currentUrl) {
  if (currentUrl.includes('https://www.tumblr.com/dashboard')) return;
  if (currentUrl == 'https://www.tumblr.com/') return;
  if (currentUrl.includes('https://www.tumblr.com/')) {
    // Extract the post ID from the current URL
    const postId = currentUrl.split('/').pop();

    // Extract the username from the current URL
    const username = currentUrl.split('/')[3];

    console.log('postId', postId);
    console.log('username', username);

    // Construct the new Tumblr link with the updated domain and post ID
    const newUrl = `https://${username}.tumblr.com/post/${postId}`;

    // Redirect the user to the new Tumblr link
    window.location.href = newUrl;
  }
}

// call redirectIfMatchingUrl on page load
redirectIfMatchingUrl(window.location.href);

// Uncomment the following lines to test the function

// // Example usage
// const currentUrl = 'https://www.tumblr.com/erikaschnellert/123456';
// redirectIfMatchingUrl(currentUrl);
