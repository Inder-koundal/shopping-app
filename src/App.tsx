import { Grid, } from '@mui/material';
import AppToolBar from './Components/Common/AppBar';
import ProductList from './Components/Views/Products/ProductList';


const App: React.FC = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
        <AppToolBar />
      </Grid>
      <Grid item xs={12}>
        <div style={{padding: 30}}>
          <ProductList />
        </div>
      </Grid>
    </Grid>
  );
};

export default App;

