import PackagesTable from "../tables/PackagesTable";
import { FlexSB } from "./StyledHome";

const PackagesContent = () => {
    return (
        <div style={{
            minWidth: "1110px",
          }}>
            <FlexSB>
                <PackagesTable/>
            </FlexSB>
        </div>
    )
}

export default PackagesContent;