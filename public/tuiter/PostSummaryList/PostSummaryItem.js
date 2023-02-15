const PostSummaryitem = (post) => {
  return `<li class="list-group-item p-0">
              <div class="border-bottom border-secondary container pt-2 pb-1">
                <img
                  class="my-auto wd-float-right rounded wd-img-size align-middle"
                  src=${post.image}
                  alt=""
                />
                <p class="text-secondary fw-bold mb-0">${post.topic}</p>
                <p class="fw-bold mb-0">
                  ${post.userName}
                  <span class="fa-stack small"
                    ><i class="fa-solid fa-circle fa-stack-2x"></i
                    ><i class="fa-solid fa-check fa-stack-1x fa-inverse"></i
                  ></span>
                  <span class="text-secondary fw-normal"> - ${post.time}</span>
                </p>
                <p class="fw-bold">
                  ${post.title}
                </p>
                
                ${post.tweets === "" ? "" : `<p>${post.tweets} Tuits </p>`}
                
              </div>
            </li>`;
};

export default PostSummaryitem;
