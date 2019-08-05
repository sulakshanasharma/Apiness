import { userConstants } from '../_constants';
import { history } from '../_helpers';

export const userActions = {
    login,
    getAll,
};

var loginJson=
{
    "username" : "hruday@gmail.com",
    "password" : "hruday123"

}
 
var jsonemp=[
{  
          "id":       1,   
        "name":      "test1",   
        "age":    11,
        "gender":"male",
        "email":"test1@gmail.com",
        "phoneno":"9415346313"  
     
},
{  
      
    "id":       2,   
    "name":      "test2",   
    "age":    12,
    "gender":"male",
    "email":"test2@gmail.com",
    "phoneno":"9415346314"
 
},
{
    "id":       3,   
    "name":      "test3",   
    "age":    13,
    "gender":"male",
    "email":"test3@gmail.com",
    "phoneno":"9415346315" 
},
{
    "id":       4,   
    "name":      "test4",   
    "age":    14,
    "gender":"male",
    "email":"test4@gmail.com",
    "phoneno":"9415346316" 
},
{
    "id":       5,   
    "name":      "test5",   
    "age":    15,
    "gender":"male",
    "email":"test5@gmail.com",
    "phoneno":"9415346317" 
},
{
    "id":       6,   
    "name":      "test6",   
    "age":    16,
    "gender":"male",
    "email":"test6@gmail.com",
    "phoneno":"9415346318" 
}
]

function login(username, password) {
    return dispatch => {
        request(username);

        if(username==loginJson.username && password==loginJson.password)
        {
          success(username);
          history.push('/dashboard');
        }
        else
        {
            failure(error.toString());
                   
        }
      };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


function getAll() {
    
return success(jsonemp)
    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(jsonemp) { return { type: userConstants.GETALL_SUCCESS,jsonemp } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

