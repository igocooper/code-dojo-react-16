import React, { Component, Fragment } from 'react';

import './App.css';
import logo from './logo.svg';

import { Tabs, Tab } from './components/Tabs';

const list = [
    {
        title: "step-1",
        text: "Download ⬇️"
    },
    {
        title: "step-2",
        text: "Install ⚙️"
    },
    {
        title: "step-3",
        text: "Enjoy ❤️"
    }
]

export default class App extends Component { 
    render() {
        return (
           <Fragment>
               <header>
                <img src={logo} alt="React logo" />
                <h1>React 16</h1>
            </header>
            <dl>
                {list.map(({title,text}, index) => {
                    return (
                        <Fragment key={index}>
                            <dt>{title}</dt>
                            <dd>{text}</dd>
                        </Fragment>
                    )
                })}
            </dl>

            <main>
                <Tabs>
                    <Tab label="Tab 1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae debitis repudiandae animi dignissimos voluptatibus! Facilis iste architecto possimus vero quo, accusamus asperiores nobis, ullam aliquam atque cumque laboriosam. Excepturi, totam.
                    </Tab>
                    <Tab label="Tab 2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus ipsa ad dolore quidem. Libero architecto unde placeat eum rerum, assumenda doloribus doloremque corporis nesciunt beatae quae autem sint, aspernatur sunt!
                    </Tab>
                    <Tab label="Tab 3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta laboriosam dolorem natus blanditiis laborum iusto quam officia nulla obcaecati alias ad eligendi facere laudantium, porro omnis architecto praesentium incidunt impedit!
                    </Tab>
                </Tabs>
            </main>
           </Fragment>        
        );
    }
}