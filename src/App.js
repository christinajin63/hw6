import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IntroText from './components/Introtext/IntroText';
import Card from './components/Card/Card';
// import landmark from './images/base.jpg';
// import redRect from './images/redRect.png';
// import blueRect from './images/blueRect.png';

class App extends Component {

  state = {
      currentLocation: "shanghai",
      
      locations: {
              shanghai: {
                    mainimg: '/images/pearltowerMain.png',
                    mainCity: "Shanghai",
                    mainLandmark: "Pearl Tower",
                    mainDes: "is a TV tower in Shanghai. Its location at the tip of Lujiazui in the Pudong New Area by the side of Huangpu River, opposite The Bund, makes it a distinct landmark in the area. Its principal designers were Jiang Huan Chen, Lin Benlin, and Zhang Xiulin. Construction began in 1991, and the tower was completed in 1994.",
                    mapImage: "/images/shanghaiMap.png",
                    foods: [
                              {
                                money: "$$$",
                                name: "something 1",
                                description: "somethingaosfosehfoiw",
                                foodpic: "jpg"
                                
                              },
                              {
                                money: "$$$",
                                name: "something 2",
                                description: "somethingaosfosehfoiw"
                              },
                              {
                                money: "$$$",
                                name: "something 3",
                                description: "somethingaosfosehfoiw"
                              },
                              {
                                money: "$$$",
                                name: "something 4",
                                description: "somethingaosfosehfoiw"
                              }
                            ] 
                      },
              malaysia: {
                mainimg: '/images/twintowerMain.png',
                mainCity: "Malaysia",
                mainLandmark: "Petronas Twin Towers",
                mainDes: "The 88-storey twin toppers hold the title for 12th tallest skyscrapers in the world, and to date are the only twin towers to do so, making them number one in that category. The iconic Skybridge that links the two together acts as a tendon of sorts, keeping the sisters from swaying too much during high winds. The towers were constructed during the administration of the fourth Prime Minister of Malaysia, Dr Mahathir Mohamad, who set the building of each tower as a competition between the constructors from Korea and Japan. The Koreans won, finishing both their part and the Skybridge a week earlier. Like most other notable buildings, the towers sport a prominent Islamic influence; their bases are shaped to be of eight-pointed stars.",
                mapImage: "/images/malaysiaMap.png",
                foods: [
                          {
                            money: "$$$",
                            name: "something 1",
                            description: "somethingaosfosehfoiw",
                            foodpic: "jpg"
                            
                          },
                          {
                            money: "$$$",
                            name: "something 2",
                            description: "somethingaosfosehfoiw"
                          },
                          {
                            money: "$$$",
                            name: "something 3",
                            description: "somethingaosfosehfoiw"
                          },
                          {
                            money: "$$$",
                            name: "something 4",
                            description: "somethingaosfosehfoiw"
                          }
                        ] 
                  },

      },
  }

  image1clickhandler = () => {
    this.setState({currentLocation: "malaysia"})
  }

  render() {

    var selected;
    if(this.state.currentLocation === "shanghai"){
      selected = this.state.locations.shanghai;
    }
    else if(this.state.currentLocation  === "malaysia"){
      selected = this.state.locations.malaysia;
    }

    return (
      <div className="App">
        <header className="App-header">
          <a href="app.js" className="logo">
            explore
          </a>
        </header>
        <body>
          <img ref="images" src={process.env.PUBLIC_URL + '/images/base.jpg'} className="bannerImg" alt={"banner image of landmarks"}/>
          <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="one" alt={"unselected box"} />
          <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="two" alt={"unselected box"} onClick={this.image1clickhandler}/>
          <img ref="images" src={process.env.PUBLIC_URL + '/images/redRect.png'} className="redRect" id="three" alt={"selected box"}/>
          <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="four" alt={"unselected box"}/>
          <img ref="images" src={process.env.PUBLIC_URL + '/images/blueRect.png'} className="blueRect" id="five" alt={"unselected box"} 
            />
          <IntroText 
            picture={selected.mainimg}
            city={selected.mainCity}
            landmark={this.state.locations.shanghai.mainLandmark}
            des={this.state.locations.shanghai.mainDes}/>
          <img ref="images" src={process.env.PUBLIC_URL + this.state.locations.shanghai.mapImage} className="bannerImg" alt={"banner image of landmarks"}/>
          <Card
             picture={this.state.locations.shanghai.foods[0].foodpic}
             title={this.state.locations.shanghai.foods[0].name} />
          <Card
             picture={this.state.locations.shanghai.foods[1].foodpic}
             title={this.state.locations.shanghai.foods[1].name} />
          
        </body>
      </div>
    );
  }
}

export default App;
