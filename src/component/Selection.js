import React from "react";
import "./Selection.css";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

import { Icon } from "@fluentui/react/lib/Icon";
initializeIcons();

const Selection = () => {
  return (
    <div>
      <div className="selection-container">
        <div className="selection">
          <span> YOUR SELECTION</span>{" "}
          <span className="dots">
            <button>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </button>
          </span>
        </div>
        <div className="selection-list">
          <div className="selection-item">
            <div className="item-title">
              <p>ORGANISM</p>
              <p>Homo sapiens</p>
            </div>
            <div className="item-value">
              <button>
                <Icon iconName="Edit" />
              </button>
              <button>
                <Icon iconName="StatusCircleErrorX" />
              </button>
            </div>
          </div>
        </div>
        <div className="action-container">
          <button>Get Data</button> <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Selection;
