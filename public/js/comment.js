const addComment = async (event) => {
  event.preventDefault();

  const postId = window.location.pathname.split("/").pop();
  const postComment = document.querySelector("#comment-content").value.trim();

  if (postComment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ post_id: postId, comment_content: postComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to add comment");
    }
  }
};

document.querySelector("#comment-form").addEventListener("submit", addComment);
