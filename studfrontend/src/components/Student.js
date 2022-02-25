import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Student() {
  const paperStyle = { padding: '50px 30px', width: 600, margin: '20px auto' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, getStudents] = useState('');
  const handleClick = (event) => {
    event.preventDefault();
    const student = { name, address };
    fetch('http://localhost:8080/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    }).then(() => {});
  };

  useEffect(() => {
    fetch('http://localhost:8080/student/view')
      .then((res) => res.json())
      .then((result) => {
        getStudents(result);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={4} style={paperStyle}>
        <h1 style={{ color: 'blue', margin: '0px', padding: '5px' }}>
          Enter New Student data
        </h1>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '65ch' }
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Address'
            variant='outlined'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Box>
        <Button variant='contained' color='success' onClick={handleClick}>
          Submit
        </Button>
      </Paper>

      <h1>Student Details Available</h1>

      {/* <Paper elevation={4} style={paperStyle}>
        {students.map((student) => {
          <Paper
            elevation={8}
            style={{ margin: '10px', padding: '15px', textAlign: 'left' }}
            key={student.id}
          >
            Id : {student.id}
            Name : {student.name}
            Address : {student.address}
          </Paper>;
        })}
        ;
      </Paper> */}

      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{ margin: '10px', padding: '15px', textAlign: 'left' }}
            key={student.id}
          >
            Id:{student.id}
            <br />
            Name:{student.name}
            <br />
            Address:{student.address}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
