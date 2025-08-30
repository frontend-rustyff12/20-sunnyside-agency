export default function Main() {
  return (
    <main>
      <article>
        <div className="main-image transform">
          <img
            src="/mobile/image-transform.jpg"
            alt="Image of an egg representing transformation"
          />
        </div>
        <div className="main-content-wrapper">
          <div className="main-content-text">
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a className="main-content-link" href="#">
              Learn more
            </a>
          </div>
        </div>
      </article>
      <article>
        <div className="main-image glass">
          <img src="/mobile/image-stand-out.jpg" alt="" />
        </div>
        <div className="main-content-wrapper">
          <div className="main-content-text">
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we&apos;ll build
              and extend your brand in digital places.
            </p>
            <a className="main-content-link" href="#">
              Learn more
            </a>
          </div>
        </div>
      </article>
      <article>
        <section className="secondary">
          <h3>Graphic design</h3>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients&apos; attention.
        </section>
        <section className="secondary">
          <h3>Photography</h3>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </section>
      </article>
    </main>
  );
}
