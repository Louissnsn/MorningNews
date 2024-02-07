import Image from "next/image";
import styles from "../styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { addArticleToFav, removeArticleFromFav } from "../reducers/bookmarks";

function Article(props) {
  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    if (props.isBookmarked) {
      dispatch(removeArticleFromFav(props));
    } else {
      dispatch(addArticleToFav(props));
    }
  };

  const article = useSelector((state) => state.bookmarks.value);

  return (
    <div className={styles.articles}>
      <div className={styles.articleHeader}>
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          onClick={() => {
            handleBookmarkClick(props);
          }}
          icon={faBookmark}
          className={styles.bookmarkIcon}
        />
      </div>
      <h4 style={{ textAlign: "right" }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <Image
        src={props.urlToImage}
        alt={props.title}
        width={600}
        height={314}
      />
      <p>{props.description}</p>
    </div>
  );
}

export default Article;
