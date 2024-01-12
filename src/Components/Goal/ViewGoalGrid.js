import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import './setgoal.css'
import { ViewGoals } from './ViewGoals';
const ViewGoalDataGrid = ({ finalGoal, setFinalGoal }) => {
    const [selectedRowId, setSelectedRowId] = React.useState(null);
    const [selectedData, setSelectedData] = React.useState([]);
    const [proceed, setProceed] = React.useState(true);
    const handleRowClick = (id) => {
        setSelectedRowId(id);
        setSelectedData([finalGoal[id]]);
        setProceed(false);
    };

    const columns = [
        {
            field: 'Goal',
            headerName: 'Goal',
            width: window.innerWidth > 800 ? 430 : window.innerWidth > 400 ? 200 : 100,
            renderCell: (params) => (
                <div
                    style={{ fontSize: "14px" }}
                >
                    {params.value}
                </div>
            ),
            headerClassName: 'custom-column-header',
        },
        {
            field: 'Completed',
            headerName: 'Completed',
            width: 100,
            renderCell: (params) => (
                params.value ? <CheckIcon style={{ margin: "auto" }} /> : ''
            ),
            headerClassName: 'custom-column-header',
        },
        {
            field: 'NotCompleted',
            headerName: 'Not Completed',
            width: 120,
            renderCell: (params) => (
                params.value ? <CheckIcon style={{ margin: "auto" }} /> : ''
            ),
            headerClassName: 'custom-column-header',
        },
        {
            field: 'Pending',
            headerName: 'Pending',
            width: 100,
            renderCell: (params) => (
                params.value ? <CheckIcon style={{ margin: "auto" }} /> : ''
            ),
            headerClassName: 'custom-column-header',
        },
        {
            field: 'Actions',
            headerName: '',
            width: 90,
            renderCell: (params) => (
                <button
                    onClick={() => handleRowClick(params.row.id)}
                    style={{ cursor: 'pointer', backgroundColor: "#15375c", color: "#fff", padding: "4px 10px", fontSize: "14px" }}
                >
                    Details
                </button>
            ),
        },
    ];

    const rows = finalGoal.map((Items, index) => ({
        id: index,
        Goal: Items.goalTitle,
        Completed: Items.goalstatus === "Completed",
        NotCompleted: Items.goalstatus === "Not Completed",
        Pending: Items.goalstatus === "Pending"
    }))

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
                    <Box sx={{ height: "100%", width: '900px', margin: "auto" }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                            onSelectionModelChange={(newSelection) => {
                                setSelectedRowId(newSelection[0]);
                            }}
                        />
                    </Box>
                </div>
            }
            {
                !proceed && <ViewGoals finalGoal={selectedData} setFinalGoal={setSelectedData} setProceed={setProceed} />
            }
        </>
    );
};

export default ViewGoalDataGrid;
