import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Grid from '@mui/material/Grid';

export default function HomePage() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <h2>Sidebar</h2>
        </Grid>
      </Grid>
    </div>
  )
}
