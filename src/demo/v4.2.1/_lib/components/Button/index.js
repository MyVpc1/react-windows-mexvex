import React, { useMemo } from "react";
import LoaderBusyWrapper from "../_common/LoaderBusyWrapper";

const Button = (props) => {

  const renderLoader = useMemo(() => {
    return <div
        className = {
            props.type === "primary" ?  "app-loader-busy loader-sm light animate"
          : props.type === "danger" ? "app-loader-busy loader-sm light animate"
          : props.type === "success" ? "app-loader-busy loader-sm light animate"
          : "app-loader-busy loader-sm animate"
          }>
      <LoaderBusyWrapper/>
    </div>
  }, [props.type])

  const toggleLoading = useMemo(() => {
    return props.isLoading ? "btn-is-loading" : "btn-no-loading";
  }, [props.isLoading])

  
  return (
    <button
      className = {
        props.type ==="primary" ?  `app-btn animate app-btn-primary ${toggleLoading}`
      : props.type ==="danger" ? `app-btn animate app-btn-danger ${toggleLoading}`
      : props.type ==="success" ? `app-btn animate app-btn-success ${toggleLoading}`
      : props.type ==="primary-outline" ? `app-btn animate app-btn-primary-outline ${toggleLoading}`
      : props.type ==="danger-outline" ? `app-btn animate app-btn-danger-outline ${toggleLoading}`
      : props.type ==="success-outline" ? `app-btn animate app-btn-success-outline ${toggleLoading}`
      : `app-btn animate ${toggleLoading}`
      }
      style={{
        width: props.width,
        justifyContent: props.justifyContent,
        ...props.style
      }}
      type="button"
      title={props.tooltip}
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      disabled={props.disabled}
      onDoubleClick={props.onDoubleClick}>

      {props.isLoading && (renderLoader)}
      {props.icon && (<span>{props.icon}</span>)}
      {props.value!=="" && (<span>{props.value}</span>)}
    </button>
  )
}

Button.defaultProps = {
  value: "Submit",
  disabled: false,
  isLoading: false,
  onClick: () => {},
}

export default Button;