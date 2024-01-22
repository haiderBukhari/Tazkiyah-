import * as React from 'react';
import './setgoal.css'
import GoalAcheivement from './GoalAcheivement';
import { ViewGoalPage } from './ViewGoalPage';

const ViewGoalDataGrid = ({ finalGoal, setFinalGoal }) => {
    const [selectedRowId, setSelectedRowId] = React.useState(null); //eslint-disable-line
    const [selectedData, setSelectedData] = React.useState([]);
    const [proceed, setProceed] = React.useState(true);
    const handleRowClick = (id, data) => {
        setSelectedRowId(id);
        setSelectedData([data]);
        setProceed(false);
    };

    return (
        <>
            {
                proceed && <div style={{ margin: "auto" }}>
                    <h1 className='text-center font-semibold main-heading mb-10' style={{ paddingTop: '50px', fontSize: '28px' }}>Edit Your Goals</h1>
                    <GoalAcheivement edit={true} handleRowClick={handleRowClick} />
                </div>
            }
            {
                !proceed && <ViewGoalPage selectedGoal={selectedData} proceed={proceed} setProceed={setProceed}/>
            }
        </>
    );
};

export default ViewGoalDataGrid;
