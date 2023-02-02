import React, { PropsWithChildren } from "react";
import { Chip, Paper } from "@mui/material";
import Header from "../Header";
import "./styles.scss";

type ContainerProps = {
  title: string;
  chipData?: Array<any>;
  setSelectedTab: (index: number) => any;
  selectedTab: Number;
};

function Container(props: PropsWithChildren<ContainerProps>) {
  const { title, chipData, setSelectedTab, children, selectedTab } = props;

  const handleChangeTab = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <Header title={title} />
      <Paper className="container">
        {chipData && (
          <div className="container-chipContainer">
            {chipData.map((item, index) => (
              <Chip
                key={index}
                // abel="Clickable"
                color="secondary"
                onClick={() => handleChangeTab(index)}
                className={
                  index === selectedTab
                    ? "container-chipBtnActive"
                    : " container-chipBtn"
                }
                label={item}
              />
            ))}
          </div>
        )}
        <div>{children}</div>
      </Paper>
    </div>
  );
}

export default Container;
