import React from 'react';
import MenuBar from './MenuBar';
import DataTable from './DataTable';


const RightSide = () => {
    return (
        <div className="lg:w-[100%] ml-5">
          <MenuBar />
          <DataTable />
        </div>
    );
};

export default RightSide;