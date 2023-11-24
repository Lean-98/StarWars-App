import { useMemo } from "react";

export const Footer = () => {
  function getYear() {
    const today = useMemo(() => new Date());

    return today.getFullYear();
  }

  return (
    <>
      <footer className="footer fixed-bottom">
        <div className="footer-copyright text-center text-white p-3">
          © {getYear()} Copyright:
          <a
            className="text-secondary"
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
