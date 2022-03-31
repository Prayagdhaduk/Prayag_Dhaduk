import React from 'react'

const Blog = () => {
  return (
    <main id="main">
    <section id="blog" className="blog wow fadeInDown animated" data-wow-duration="2s">
    <div className="container">
      <div className="section-title">
        <span>Blog</span>
        <h2>Blog</h2>
        <p>Rejection is a part of any man’s life. If you can’t accept and move past rejection, or at least use it as writing material – you’re not a real man.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-sm-6">
          <div className="blog-post">
            <div className="blog-thumb">
              <a href="/"><img src="assets/img/blog/01.jpg" alt="" /></a>
            </div>
            <div className="down-content">
              <span>Quots</span>
              <a href="/">
                <h4>Naruto</h4>
              </a>
              <ul className="post-info">
                <li><i className="fa fa-tags" /></li>
                <li><a href="/">Madara Uchiha</a></li>
                <li><a href="/">Nov 5, 1999</a></li>
                <li><a href="/">12 Comments</a></li>
              </ul>
              <p>Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality, only pain, suffering, and futility exist.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-post">
            <div className="blog-thumb">
              <a href="/"><img src="assets/img/blog/03.jpg" alt="" /></a>
            </div>
            <div className="down-content">
              <span>Quots</span>
              <a href="/">
                <h4>Naruto</h4>
              </a>
              <ul className="post-info">
                <li><i className="fa fa-tags" /></li>
                <li><a href="/">Obito Uchiha</a></li>
                <li><a href="/">Nov 5, 1999</a></li>
                <li><a href="/">14 Comments</a></li>
              </ul>
              <p>When a man learns to love, he must bear the risk of hatred.</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-post">
            <div className="blog-thumb">
              <a href="/"><img src="assets/img/blog/02.jpg" alt="" /></a>
            </div>
            <div className="down-content">
              <span>Quots</span>
              <a href="/">
                <h4>Naruto</h4>
              </a>
              <ul className="post-info">
                <li><i className="fa fa-tags" /></li>
                <li><a href="/">Madara Uchiha</a></li>
                <li><a href="/">Nov 5, 1999</a></li>
                <li><a href="/">15 Comments</a></li>
              </ul>
              <div>
              <p>In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <ul className="page-numbers">
            <li><a href="/">1</a></li>
            <li className="active"><a href="/">2</a></li>
            <li><a href="/">3</a></li>
            <li><a href="/"><i className="fa fa-angle-double-right" /></a></li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  </main>
  )
}

export default Blog