import {useRef, useState, useEffect} from 'react'
	

	

	const Login=()=>{
	const [email, setEmail] = useState('');
	const [password,setPassword]=useState('')
	const [userAuth,setuserAuth]=useState('default')
	

	const getrequestOptions={
	  method:'GET'
	}
	

	  const onSubmit = async (event) => { //Submit the event, and send the username and password to Flask
	    event.preventDefault()
	    console.log({email,password})
	    
	    
	      fetch('http://localhost:5000/api/creds/', {
	            'method':'POST',
	             headers : {
	            'Content-Type':'application/json'
	             },
	      body:JSON.stringify({email,password})})
	

	      const response=await (fetch('http://localhost:5000/api/auth/',
	      getrequestOptions)
	      .then(response=>response.json())
	      .then(data=>setuserAuth(data['authetication'])))
	        
	}
	useEffect(()=>{
	  if(userAuth!='default' && userAuth!='1'){
	    console.log(userAuth)
	  }},[userAuth])
	

	    return(  //Create a form and send it
	        <div className='Login' onSubmit={onSubmit}>
	        <form>
	        Email ID            
	        <input type='text'
	        id='email'
	        name='email'
	        onChange={(e)=>setEmail(e.target.value)}
	        value={email} />
	        Password
	

	        <input type='password'
	        id='password'
	        name='password'
	        onChange={(e)=> setPassword(e.target.value)} 
	        value={password} />
	        <input type='submit' value='Login' />
	    
	    </form>
	    </div>
	    )
	}
	export default Login

