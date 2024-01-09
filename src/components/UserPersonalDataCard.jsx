import React from 'react'
import './UserPersonalDataCard.css'

function UserPersonalDataCard({username}) {

    const truncatedUsername = username.length > 10 ? `${username.slice(0, 10)}...` : username;
    const windowWidth = window.innerWidth;

  return (
    <section className='userPersonalDataCard'>  
                <article className='updcArticle'>
                    <div className='updcImg'>
                        <img src="https://miro.medium.com/v2/resize:fit:1200/1*Fb0XBbV8Z8W7UUHuq69CFA.jpeg" alt="User Profile" />
                    </div>

                    <section className='updcSectionData'>

                        <div className='updcNameData'>
                            <p>Usuario</p>
                            <h2>{windowWidth>850? username:truncatedUsername}</h2>
                        </div>

                        <div className='updcMoneyData'>
                            <p>Dinero en cuenta</p>
                            <span>$5.000</span>
                        </div>
                    </section>
                </article>
                

                <aside className='updcDataShort'>
                    
                    <div className="updcShortItems">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                        </svg>
                        <h5>Favoritos</h5>
                    </div>

                    <div className="updcShortItems">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                        <h5>Historial</h5>
                    </div>

                    <div className="updcShortItems">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
                        </svg>
                        <h5>Cerrar Sesión</h5>
                    </div>
                </aside>

    </section>

  )
}

export default UserPersonalDataCard