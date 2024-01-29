/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const Hamburger = ({classes,onClick}) => {
  return (
    <svg onClick={onClick} className={classes} xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
  )
}

export default Hamburger