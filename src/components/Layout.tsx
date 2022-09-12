import { useStyletron } from "baseui";
import { Grid, Cell } from "baseui/layout-grid";
import { ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [css] = useStyletron();

  return (
    <>
      <div
        className={css({
          color: "white",
          backgroundColor: "rgba(0,0,0, 0.5)",
        })}
      >
        <Grid>
          <Cell span={[4, 8, 12]}>
            <Inner>
              <NavBar></NavBar>
            </Inner>
            <Inner>{children}</Inner>
          </Cell>
        </Grid>
      </div>
    </>
  );
}

export function Inner({ children }: { children: ReactNode }) {
  const [css, theme] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: theme.colors.white,
      })}
    >
      {children}
    </div>
  );
}
