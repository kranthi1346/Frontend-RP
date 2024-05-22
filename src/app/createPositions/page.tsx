"use client";

import React, { FC, useEffect, useState } from "react";
import KeySkillsSection from "../components/createPositions/keySkills.section";
import Accordion from "../components/CustomAccordian.component";
import DatePicker from "../components/CustomDatePicker.component";
import PositionInterviewProcess from "../components/createPositions/position.interviewProcess";
import EssentialInformationSection from "../components/createPositions/essentialInformation.section";
import PositionDetailsSection from "../components/createPositions/positionDetails.section";
import { JobDescriptionComponent } from "../components/createPositions/jobDescriptions.section";
import { AdditionalDetailComponent } from "../components/createPositions/additionalDetails.section";

interface ComponentState {
    [key: string]: any;
}

export default function CreatePositonPage() {
    const masterData =
    {
        "positionType": [
            {
                "id": 1,
                "data": "In-House"
            },
            {
                "id": 2,
                "data": "Client"
            }
        ],
        "clientType": [
            {
                "id": 1,
                "data": "Existing"
            },
            {
                "id": 2,
                "data": "New"
            }
        ],
        "workType": [
            {
                "id": 1,
                "data": "Full Time"
            },
            {
                "id": 2,
                "data": "Part Time"
            },
            {
                "id": 3,
                "data": "C2H"
            }
        ],
        "positionPriority": [
            {
                "id": 1,
                "data": "Low"
            },
            {
                "id": 2,
                "data": "Medium"
            },
            {
                "id": 3,
                "data": "High"
            },
            {
                "id": 4,
                "data": "Critical"
            }
        ],
        "experienceLevel": [
            {
                "id": 1,
                "data": "0 - 1 Years"
            },
            {
                "id": 2,
                "data": "1 - 3 Years"
            },
            {
                "id": 3,
                "data": "3 - 6 Years"
            },
            {
                "id": 4,
                "data": "6 - 9 Years"
            },
            {
                "id": 4,
                "data": "10 Years or More"
            }
        ],
        "shiftTiming": [
            {
                "id": 1,
                "data": "Day"
            },
            {
                "id": 2,
                "data": "Mid"
            },
            {
                "id": 3,
                "data": "Night"
            },
            {
                "id": 4,
                "data": "Rotational"
            }
        ],
        "billabilityType": [
            {
                "id": 1,
                "data": "Billable"
            },
            {
                "id": 2,
                "data": "Non- Billable"
            }
        ],
        "billableHours": [
            {
                "id": 1,
                "data": "4 Hours"
            },
            {
                "id": 2,
                "data": "8 Hours"
            }
        ],
        "department": [
            {
                "id": 1,
                "data": "Designer"
            },
            {
                "id": 2,
                "data": "Developement"
            },
            {
                "id": 3,
                "data": "Operation"
            },
            {
                "id": 4,
                "data": "Production"
            }
        ]
    }
    const [pageState, setPageState] = useState<ComponentState>({
        essentialInfo: {}, // Initialize with empty objects
        positionDetails: {},
        keySkills: {},
        jobDescription: "",
        additionalDetails: ""
    });

    const setComponentState = <T extends keyof ComponentState>(componentName: T, state: ComponentState[T]): void => {
        setPageState(prevState => ({
            ...prevState,
            [componentName]: state
        }));
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
                        <DatePicker
                            inputHeaderText={"saddsa"}
                            placeholderText={'adsadsa'}
                            onChange={() => { }}
                            onBlur={() => { }} />
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
                        <PositionInterviewProcess onToggle={() => { }} />
                    </div>
                </Accordion>



            </div>

        </div>
    );
}
