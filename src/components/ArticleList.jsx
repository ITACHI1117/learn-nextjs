import ArticleItem from "./ArticleItem";
import articleStyles from "@/styles/Article.module.css";

function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.posts.map((post) => (
        <ArticleItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default ArticleList;
