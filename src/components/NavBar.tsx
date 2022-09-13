import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import { StatefulSelect as Search, TYPE } from "baseui/select";
import { HeadingMedium } from "baseui/typography";
import { Block } from "baseui/block";

const options = {
  options: [
    { id: "AliceBlue", color: "#F0F8FF" },
    { id: "AntiqueWhite", color: "#FAEBD7" },
    { id: "Aqua", color: "#00FFFF" },
    { id: "Aquamarine", color: "#7FFFD4" },
    { id: "Azure", color: "#F0FFFF" },
    { id: "Beige", color: "#F5F5DC" },
    { id: "Bisque", color: "#FFE4C4" },
    { id: "Black", color: "#000000" },
  ],
  labelKey: "id",
  valueKey: "color",
  placeholder: "Rechercher un film, un réalisateur, un acteur",
  maxDropdownHeight: "300px",
};

export default function NavBar() {
  return (
    <Block className="px-8">
      <HeaderNavigation
        overrides={{
          Root: {
            style: {
              background: "transparent",
              border: "none",
              marginBottom: "3em",
            },
          },
        }}
      >
        <NavigationList $align={ALIGN.left}>
          <NavigationItem
            style={{
              alignItems: "self-start",
              justifyContent: "center",
              paddingLeft: "0",
            }}
          >
            <HeadingMedium>MOVIENIGHT</HeadingMedium>
          </NavigationItem>
        </NavigationList>
        <NavigationList $align={ALIGN.center} />
        <NavigationList $align={ALIGN.right}>
          <NavigationItem style={{ width: "400px", paddingRight: "10px" }}>
            <Search
              {...options}
              type={TYPE.search}
              getOptionLabel={(props) =>
                props.option && props.option.id ? props.option.id : null
              }
              onChange={() => {}}
              overrides={{
                DropdownContainer: {
                  style: {
                    zInder: 1000,
                  },
                },
                Placeholder: {
                  style: {
                    color: "white",
                  },
                },
                ControlContainer: {
                  style: {
                    borderColor: "rgb(51 51 51 / 55%)",
                    backgroundColor: "rgb(51 51 51 / 55%)",
                  },
                },
              }}
            />
          </NavigationItem>
        </NavigationList>
      </HeaderNavigation>
    </Block>
  );
}
