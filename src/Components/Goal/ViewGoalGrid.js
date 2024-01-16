import * as React from 'react';
import './setgoal.css'
import GoalAcheivement from './GoalAcheivement';
import { ViewGoalPage } from './ViewGoalPage';

const ViewGoalDataGrid = ({ finalGoal, setFinalGoal }) => {
    const [selectedRowId, setSelectedRowId] = React.useState(null);
    const [selectedData, setSelectedData] = React.useState([]);
    const [proceed, setProceed] = React.useState(true);
    const handleRowClick = (id) => {
        setSelectedRowId(id);
        setSelectedData([finalGoal[id]]);
        setProceed(false);
    };

    React.useEffect(() => {
        if (selectedRowId !== null && proceed) {
            const data = [...finalGoal];
            data[selectedRowId] = selectedData[0];
            setFinalGoal(data);
            localStorage.setItem('FinalGoal', JSON.stringify(data));
            setSelectedRowId(null);
        }
    }, [proceed, selectedRowId]) //eslint-disable-line
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
