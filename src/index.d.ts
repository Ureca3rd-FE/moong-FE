declare module "*.svg?react" {
  import * as React from "react";
  const SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default SvgComponent;
}
