"use client";

import React, { FC, useEffect, useState } from "react";
import KeySkillsSection from "../components/createPositions/keySkills.section";
import Accordion from "../components/CustomAccordian.component";
import PositionInterviewProcess from "../components/createPositions/position.interviewProcess";
import EssentialInformationSection from "../components/createPositions/essentialInformation.section";
import PositionDetailsSection from "../components/createPositions/positionDetails.section";
import { JobDescriptionComponent } from "../components/createPositions/jobDescriptions.section";
import { AdditionalDetailComponent } from "../components/createPositions/additionalDetails.section";
import AdditionalPositionsDetail from "../components/createPositions/additionalPositionDetails.section";
import withReduxSaga from "../../..";
import { useDispatch, useSelector } from "react-redux";
import { fetchMasterDataStart } from "@/redux/positionRedux/action";
import { postPositionData } from "@/services/service";
import { useGlobalContext } from "@/context/GlobalContext/Global.context";
import { useRouter } from "next/navigation";

interface ComponentState {
    [key: string]: any;
}

interface MasterData {
    [key: string]: { id: number; value: string }[];
}
interface PayloadState {
    [key: string]: string | number | boolean | string[] | number[] | undefined;
}
const mockPayload = {
    "positionType": 1,
    "clientType": 1,
    "clientName": "",
    "positionPriority": 1,
    "positionTitle": "",
    "department": 1,
    "totalPosition": "",
    "experienceLevel": 1,
    "shiftTiming": 1,
    "educationalRequirement": "",
    "remoteAvailable": false,
    "billabilityType": 1,
    "billableHours": 1,
    "city": "",
    "state": "",
    "country": "",
    "workType": 1,
    "minBudget": 0,
    "maxBudget": 0,
    "minPayPcale": 0,
    "maxPayScale": 0,
    "dateOpened": "",
    "targetDate": "",
    "hiringManager": "",
    "addPrimarySkills": [],
    "addSecondarySkills": [],
    "addJobDescription": "",
    "additionalDetails": "",
    "documentSubmission": false,
    "fitmentApproval": false,
    "salaryNegotiation": false,
    "interviewProcess": [],
    "status": "DRAFT",
    "isActive": false,
    "isDeleted": false
}

const CreatePositonPage = () => {
    const dispatch = useDispatch();
    const { push } = useRouter();
    const [masterData, setMasterData] = useState<MasterData>({});
    const positionMasterData = useSelector(
        (state: any) => state?.positionDataReducer?.responseData
    );
    const [payload, setPayload] = useState<PayloadState>(mockPayload);
    const [submitButtonActive, setSubmitButtonActive] = useState(false);
    const { updateShowCustomToast } = useGlobalContext();


    useEffect(() => {
        dispatch(fetchMasterDataStart());
    }, [dispatch]);

    useEffect(() => {
        setMasterData(positionMasterData)
    }, [positionMasterData])

    const [pageState, setPageState] = useState<ComponentState>({
        essentialInfo: {}, // Initialize with empty objects
        positionDetails: {},
        keySkills: {},
        addJobDescription: "",
        additionalDetails: "",
        AdditionalPositionsDetail: {}
    });


    const setComponentState = <T extends keyof ComponentState>(componentName: T, state: ComponentState[T]): void => {
        setPageState(prevState => ({
            ...prevState,
            [componentName]: state
        }));
    };

    useEffect(() => {

        const updatedPayload: PayloadState = { ...payload };
        const flattenedPageState = {
            ...pageState.essentialInfo,
            ...pageState.positionDetails,
            ...pageState.keySkills,
            ...pageState.AdditionalPositionsDetail,
            addJobDescription: pageState.addJobDescription,
            additionalDetails: pageState.additionalDetails
        };
        Object.keys(flattenedPageState).forEach(key => {
            updatedPayload[key] = flattenedPageState[key] ? flattenedPageState[key] : updatedPayload[key]; // Update corresponding key in payload
        });
        setPayload(updatedPayload)
    }, [pageState]);

    useEffect(() => {
        let essentialInfo = false

        if (Object.keys(pageState?.essentialInfo)?.length === 11) {
            essentialInfo = true
        }
        let positionDetails = false

        if (Object.keys(pageState?.positionDetails)?.length === 9) {
            positionDetails = true
        }

        let keySkills = false

        if (Object.keys(pageState?.keySkills)?.length === 2) {
            keySkills = true
        }


        let AdditionalPositionsDetail = false

        if (Object.keys(pageState?.AdditionalPositionsDetail)?.length === 3) {
            AdditionalPositionsDetail = true
        }
        if (essentialInfo && keySkills && positionDetails && AdditionalPositionsDetail && pageState?.addJobDescription && pageState?.additionalDetails) {
            setSubmitButtonActive(true)
        }

    }, [payload])

    const handleButtonClick = () => {
        try {
            postPositionData(payload).then(resp => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth" // Smooth scrolling behavior
                });
                console.log(resp);
                if (resp?.statusCode >= 200 && resp?.statusCode <= 300 && resp?.success) {
                    updateShowCustomToast("SUCCESS", "Position Saved as draft.");
                    push('/positions')
                } else {
                    updateShowCustomToast("ERROR", "Failed to add Position.");

                }
            })
        } catch (error) {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scrolling behavior
            });
            updateShowCustomToast("ERROR", "Failed to add Position.");
        }
    };
    return (

        <div className=" mx-auto px-4 ">
            <div className="relative bg-gray-100  mt-3 rounded-3xl overflow-hidden " style={{ minHeight: '80vh' }}>

                <Accordion title="ESSENTIAL Information">
                    <div className="w-full px-[10px] lg:px-[15px] xl:px-[30px] py-[10px]">
                        <EssentialInformationSection masterData={masterData} setComponentState={setComponentState} />
                    </div>
                </Accordion>

                <Accordion title="Positon Details">
                    <div className="w-full px-[10px] lg:px-[15px] xl:px-[30px] py-[10px]">
                        <PositionDetailsSection masterData={masterData} setComponentState={setComponentState} />
                    </div>
                </Accordion>

                <Accordion title="Additional position Details">
                    <div className="w-full px-[10px] lg:px-[15px] xl:px-[30px] py-[10px]">
                        <AdditionalPositionsDetail setComponentState={setComponentState} />

                    </div>
                </Accordion>
                <Accordion title="Key Skills">
                    <KeySkillsSection setComponentState={setComponentState} />
                </Accordion>

                <Accordion title="Job Description">
                    <div className="w-full px-[10px] lg:px-[15px] xl:px-[30px] py-[10px]">
                        <JobDescriptionComponent setComponentState={setComponentState} />
                    </div>
                </Accordion>
                <Accordion title="Additional Details">
                    <div className="w-full px-[10px] lg:px-[15px] xl:px-[30px] py-[10px]">
                        <AdditionalDetailComponent setComponentState={setComponentState} />
                    </div>
                </Accordion>
                <Accordion title="Define stages And Interview Process">
                    <div className="w-full px-[10px] lg:px-[15px] xl:px-[30px] py-[10px]">
                        <PositionInterviewProcess
                            onToggle={() => { }}
                            submitButtonActive={submitButtonActive}
                            onClick={handleButtonClick} />
                    </div>
                </Accordion>



            </div>

        </div>
    );
}

export default withReduxSaga(CreatePositonPage);

