import "./home.css"
import blog from "./../../data"
import BlogCard from "./../../component/BlogCard/blogcard"

function home() {
  return (
    <>
      <h1 className="blog-heading">Water Wonder : Beautiful fishes which make perfect tank mates for your gold fish </h1>
      <div className="blog-container">
        {
          blog.map((blogObject, i) => {
            const {
              id,
              title,
              content,
              image,
              author_name,
              date
            } = blogObject

            return (
              <BlogCard
                key={i}
                id={id}
                title={title}
                content={content}
                image={image}
                author_name={author_name}
                date={date}
              />


            )


          })
        }
      </div>
    </>
  )
}

export default home