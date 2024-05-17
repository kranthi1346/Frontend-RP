"use client"
import React from 'react';
import CustomButtons from './CustomButtons.component';
import CustomImage from './CustomImage.component';
import Tag from './postions/postionsTags.component';
interface PositionTableProps {
}
//This is just for UI mapping and UI related changes, this key will be replaced by Dynamic API data.
const postionsMockJSON = [{
    'positonTitle': 'Operation Manager',
    'positonID': '2344R5',
    'department': 'Operations',
    'workType': 'Full Time',
    'location': 'Lucknow',
    'hiringManager': 'John Doe',
    'nosPosition': '10',
    'openingDate': '22 May, 2023',
    'targetDate': '30 May, 2023 ',
    'candidates': '30',
    'status': 'Active',
    'positionTimeline': [],
},
{
    'positonTitle': 'Marketing Manager',
    'positonID': '2344R6',
    'department': 'Marketing',
    'workType': 'Full Time',
    'location': 'Lucknow',
    'hiringManager': 'John Doe',
    'nosPosition': '10',
    'openingDate': '22 May, 2023',
    'targetDate': '30 May, 2023 ',
    'candidates': '30',
    'status': 'Closed',
    'positionTimeline': [],
},
{
    'positonTitle': 'Project Manager',
    'positonID': '2344R7',
    'department': 'Production',
    'workType': 'Full Time',
    'location': 'Lucknow',
    'hiringManager': 'John Doe',
    'nosPosition': '10',
    'openingDate': '22 May, 2023',
    'targetDate': '30 May, 2023 ',
    'candidates': '30',
    'status': 'On-Hold',
    'positionTimeline': [],
},

]
const PositionTable: React.FC<PositionTableProps> = () => {
    return (
        <div style={{ zIndex: 1 }}>

            <div className="relative bg-gray-100  mt-3 rounded-3xl h-[80vh] overflow-hidden ">
                <table className="w-full table-fixed border-b border-[#D4D4D4]">
                    <thead className="top-0 sticky">
                        <tr className="pl-1 bg-[#697785] text-left text-white text-[12px] ">
                            <th className="font-bold py-2 px-5  w-1/6">Position Title</th>
                            <th className="font-bold py-2 px-5 w-1/10">Department</th>
                            <th className="font-bold py-2 px-5 w-1/10">Work Type</th>
                            <th className="font-bold py-2 px-5 w-1/10">Location</th>
                            <th className="font-bold py-2 px-5 w-1/10">Hiring Manager</th>
                            <th className="font-bold py-2 px-5 w-1/10">No. of Position</th>
                            <th className="font-bold py-2 px-5 w-1/10">Opening Date</th>
                            <th className="font-bold py-2 px-5 w-1/10">Target Date</th>
                            <th className="font-bold py-2 px-5 w-1/10">Candidates</th>
                            <th className="font-bold py-2 px-5 w-1/8">Status</th>
                            <th className="font-bold py-2 px-5 w-1/10">Position Timeline</th>
                            <th className="font-bold py-2 px-5 w-1/10">Action</th>
                        </tr>
                    </thead>
                    <tbody className="col-start-10">
                        {postionsMockJSON.map((row, index) => <tr className="bg-transparent text-left" key={index}>
                            <td className="py-2 px-5 text-[#FF6000] border-r  font-bold">{row.positonTitle}</td>
                            <td className="py-2 px-5 border-r ">{row.department}</td>
                            <td className="py-2 px-5 border-r ">{row.workType}</td>
                            <td className="py-2 px-5 border-r ">{row.location}</td>
                            <td className="py-2 px-5 border-r ">{row.hiringManager}</td>
                            <td className="py-2 px-5 border-r ">{row.nosPosition}</td>
                            <td className="py-2 px-5 border-r ">{row.openingDate}</td>
                            <td className="py-2 px-5 border-r ">{row.targetDate}</td>
                            <td className="py-2 px-5 border-r ">{row.candidates}</td>
                            <td className="py-2 px-5 border-r ">
                                <Tag name={row.status} />

                            </td>
                            <td className="py-2 px-5 border-r ">Show Timeline</td>
                            <td className="py-2 px-5 border-r ">Action</td>

                        </tr>)}

                    </tbody>
                </table>


                <div className='flex flex-col ml-28 mt-28'>
                    <div className="flex justify-center items-center">
                        {/* <CustomImage name='noRecord'/> */}
                        {/* <CustomImage name='noResult' /> */}
                    </div>
                    <div className="flex justify-center items-center pt-1">
                        {/* <h2 className='font-bold text-[16px]'>There are no records to show.</h2> */}
                        {/* <h2 className='font-bold text-[16px]'>No Results Found</h2> */}
                    </div>
                    <div className="flex justify-center items-center pt-3">

                        {/* <CustomButtons
                            buttonType="border"
                            title="Create New Position"
                            onClick={() => { }}
                            fontColor="white"
                            fontSize="12px"
                            paddingX="px-[12px]"
                            paddingY="py-[10px]"
                            borderColor="bg-[#2578C3]"
                            buttonColor="bg-[#2578C3]"
                            hoverColor="bg-[#2578C3]"
                        /> */}

                        {/* <h2 className='font-normal text-[12px]'>Sorry, no results were found. Please check the filter or search and try a different keyword.</h2> */}
                    </div>
                </div>






                <div className='absolute bottom-0 flex items-center justify-between w-full px-5 pb-5'>
                    <div className=''>
                        <h2 className='text-[12px] font-normal'>Showing 10 items out of 42 results found</h2>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-8 h-8 flex items-center justify-center bg-white border border-[#CECECE] rounded-full">
                            <CustomImage name='leftArrow' />
                        </div>
                        <div className="w-8 h-8 flex text-white items-center justify-center  bg-[#2578C3]  border border-[#CECECE] rounded-full">
                            1
                        </div>
                        <div className="w-8 h-8 flex items-center text-gray-600 justify-center  bg-white  border border-[#CECECE] rounded-full">
                            2
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center  bg-white  border border-[#CECECE] rounded-full">
                            <CustomImage name='rightArrow' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PositionTable;