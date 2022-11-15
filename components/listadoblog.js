import Post from "./post";
import styles from '../styles/blog.module.css'


function Listadoblog( {posts}  ) {
   
  return (
      <>
          <h2 
        className= 'heading '
         >Nuestros blog</h2>
          <div>
              {posts?.length && (
                  <div className={styles.blog}>
                      {posts?.map(posts => (
                          <Post 
                          key={posts?.id} 
                          posts={posts?.attributes} />
                      ))}
                  </div>
              )}
          </div>
      </>
  );
}

export default Listadoblog