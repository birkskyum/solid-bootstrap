import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps} from "./helpers";

export interface ButtonToolbarProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLDivElement> {}

const defaultProps = {
  role: "toolbar",
};

const ButtonToolbar = (p: ButtonToolbarProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "class",
    "className"
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "btn-toolbar");

  return (
    <div {...props} class={classNames(local.class, local.className, prefix)}/>
  );
};
export default ButtonToolbar;
