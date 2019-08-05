import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class DashboardPage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }


    render() {
        const { user, users } = this.props;
        
        
        return (    
            <div >
      <p>Hello !!! Welcome To Employee Display Page</p>

      <table>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone no</th>
          {users.items &&
                         <tbody>                 {
                            users.items.map((user, i) =>
                            {
                                return (
                                    <tr key={i}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneno}</td>
                                    </tr>
                                )
                            })
                          
                        }
                  </tbody>
                }
             
                </table>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll
}

const connectedDashboardPage = connect(mapState, actionCreators)(DashboardPage);
export { connectedDashboardPage as DashboardPage };