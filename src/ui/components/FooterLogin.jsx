export const FooterLogin = () => {
  return (
    <>
      <footer className="footer-container text-center text-body">
        <div className="container p-4">
          <section className="">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/yqgTojLf-HE"
                    title="Anakin vs Obi-Wan"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="footer-copyright text-center p-3 m-auto">
          © 2023 Copyright:
          <a
            className="text-dark"
            href="https://github.com/Lean-98"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Leeo-98
          </a>
        </div>
      </footer>
    </>
  );
};
