import styles from "../styles/Toparticle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addArticleToFav, removeArticleFromFav } from "../reducers/bookmarks";

function TopArticle(props) {
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
    <div className={styles.topContainer}>
      <img src={props.urlToImage} className={styles.image} alt={props.title} />
      <div className={styles.topText}>
        <h2 className={styles.topTitle}>{props.title}</h2>
        <FontAwesomeIcon
          onClick={() => {
            handleBookmarkClick(props);
          }}
          icon={faBookmark}
          className={styles.bookmarkIcon}
        />
        <h4>{props.author}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default TopArticle;
