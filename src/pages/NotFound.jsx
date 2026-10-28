import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../components/Footer.css';

export default function NotFound() {
  useEffect(() => {
    const prev = document.title;
    document.title = '404 | sai vardhan';
    return () => { document.title = prev; };
  }, []);

  return (
    <>
      <Navbar />
      <main id="main" className="not-found">
        <p className="not-found-404" aria-label="404">404</p>
        <h1 className="not-found-heading">this page is still in post-production.</h1>
        <p className="not-found-sub">the link may be broken, or the scene got cut.</p>
        <Link to="/" className="btn btn-primary">back home</Link>
      </main>
    </>
  );
}
