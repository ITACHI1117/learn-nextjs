import Link from "next/link";
import articleStyles from "@/styles/Article.module.css";

function ArticleItem({ post }) {
  return (
    <Link href="/post/[id]" as={`/post/${post.id}`}>
      <div className={articleStyles.card}>
        <h1>{post.title} &rarr;</h1>
        <p>
          {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
        </p>
      </div>
    </Link>
  );
}

export default ArticleItem;
