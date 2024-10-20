import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const languages = [
    {
    name : "Japanese",
    code:"ja"
   },
   {
    name:"Hindi",
    code:"hi"
   },
   {
    name : "English",
    code : "en"
   },
   {
    name : "French",
    code : "fr"
   },
   {
    name : "spanish",
    code : "es"
   }
];
const Home = () => {
    const navigate = useNavigate()
    const languageHandler = (language:string):void =>{
        navigate(`/learn?language=${language}`)
    }
    return <Container maxWidth={"sm"}>
        <Typography variant="h3" p={"2rem"} textAlign={"center"}>
            Welcome, Begin your journey of learning
        </Typography>
        <Stack direction={"row"}
            spacing={"2rem"}
            p={"2rem"}
            alignItems={"center"}
            justifyContent={"center"}>
                {
                    languages.map((language)=>(
                        <Button onClick={()=>languageHandler(language.code)} key={language?.code} variant='contained'>
                            {language?.name}
                        </Button>
                    ))
                }
        </Stack>
        <Typography textAlign={"center"}>Choose one language from above</Typography>
    </Container>
};

export default Home;