import { Grid, } from '@mui/material';
import AppToolBar from './Components/Common/AppBar';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';


const App: React.FC = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppToolBar />
      </Grid>
      <Grid item xs={12}>
        <div style={{padding: 30, marginTop: 45}}>
        <RouterProvider router={routes} /> 
        </div>
      </Grid>
    </Grid>
  );
};

export default App;

