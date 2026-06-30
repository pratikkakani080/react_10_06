import React from 'react'
import { NavLink, Outlet } from 'react-router'

const blogs: any = [
    {
        id: 1,
        title: 'title 1',
        description: 'desc 1',
    },
    {
        id: 2,
        title: 'title 2',
        description: 'desc 2',
    },
    {
        id: 3,
        title: 'title 3',
        description: 'desc 3',
    },
    {
        id: 4,
        title: 'title 4',
        description: 'desc 4',
    },
    {
        id: 5,
        title: 'title 5',
        description: 'desc 5',
    },
]

export default function Blogs() {
    return (
        <div>
            {
                blogs.map((el: any) => {
                    return (
                        <NavLink to={`/blog-details/${el.title}`} key={el.id}>
                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                        </NavLink>
                    )
                })
            }
            {/* <Outlet /> */}
        </div>
    )
}
