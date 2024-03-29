import { useSelector, useDispatch } from 'react-redux';
import { createUser, deleteUser } from './userSlice';


function LogIn() {

    const username = useSelector((state) => state.user.username);
    const dispatch = useDispatch();

    function handleLogIn(){

        let newUser = prompt('Please enter a name to log in.');

        if(newUser !== null){
            newUser = newUser.trim();
        }

		while(newUser !== null && newUser === ''){
			newUser = prompt('Please enter a valid name to log in.');
            if(newUser !== null){
                newUser = newUser.trim();
            }
        }

        dispatch(createUser(newUser));

    }

    function handleLogOut(){
        dispatch(deleteUser());
    }

    return (
        <>
            {username === null ? 
                <button className='login-styling' onClick={handleLogIn}>Log In</button> : 
                <button className='login-styling' onClick={handleLogOut}>Log Out</button> 
            }
        </>
    );
}

export default LogIn;
