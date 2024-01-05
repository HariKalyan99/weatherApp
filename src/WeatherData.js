import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import AirIcon from '@mui/icons-material/Air';
import UpdateIcon from '@mui/icons-material/Update';
import NearMeIcon from '@mui/icons-material/NearMe';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function BasicCard({location, current, foreCast, countryName, forecastAstro}) {

  const time = new Date(location.localtime);



  const [getReport, setReport] = React.useState(foreCast)
 

  React.useEffect(() => {
    const ele = document.querySelector(".wrapper");

    ele.addEventListener("wheel", (event) => {
      event.preventDefault();
  
      ele.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      })
    });

    
  }, [])

  return (
   
  <Grid container columns={12} className="grid-con">
  <Grid xs={12} md={6} lg={4} padding={6} >
  <Card  sx={{ minWidth: 300, height:400, background:"radial-gradient(circle, rgba(237,242,242,0.6190275493421053) 98%, rgba(4,28,75,0) 100%)", padding: "0.2rem", boxShadow:"0em 0em 3em 0em  black", borderRadius: "12px"}}>
  <CardContent sx={{ height: "100%"}}>
  <Box sx={{ flexGrow: 1 }}>
  
  <Grid container spacing={4} columns={12}>

    <Grid xs={6}>
      
    <Typography variant="h6" gutterBottom>
        Country <NearMeIcon sx={{fontSize: "1rem"}}/>
      </Typography>
      <Typography variant="h6" gutterBottom>
        Latitude
      </Typography>
      <Typography variant="h6" gutterBottom>
        Longitude
      </Typography>
      <Typography variant="h6" gutterBottom>
        Local Time
      </Typography>
      <Typography variant="h6" gutterBottom>
        Date
      </Typography>
      <Typography variant="h6" gutterBottom>
        Timezone-Id
      </Typography>
    </Grid>
    <Grid xs={6} >
    <Typography variant="h6" gutterBottom sx={{textAlign: "end"}}>
        {location.country}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{textAlign: "end"}}>
        {location.lat}°
      </Typography>
      <Typography variant="h6" gutterBottom sx={{textAlign: "end"}}>
        {location.lon}°
      </Typography>
      <Typography variant="h6" gutterBottom sx={{textAlign: "end"}}>
        {time.toLocaleTimeString()}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{textAlign: "end"}}>
        {time.toLocaleDateString()}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{textAlign: "end"}}>
       {location["tz_id"]}
      </Typography>
      
    </Grid>
    <Grid xs={12}>
      
      <Box sx={{display: "flex", border: "0.1rem solid white", background: "white", borderRadius: "0.5rem", height: "5rem", justifyContent: "center"}}>
        <img src={countryName} alt={location.country} > 
        </img>
        
      </Box>
    </Grid>
  </Grid>
  
</Box>
  </CardContent>
  </Card>
  </Grid>
  <Grid xs={12} md={6} lg={4} padding={6} >
  <Card sx={{ minWidth: 300, height: "auto", background: "radial-gradient(circle, rgba(19,46,102,0.7137643914473684) 98%, rgba(4,28,75,0) 100%)",  padding: "0.2rem", boxShadow:"0em 0em 3em 1em white", borderRadius: "12px"}} >
  <CardContent sx={{ height: "100%"}}>
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={1} columns={12}>
  <Grid xs={12} sx={{color: "#fff"}}>
        <Box sx={{display: "flex", justifyContent: "flexstart", columnGap: "2rem", alignItems: "center"}}>

          <img src={current.condition.icon} alt={current.condition.icon} > 
          </img>
          
      <Typography variant='h6'>{current.condition.text}</Typography>
      </Box>


    </Grid>
    <Grid xs={6}>
    <Typography variant="subtitle1" gutterBottom sx={{color: "#fff"}}>
        <span style={{color: 'black', fontWeight: "bold"}}>Temperature:</span> {current["temp_c"]}C°/{current["temp_f"]}F°
        <br />
        <span style={{color: 'black', fontWeight: "bold"}}>Humidity:</span> {current.humidity}%
        <br />
        <span style={{color: 'black', fontWeight: "bold"}}>Pressure:</span> {current["pressure_in"]}in/{current["pressure_mb"]}mb
      </Typography>
    </Grid>
    <Grid xs={6}>
    <Typography variant="subtitle1" gutterBottom sx={{color: "#fff"}}>
        <span style={{color: 'black', fontWeight: "bold"}}>Feels Like:</span> {current["feelslike_c"]}C°/{current["feelslike_f"]}F°
        <br />
        <span style={{color: 'black', fontWeight: "bold"}}>Wind speed:</span> {current["wind_kph"]}
        <br />
        <span style={{color: 'black', fontWeight: "bold"}}>UV:</span> {current.uv}
      </Typography>

    </Grid>
    <Grid xs={12} sx={{color: "#fff"}}>
      <Box sx={{display: "flex", justifyContent: "center", columnGap: "1rem", alignItems: "center", border: ".1rem solid white", borderRadius: "1.8rem"}}>
      <AirIcon  sx={{fontSize: "3rem"}} />
      <Typography variant='h6'>Air quality index(AQI)</Typography>
      </Box>
    </Grid>

    <Grid xs={5} sx={{display: "flex", justifyContent: "flex-end"}}>
    <Typography variant="subtitle1" gutterBottom sx={{color: "#fff"}}>
        <span style={{color: 'black', fontWeight: "bold"}}>co: </span> {current["air_quality"]["co"]}ppb
        <br />
        <span style={{color: 'black', fontWeight: "bold"}}>no2: </span> {current["air_quality"]["no2"]}µg/m³
        <br />
        <span style={{color: 'black', fontWeight: "bold"}}>gb-defra-index: </span> {current["air_quality"]["gb-defra-index"]}
      </Typography>
    </Grid>
    <hr />
    <Grid xs={5} >
    <Typography variant="subtitle1" gutterBottom sx={{color: "#fff"}}>
        <span style={{color: 'black', fontWeight: "bold"}}>o3: </span> {current["air_quality"]["o3"]}µg/m³
        <br />
        <span style={{color: 'black', fontWeight: "bold"}}>so2: </span> {current["air_quality"]["so2"]}µg/m³
        <br />
        <span style={{color: 'black', fontWeight: "bold"}}>us-epa-index: </span> {current["air_quality"]["us-epa-index"]}
      </Typography>

    </Grid>
    <Grid xs={12} sx={{color: "#fff"}}>
    <hr />
      <Box sx={{display: "flex", justifyContent: "center", columnGap: "1rem", alignItems: "center"}}>
      <UpdateIcon  sx={{fontSize: "2rem"}} />
      <Typography variant='h6'>Last Updated: {current["last_updated"]}</Typography>
      </Box>
    </Grid>
  </Grid>
</Box>
  </CardContent>

  </Card>
  </Grid>



  <Grid xs={12} md={6} lg={4} padding={6} >
  <Card sx={{ minWidth: 300, height:400, background:"radial-gradient(circle, rgba(237,242,242,0.6190275493421053) 98%, rgba(4,28,75,0) 100%)",  boxShadow:"0em 0em 3em 0em black", borderRadius: "12px"}}>
  <CardContent sx={{ height: "100%"}}>
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2} columns={12}>
    <Grid xs={12}>
      <Typography variant='h6'><EventRepeatIcon sx={{fontSize: "1.2rem"}}/> Day forecast </Typography>
      <Box sx={{display: "flex", border: "0.1rem solid white", background: "black", borderRadius: "0.5rem", height: "12rem",  alignItems: "center", padding: "1rem"}}>
        <Box className="wrapper">
        <KeyboardDoubleArrowRightIcon sx={{fontSize: "5rem"}}/>
          {getReport.map(({condition, time}) => {
            return (
              <Box className="wrapper-item">
                
              <Typography variant='subtitle1' sx={{textAlign: "center"}}>{condition.text}</Typography>
              <img src={condition.icon} alt='icons'></img>
              <Typography variant='subtitle2' sx={{textAlign: "center"}}>{time}</Typography>
              </Box>
            )
          })}
        </Box>
        </Box>
    </Grid>
    <Grid xs={6}>
    <Box sx={{display: "flex", border: "0.1rem solid white",flexDirection:"column", backgroundImage: "url(https://cdn.vectorstock.com/i/preview-1x/01/18/sun-in-clouds-3d-sunny-weather-elements-white-vector-45910118.jpg)", borderRadius: "0.5rem", justifyContent: "center", height: "5rem", paddingLeft: "0.4rem" }}>
      <Typography variant='subtitle2' color={'black'} fontWeight={"bold"}>Sunrise: {forecastAstro.forecastday[0].astro.sunrise}</Typography>
      <Typography variant='subtitle2' color={'black'} fontWeight={"bold"}>Sunset: {forecastAstro.forecastday[0].astro.sunset}</Typography>
      </Box>
    </Grid>
    <Grid xs={6}>
    <Box sx={{display: "flex", border: "0.1rem solid white", flexDirection:"column", backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76b9748d-d84d-42ac-b02f-e10d992c35a8/dg25p0f-cfc64c2c-b773-49e9-a364-1faafba66087.png/v1/fit/w_414,h_233,q_70,strp/moon_rise_on_asgard_by_lolothedabbler_dg25p0f-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNzZiOTc0OGQtZDg0ZC00MmFjLWIwMmYtZTEwZDk5MmMzNWE4XC9kZzI1cDBmLWNmYzY0YzJjLWI3NzMtNDllOS1hMzY0LTFmYWFmYmE2NjA4Ny5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.C8BqsTgnj4Vitnw06tP0SA8VXMgF24niRDZrvmMxzqQ)", borderRadius: "0.5rem", justifyContent: "center", height: "5rem", paddingLeft: "0.4rem" }}>
      <Typography variant='subtitle2' color={'white'} fontWeight={"bold"} >Moonrise: {forecastAstro.forecastday[0].astro.moonrise}</Typography>
      <Typography variant='subtitle2' color={'white'} fontWeight={"bold"}>Moonset: {forecastAstro.forecastday[0].astro.moonset}</Typography>

      </Box>
    </Grid>
  </Grid>
</Box>
  </CardContent>

  </Card>
  </Grid>

</Grid>

   



  );
}
