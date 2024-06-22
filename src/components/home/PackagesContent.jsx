import React, { useEffect } from 'react';
import PackagesTable from "../tables/PackagesTable";
import { FlexSB } from "./StyledHome";
import { fetchPackages } from "../../store/slices/packageSlice";
import { useDispatch, useSelector } from 'react-redux';

const PackagesContent = ({ onSelectPackage }) => {
    const dispatch = useDispatch();
    const { packages } = useSelector(state => state.package);

    useEffect(() => {
        dispatch(fetchPackages());
      }, [dispatch]);


    return (
        <div style={{
            minWidth: "1110px",
            paddingLeft: '30px'
          }}>
            <FlexSB>
                <PackagesTable packages={packages} onSelectPackage={onSelectPackage}/>
            </FlexSB>
        </div>
    )
}

export default PackagesContent;