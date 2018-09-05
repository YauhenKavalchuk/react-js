import React, { Fragment, Component } from 'react';

const Tab1 = () => (
  <h1>Text of tab1</h1>
)

const Tab2 = () => (
  <h1>Text of tab2</h1>
)

const Tab3 = () => (
  <h1>Text of tab3</h1>
)

const people = ['Jack', 'Max', 'Leo', 'Alex'];

const TABS_BTN = [
  {
    dataName: 1,
    title: 'Tab1',
    icon: '+',
  },
  {
    dataName: 2,
    title: 'Tab2',
    icon: '-',
  },
  {
    dataName: 3,
    title: 'Tab3',
    icon: '*',
  }
];

class App extends Component {

    state = {
      activeTab: 1,
    }

    handleTab = (e) => {
      this.setState({
        activeTab: +e.target.getAttribute('data-name'),
      })
    }

    render() {
      const { activeTab } = this.state
      return (
        <Fragment>
          {TABS_BTN.map(({ dataName, title, icon }) => (
            <button
              key={`${dataName}-${title}`}
              data-name={dataName}
              onClick={this.handleTab}
            >{icon}{title}</button>
          ))}
          {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3/>}
          <div>
            {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
          </div>
          <ul>
            {people.map((person, index) => (
              <li key={index}>{person}</li>
            ))}
          </ul>
        </Fragment>
      );
    }
}

export default App
