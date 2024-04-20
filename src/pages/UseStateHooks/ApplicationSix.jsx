import React, { useState } from 'react'

const sex = ['Male', 'Female', 'Others'];
const skillLevel = ['Normal', 'Medium', 'Expert', 'Professional'];
const initState = {
    name: '',
    sex: sex[0],
    skill: skillLevel[0]
}

const ApplicationSix = () => {

  const [user, setUser] = useState(initState);
  const [userList, setUserList] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, user]);
    setUser(initState);
  }

  const countSkillUser = (skill) => {
    let userCount = 0;
    if (userList.length === 0) {
        return userCount;
    }
    userList.map((value) => {
        if (value.skill === skill) {
            userCount++;
        }
    });
    return userCount;
  }

  const countSexUser = (sex) => {
    let userCount = 0;
    if (userList.length === 0) {
        return userCount;
    }
    userList.map((value) => {
        if (value.sex === sex) {
            userCount++;
        }
    });
    return userCount;
  }

  const countCombination = (skill, sex) => {
    let userCount = 0;
    if (userList.length === 0) {
        return userCount;
    }
    userList.map((value) => {
        if (value.sex === sex && value.skill === skill) {
            userCount++;
        }
    })
    return userCount;
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <strong>Application #5</strong>
            </div>
            <div className='card-body'>
              <form onSubmit={handleFormSubmit}>
                <div className='form-group mb-2'>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' name='name' id='name' className='form-control' placeholder='Name' required value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                </div>
                <div className='form-group mb-2'>
                  <label>Sex:</label>
                  {
                    sex.length > 0 &&
                    sex.map((value, index) => {
                        return (
                            <div className='form-check' key={index}>
                                <input type='radio' name='sex' id={'sex' + index} value={value} checked={user.sex === value} onChange={(e) => setUser({...user, sex: e.target.value})} />
                                &nbsp;<label htmlFor={'sex' + index}> {value}</label>
                            </div> 
                        )
                    })
                  }
                </div>
                <div className='form-group mb-2'>
                    <label>Skill Level:</label>
                    {
                        skillLevel.length > 0 &&
                        skillLevel.map((value, index) => {
                            return (
                                <div className='form-check' key={index}>
                                    <input type='radio' name='skill' id={'skill' + index} value={value} checked={user.skill === value} onChange={(e) => setUser({...user, skill: e.target.value})} />
                                    &nbsp;<label htmlFor={'skill' + index}>{value}</label>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='form-group mt-3'>
                  <button type='submit' className='btn btn-primary'>Add To List</button>
                </div>
              </form>
            </div>
            <div className='card-footer'>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Sex:</strong> {user.sex}
              </p>
              <p>
                <strong>Skill:</strong> {user.skill}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <strong>User List ({userList.length})</strong>
            </div>
            <div className='card-body'>
              {
                userList.length > 0 && 
                userList.map((value, index) => {
                  return (
                    <li key={index}>
                      <strong>{index + 1}:</strong> {value.name} ({value.sex}) - <i>{value.skill}</i>
                    </li>
                  )
                })
              }
              { 
                userList.length === 0 && ('User List is Empty!') 
              }
            </div>
            <div className='card-footer'>
                <div className='holder'>
                    <div><strong>Skill Wise:</strong></div>
                    <table className='table table-bordered'>
                        <tbody>
                            {
                                skillLevel.length > 0 &&
                                skillLevel.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{width: '75%'}}>{value}</td>
                                            <td>{countSkillUser(value)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='holder'>
                    <div><strong>Sex Wise:</strong></div>
                    <table className='table table-bordered'>
                        <tbody>
                            {
                                sex.length > 0 &&
                                sex.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{width: '75%'}}>{value}</td>
                                            <td>{countSexUser(value)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='holder'>
                    <div><strong>Sex + Skill Wise:</strong></div>
                    <table className='table table-bordered'>
                        <tbody>
                            {
                                skillLevel.length > 0 &&
                                skillLevel.map((skillValue, skillIndex) => {
                                    return (
                                        sex.length > 0 &&
                                            sex.map((sexValue, sexIndex) => {
                                                return (
                                                    <tr key={skillIndex}>
                                                        <td key={skillIndex + sexIndex} style={{width: '75%'}}>{skillValue} & {sexValue}</td>
                                                        <td>{countCombination(skillValue, sexValue)}</td>
                                                    </tr>
                                                )
                                        })
                                    ) 
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationSix