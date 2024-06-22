import HotelsTable from "../tables/HotelsTable";
import { FlexSB } from "./StyledHome";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from "../../store/slices/hotelSlice";
import React, { useEffect } from 'react';

const HotelContent = () => {
    const dispatch = useDispatch();
    const { hotels } = useSelector(state => state.hotel);

    useEffect(() => {
        dispatch(fetchHotels());
      }, [dispatch]);

    return (
        <div style={{
            minWidth: "1110px",
            paddingLeft: '30px'
          }}>
            <FlexSB>
                <HotelsTable hotels={hotels}/>
            </FlexSB>
        </div>
    )
}

export default HotelContent;