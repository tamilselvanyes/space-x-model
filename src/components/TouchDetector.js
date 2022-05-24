import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, props) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, props]);
}

export function TouchDetector(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props);

  return <div ref={wrapperRef}>{props.children}</div>;
}

TouchDetector.propTypes = {
  children: PropTypes.element.isRequired,
};
