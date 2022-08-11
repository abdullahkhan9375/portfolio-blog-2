import { SECONDARY_COLOR } from "@/Constants";

const lDividerStyling: React.CSSProperties =
{
    height: "190px",
    width: "0.3px",
    backgroundColor: SECONDARY_COLOR,
    alignSelf:"center",
};

export const Divider = () => <div style={lDividerStyling}></div>;
