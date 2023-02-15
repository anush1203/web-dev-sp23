import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import whos from "../WhoToFollowList/Who.js";

const WhoToFollowComp = () => {
  return `<ul class="list-group mt-4">
            <li class="list-group-item fw-bold wd-who-to-follow-background">
              Who to follow
            </li>
            ${whos
              .map((who) => {
                return WhoToFollowListItem(who);
              })
              .join("")}
          </ul>`;
};

export default WhoToFollowComp;
