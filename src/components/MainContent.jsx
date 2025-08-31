export default function MainContent() {
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

            <div>
              <a className="main-content-link yellow" href="#">
                Learn more
              </a>
            </div>
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
            <div>
              <a className="main-content-link red" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="secondary">
          <div className="secondary-text">
            <h3>Graphic design</h3>
            <p className="alt">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential
              clients&apos; attention.
            </p>
          </div>
        </div>
        <div className="secondary">
          <div className="secondary-text">
            <h3>Photography</h3>
            <p className="alt">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
