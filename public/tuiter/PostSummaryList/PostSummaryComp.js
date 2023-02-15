import PostSummary from "./index.js";

const PostSummaryComp = () => {
  $("#post-summary").append(`${PostSummary()}`);
};

$(PostSummaryComp);
