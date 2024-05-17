"use client";

import React, { useState, useEffect } from "react";
import PositionsFiltersSection from "../components/postions/positions.filters.section";
import CustomButtons from "../components/CustomButtons.component";
import { useRouter } from 'next/navigation';
import StatisticBar from "../components/postions/postions.stats.component";
import PositionTable from "../components/PositionTable.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchMasterDataStart } from "@/redux/positionRedux/action";
import withReduxSaga from "../../..";

const ParentComponent = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const isFetchingPositionMasterData = useSelector(
    (state: any) => state?.positionDataReducer?.isFetching
  );
  const positionMasterData = useSelector(
    (state: any) => state?.positionDataReducer?.responseData
  );
  const positionMasterDataError = useSelector(
    (state: any) => state?.positionDataReducer?.errorMessage
  );

  useEffect(() => {
    dispatch(fetchMasterDataStart());
  }, [dispatch]);


  return (
    <div className=" mx-auto px-4 ">
      <StatisticBar label="Filled Positions" value={15} maxValue={20} />
      <div className="flex justify-between items-center">
        <h2 className="font-bold font-lato text-[24px] pb-[5px] my-[18px]">
          Position
        </h2>
        <CustomButtons
          buttonType="border"
          title="Create New Position"
          onClick={() => push('/createPositions')}
          paddingX="px-[15px]"
          paddingY="py-[10px]"
          fontColor="white"
          borderColor="bg-[#2578C3]"
          buttonColor="bg-[#2578C3]"
          hoverColor="bg-[#2578C3]"
        />
      </div>
      <PositionsFiltersSection />
      <PositionTable />
    </div>
  );
};

export default withReduxSaga(ParentComponent);
