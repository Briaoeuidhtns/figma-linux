import * as React from "react";

import { Icon, Button } from "Elements";
import Tabs from "Components/Tabs";

interface TopPanelProps {
  current: number;
  scalePanel: number;
  visibleNewProjectBtn: boolean;
  isMaximized: boolean;

  newTab(): void;
  onMainTab(e: React.MouseEvent<HTMLDivElement>): void;
  onNewProject(e: React.MouseEvent<HTMLDivElement>): void;
  openMenu(e: React.MouseEvent<HTMLDivElement>): void;
  closew(e: React.MouseEvent<HTMLDivElement>): void;
  maxiw(e: React.MouseEvent<HTMLDivElement>): void;
  miniw(e: React.MouseEvent<HTMLDivElement>): void;
}

const TopPanel: React.FunctionComponent<TopPanelProps> = props => {
  return (
    <div className="top-panel" style={{ zoom: props.scalePanel ? props.scalePanel : 1 }}>
      <div className="panelButtons">
        <Button
          className={`button_clear button_title button_main${!props.current ? " tab_active tab_main_active" : ""}`}
          onClick={props.onMainTab}
        >
          <Icon color="currentColor" type="Figma" size="17" />
        </Button>
        {props.visibleNewProjectBtn ? (
          <Button className="button_clear button_title" onClick={props.onNewProject}>
            <Icon color="currentColor" type="Plus" size="15" />
          </Button>
        ) : (
          ""
        )}
      </div>
      <Tabs />
    </div>
  );
};

export default TopPanel;
