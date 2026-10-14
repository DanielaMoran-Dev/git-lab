import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../../form/ActivityForm";


type Props = {
    activities: Activity[]; 
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity: Activity | undefined;
    editMode: boolean;
    openForm: (id?: string) => void;
    closeForm: () => void;
    submitForm: (activity: Activity) => void;
};

export default function ActivityDashboard({ 
    activities, 
    selectActivity, 
    cancelSelectActivity, 
    selectedActivity, 
    editMode,
    openForm, 
    closeForm,
    submitForm }: Props) {
    return (
        <Grid container spacing={3}>
            <Grid size={5}>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid>
            <Grid size={5}>
                {selectedActivity && !editMode && 
                    <ActivityDetail
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity} 
                        openForm={openForm} />
                    }
                    {editMode &&
                        <ActivityForm 
                            closeForm={closeForm} 
                            activity={selectedActivity}
                            submitForm={submitForm} />}
            </Grid>
        </Grid>
    )
}

