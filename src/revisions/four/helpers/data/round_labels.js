export const roundLabelCoordinates = {
  1: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [
                {
                  transform: `translate(-2px, -3px) skewY(3deg)`,
                },
              ]
            : [
                {
                  transform: `translate(-2px, -3px) skewY(3deg)`,
                },
              ],
        design: [
          {
            height: "105%",
            width: "90%",
            transform: " translate(-50%, 3px)",
          },
        ],
        orientation: [
          {
            width: length >= 13 && length <= 15 ? "25%" : "20%",
            rotate:
              length >= 13 && length <= 15
                ? `${isVertical ? 0 : 5}deg`
                : "5deg",
            transform: "skew(0deg)",
            translate: length >= 13 && length <= 15 ? `-1px -3px` : `-1px -3px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(3deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: length <= 10 ? "55%" : "35%",
            rotate: isVertical ? "5deg" : "0deg",
            transform: isVertical ? "0deg" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-2px) skewY(2deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            width: "65%",
            rotate: "2deg",
            transform: "skew(5deg)",
            translate: `-1px 1px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-3px) skewY(3deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            width: "70%",
            rotate: "0deg",
            transform: "skew(0deg)",
            translate: `-1px 0px`,
          },
          { width: "70%", rotate: "3deg", transform: "skew(5deg)" },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: "10deg",
                transform: "skew(5deg)",
                translate: `-1px 0px`,
              },
              { rotate: "5deg", transform: "skew(5deg)" },
              { rotate: "2deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px -2px" },
              { translate: "-4px 0px" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: "10deg",
                transform: "skew(5deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "13deg" : "5deg",
                transform: "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "5deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  2: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -3px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -3px) skewY(5deg)" }],
        design: [
          {
            height: "95%",
            width: "90%",
            transform: "rotate(0deg) translate(-50%, 3px)",
          },
        ],
        orientation: [
          {
            width:
              orientation === 4
                ? length >= 13 && length <= 15
                  ? "50%"
                  : "35%"
                : length >= 13 && length <= 15
                ? "60%"
                : "40%",
            rotate:
              orientation === 4
                ? length >= 13 && length <= 15
                  ? "4deg"
                  : "7deg"
                : length >= 13 && length <= 15
                ? "2deg"
                : "5deg",
            transform: "skew(1deg)",
            translate: length >= 13 && length <= 15 ? `-1px -3px` : `-1px -3px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(3deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: length <= 10 ? "80%" : "65%",
            rotate: isVertical ? "6deg" : "2deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            width: "85%",
            rotate: isVertical ? "5deg" : "2deg",
            transform: isVertical ? "0deg" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(7deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: "0deg",
            transform: "skew(0deg)",
            translate: `-1px 0px`,
          },
          { rotate: "3deg", transform: "skew(5deg)" },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "5deg" : "10deg",
                transform: isVertical ? "0deg" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "5deg" : "5deg",
                transform: isVertical ? "0deg" : "skew(15deg)",
              },
              { rotate: "2deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "5deg" : "10deg",
                transform: "skew(5deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "3deg" : "5deg",
                transform: isVertical ? "0deg" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "5deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  3: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -3px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -3px) skewY(5deg)" }],
        design: [
          {
            height: "95%",
            width: "90%",
            transform: "rotate(2deg) translate(-50%, 5px)",
          },
        ],
        orientation: [
          {
            width:
              orientation === 4
                ? length >= 13 && length <= 15
                  ? "80%"
                  : "65%"
                : length >= 13 && length <= 15
                ? "83%"
                : "70%",
            rotate: "4deg",
            transform: "skew(5deg)",
            translate: isVertical
              ? "0px"
              : length >= 13 && length <= 15
              ? `-1px -3px`
              : `-1px -5px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(3deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: "90%",
            rotate: isVertical ? "5deg" : "2deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: isVertical ? "5deg" : "2deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(7deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: "0deg",
            transform: "skew(0deg)",
            translate: `-1px 0px`,
          },
          { rotate: "3deg", transform: "skew(5deg)" },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "2deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "5deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  4: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -3px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -3px) skewY(5deg)" }],
        design: [
          {
            height: "95%",
            width: "90%",
            transform: "rotate(2deg) translate(-50%, 5px)",
          },
        ],
        orientation: [
          {
            width: length >= 13 && length <= 15 ? "83%" : "75%",
            rotate: isVertical ? "-1deg" : "2deg",
            transform: "skew(0deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(3deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: "90%",
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(5deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "5deg",
            transform: "skew(0deg)",
            translate: `-1px 0px`,
          },
          {
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "2deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "5deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  5: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -5px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -3px) skewY(5deg)" }],
        design: [
          {
            height: "95%",
            width: "90%",
            transform: "rotate(2deg) translate(-50%, 5px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "85%" : "90%",
            rotate: isVertical ? "-2deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(2deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            width: orientation === 4 ? "95%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(5deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "5deg",
            transform: "skew(0deg)",
            translate: `-1px 0px`,
          },
          {
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "5deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  6: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -13px) skewY(3deg)" }]
            : [{ transform: "translate(-2px, -10px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(3deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "85%" : "90%",
            rotate: isVertical ? "-2deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(0deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: orientation === 4 ? "95%" : "100%",
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(5deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(0deg)",
            translate: `-1px 0px`,
          },
          {
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "5deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  7: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -13px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -10px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(3deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "88%" : "95%",
            rotate: isVertical ? "-3deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(2deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "95%" : "100%",
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(8deg)" },
          { translate: "-6px 14%" },
        ],
        design: [{ width: "85%", height: "95%" }, {}],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "95%" : "100%",
            rotate: isVertical ? "0deg" : "3deg",
            transform: "skew(0deg)",
            translate: `-1px 0px`,
          },
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-12% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                height: isVertical ? "150%" : "100%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                height: isVertical ? "150%" : "100%",
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              {
                height: isVertical ? "150%" : "100%",
                rotate: isVertical ? "0deg" : "5deg",
              },
              { height: isVertical ? "150%" : "100%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  8: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;

    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -10px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -7px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(5deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "83%" : "90%",
            rotate: isVertical ? "-5deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "90%" : "100%",
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            height: isVertical ? "110%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-9%) skewY(10deg)" },
          { translate: "-3px 12%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "10deg",
              },
              { height: isVertical ? "120%" : "100%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  9: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -10px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -7px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(7deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "90%" : "100%",
            rotate: isVertical ? "-7deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(10deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            height: isVertical ? "110%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
          {
            height: isVertical ? "110%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "10deg",
              },
              { height: isVertical ? "120%" : "100%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "10deg",
              },
              { height: isVertical ? "120%" : "100%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  10: (length, orientation) => {
    const isVertical = orientation == 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -10px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -7px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(7deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            height: isVertical ? "110%" : "100%",
            width: orientation === 4 ? "90%" : "100%",
            rotate: isVertical ? "-6deg" : "5deg",
            transform: isVertical ? "0deg" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(10deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  11: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -14px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -10px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(7deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "90%" : "100%",
            rotate: isVertical ? "-6deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(10deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(10deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "95%" : "100%",
            rotate: isVertical ? "0deg" : "7deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  12: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -14px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -9px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(7deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "85%" : "100%",
            height: isVertical ? "115%" : "100%",
            rotate: isVertical ? "-7deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: orientation === 4 ? "95%" : "100%",
            height: isVertical ? "115%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            width: orientation === 4 ? "95%" : "100%",
            height: isVertical ? "115%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(20deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            width: orientation === 4 ? "95%" : isVertical ? "110%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
          {
            width: orientation === 4 ? "95%" : isVertical ? "110%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate:
                  orientation === 4 ? "25deg" : isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { rotate: isVertical ? "0deg" : "10deg" },
              {},
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
};
