import { merge } from "lodash";
import Tabs from "./tabs";
import Tab from "./tab";

const muiComponentsOverrides = (theme) => {
  return merge(Tabs(theme), Tab(theme));
};

export default muiComponentsOverrides;
