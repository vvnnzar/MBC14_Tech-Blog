const updateButton = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  const postId = window.location.pathname.split("/").pop();

  if (title && content) {
    const response = await fetch("/api/posts/" + postId, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update post");
    }
  }
};

const deleteButton = async () => {
  const postId = window.location.pathname.split("/").pop();
  const response = await fetch("/api/posts/" + postId, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete post");
  }
};

document.querySelector("#update-post").addEventListener("click", updateButton);

document.querySelector("#delete-post").addEventListener("click", deleteButton);
