import React, { useEffect } from "react";
import classnames from "classnames/bind";

import styles from "./App.css";
import icon from './assets/icon.svg';

const cx = classnames.bind(styles);

type Props = {
  className?: string
};

const App = ({ className }: Props) => {
  const _className = cx({
    app: true,
    [className]: !!className
  });

  useEffect(() => {
    console.log("App loaded!");
    console.log(styles);
  });

  return (
    <div className={_className}>
      <div className={styles.title}>React 17 Template</div>
      <img className={styles.icon} src={icon}/>
    </div>
  )
}

export default App;