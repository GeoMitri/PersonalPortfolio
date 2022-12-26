import {Routes, Route, BrowserRouter as Router, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';

type ScrollToTopProps = {
  children: JSX.Element,
};

const ScrollToTop = ({ children }: ScrollToTopProps) => {
    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);
    return children
}

export default ScrollToTop